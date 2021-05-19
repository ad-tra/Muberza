import dayjs from "dayjs"

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


let livesArr = []
let livesEls = document.querySelectorAll('span.fcg');
let aggregateViews = 0;

for (let j = 0; j< livesEls.length ;j++) {

    let viewsNum = stringToViewsInt(livesEls[j].textContent)
    let viewsDate = livesEls[j].parentElement.textContent.match(/· (.*)/)[1]
    let liveDuration = stringToDurationSec(livesEls[j].offsetParent.querySelector("._51m- ._5ig6").textContent)

    aggregateViews += viewsNum
    livesArr.push({"date": viewsDate, "views": viewsNum, "duration": liveDuration})
}

let livesObj = {"data": livesArr, "vuesPerLive" :aggregateViews/livesEls.length ,"aggregateViews": aggregateViews }
console.log(livesObj)

