let vusNum = ""
let data = []
let nodes = document.querySelectorAll('span.fcg');
let liveViewsCount = 0;

for (let j = 0; j< nodes.length ;j++) {
    //if (nodes[j].parentElement.textContent.match("2020") != null)
    //    break;
    
    vusNum = nodes[j].textContent.replace(" views", "").replace("K", "000")

    if (vusNum.match("M") != null) {
        vusNum = parseFloat(vusNum.match(/[\d.]+/)[0]) * 1000000
    }
    vusNum = parseInt(result);
    liveViewsCount += vusNum

    let vusDate = nodes[j].parentElement.textContent.match(/· (.*)/)[1]
    

    data.push({"x": vusDate, "y": vusNum})

}

let resultObj = {"data": data, "vuesPerLive" :liveViewsCount/j ,"aggregateViews": liveViewsCount }
console.log(resultObj)
