async function getStats(){ 
    
    function stringToViewsInt(viewsStr){
        let result = viewsStr
        .replace(" views", "")
        .replace("K", "000")
        .replace(/.*M\b/, parseFloat(viewsStr.match(/[\d.]*/)[0])  * 1000000)
    
        return parseInt(result);
    }
    function stringToDurationSec(durationStr){
        if(!durationStr) return 0;
        return durationStr
        .split(":")
        .reverse()
        .reduce((accumulator, currentValue, currentIndex)=>{
            return accumulator + (currentValue * 60 ** currentIndex)
        },0)
    }
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    
    const FLOORYEAR = 2019
    if( new Date().getFullYear() == FLOORYEAR) throw new Error("I'm lazy to make it work on current year. floor year should be set to one year ago minimum");

    const result = [];
    let liveThumbs, lastIndexLiveThumb
    let aggregateViews = 0, aggregateDuration = 0;

    while(true){
        lastIndexLiveThumb = typeof(liveThumbs) == "undefined" ? 0 : liveThumbs.length
        liveThumbs =  document.querySelectorAll("span.fcg")

        for(let i = lastIndexLiveThumb; i< liveThumbs.length; i++){ 
            
            let year = liveThumbs[i].parentElement.textContent.match(/\d{4}/);
            let liveViews, liveDate, stringLiveDuration, liveDuration;
            
            //liveThumb included in the resultObj
            if(!year || parseInt(year[0]) >= FLOORYEAR ){

                liveViews = stringToViewsInt(liveThumbs[i].textContent)
                liveDate = await stringToUnixTime(liveThumbs[i].parentElement.textContent.match(/· (.*)/)[1]) //defined in puppeteer exposeFunction method
                stringLiveDuration = liveThumbs[i].offsetParent.querySelector("._51m- ._5ig6")
                liveDuration = stringToDurationSec(stringLiveDuration != null ? stringLiveDuration.textContent : null)

                aggregateViews += liveViews
                aggregateDuration += liveDuration
                
                result.push({"timestamp": liveDate, "views": liveViews, "duration": liveDuration})
            }
            //done, reached floor year limit; 
            else return {
                "full": result,
                "brief": {
                    "viewsPerLive" :parseInt(aggregateViews/liveThumbs.length) ,
                    "aggregateViews": aggregateViews,
                    "aggregateDuration": aggregateDuration 
                }
            } ;
        }
        
        //didn't reach floor, but consumed all videos uploaded. needs to be refactored to ensure DRY
        if(document.querySelector(".uiMorePager") == null)  return {
            "full": result,
            "brief": {
                "viewsPerLive" :parseInt(aggregateViews/liveThumbs.length) ,
                "aggregateViews": aggregateViews,
                "aggregateDuration": aggregateDuration 
            }
        }     
        
        console.log("Scrolling...");
        await sleep(parseInt(Math.random() * 150) * 100) 
        window.scroll(0, document.body.scrollHeight)
    }
}

module.exports.getStats = getStats;

