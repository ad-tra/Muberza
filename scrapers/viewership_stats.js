



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

    
    const FLOORYEAR = 2020
    if( new Date().getFullYear() == FLOORYEAR) throw new Error("I'm lazy to make it work on current year. floor year should be set to one year ago minimum");

    const result = [];
    while(true){

        let liveThumbs =  document.querySelectorAll("span.fcg")
        let aggregateViews = 0, aggregateDuration = 0;

        for(let i = 0; i< liveThumbs.length; i++){ 
            
            let year = liveThumbs[i].parentElement.textContent.match(/\d{4}/);
            if(!year || parseInt(year[0]) >= FLOORYEAR ){

                let liveViews = stringToViewsInt(liveThumbs[i].textContent)
                let liveDate = await stringToUnixTime(liveThumbs[i].parentElement.textContent.match(/· (.*)/)[1]) //defined in puppeteer exposeFunction method
                let stringLiveDuration = liveThumbs[i].offsetParent.querySelector("._51m- ._5ig6")
                let liveDuration = stringToDurationSec(stringLiveDuration != null ? stringLiveDuration.textContent : null)

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
            } 
        }
            
 
        await sleep(parseInt(Math.random() * 100) * 100) 
        console.log("Scrolling...");
        //didn't reach floor, but consumed all videos uploaded. needs to be refactored to ensure DRY
        if(document.querySelector(".uiMorePager") == null)  
        return {
            "full": result,
            "brief": {
                "viewsPerLive" :parseInt(aggregateViews/liveThumbs.length) ,
                "aggregateViews": aggregateViews,
                "aggregateDuration": aggregateDuration 
            }
        };
        window.scroll(0, document.body.scrollHeight)
       

    }


}

module.exports.getStats = getStats;

