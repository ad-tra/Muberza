const dayjs =require("dayjs");



function getStats(){ 
    
    function stringToViewsInt(viewsStr){
        let result = viewsStr
        .replace(" views", "")
        .replace("K", "000")
        .replace(/.*M\b/, parseFloat(viewsStr.match(/[\d.]*/)[0])  * 1000000)
    
        return parseInt(result);
    }
    function stringToDurationSec(durationStr){
        return durationStr
        .split(":")
        .reverse()
        .reduce((accumulator, currentValue, currentIndex)=>{
            return accumulator + (currentValue * 60 ** currentIndex)
        },0)
    }
    
    
    try{ 
        let livesDataArr = []
        let livesEls = document.querySelectorAll('span.fcg');
        let aggregateViews = 0, aggregateDuration;

        for (let j = 0; j< livesEls.length ;j++) {

            let liveViews = stringToViewsInt(livesEls[j].textContent)
            let liveDate = livesEls[j].parentElement.textContent.match(/· (.*)/)[1]
            let liveDuration = stringToDurationSec(livesEls[j].offsetParent.querySelector("._51m- ._5ig6").textContent)

            aggregateViews += liveViews
            aggregateDuration += liveDuration

            livesDataArr.push({"date": liveDate, "views": liveViews, "duration": liveDuration})
        }

        return {
            "full": livesDataArr,
            "brief": {
                "viewsPerLive" :aggregateViews/livesEls.length ,
                "aggregateViews": aggregateViews,
                "aggregateDuration": aggregateDuration 
            }
        }
    }
    catch(err){
        return console.trace(err);
    }
}
module.exports.getStats = getStats;

