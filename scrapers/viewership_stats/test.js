const dayjs = require('dayjs');


let viewershipStatsObj = {"party":"karama","name":"زياد الهاشمي","briefDiscrp":"لكن لا بــــد أن أوضح لك أن كل هذه الأفكار لمغلوطــة حول ","thumbImage":"../../../data/images/ziad_head.png","slug":"ziad-hechmi","facebookSlug":"elhechmi.ziad","viewershipStats":{"full":[{"timestamp":1619323200,"views":90000,"duration":7572,"viewsSinceStart":4476300},{"timestamp":1618718400,"views":96000,"duration":5061,"viewsSinceStart":4386300},{"timestamp":1618632000,"views":82000,"duration":2494,"viewsSinceStart":4290300},{"timestamp":1618372800,"views":12000,"duration":544,"viewsSinceStart":4208300},{"timestamp":1618372800,"views":8500,"duration":256,"viewsSinceStart":4196300},{"timestamp":1617768000,"views":9100,"duration":234,"viewsSinceStart":4187800},{"timestamp":1617336000,"views":7000,"duration":233,"viewsSinceStart":4178700},{"timestamp":1616904000,"views":25000,"duration":703,"viewsSinceStart":4171700},{"timestamp":1616904000,"views":34000,"duration":970,"viewsSinceStart":4146700},{"timestamp":1615352400,"views":69000,"duration":524,"viewsSinceStart":4112700},{"timestamp":1615352400,"views":57000,"duration":147,"viewsSinceStart":4043700},{"timestamp":1615352400,"views":66000,"duration":1109,"viewsSinceStart":3986700},{"timestamp":1615352400,"views":72000,"duration":1121,"viewsSinceStart":3920700},{"timestamp":1615352400,"views":70000,"duration":976,"viewsSinceStart":3848700},{"timestamp":1615352400,"views":39000,"duration":346,"viewsSinceStart":3778700},{"timestamp":1615266000,"views":51000,"duration":446,"viewsSinceStart":3739700},{"timestamp":1615266000,"views":128000,"duration":826,"viewsSinceStart":3688700},{"timestamp":1615266000,"views":36000,"duration":297,"viewsSinceStart":3560700},{"timestamp":1615266000,"views":149000,"duration":1741,"viewsSinceStart":3524700},{"timestamp":1615266000,"views":128000,"duration":648,"viewsSinceStart":3375700},{"timestamp":1615179600,"views":139000,"duration":409,"viewsSinceStart":3247700},{"timestamp":1614920400,"views":22000,"duration":1033,"viewsSinceStart":3108700},{"timestamp":1613538000,"views":105000,"duration":1668,"viewsSinceStart":3086700},{"timestamp":1611550800,"views":36000,"duration":360,"viewsSinceStart":2981700},{"timestamp":1611464400,"views":32000,"duration":247,"viewsSinceStart":2945700},{"timestamp":1609563600,"views":129000,"duration":5749,"viewsSinceStart":2913700},{"timestamp":1609477200,"views":86000,"duration":6235,"viewsSinceStart":2784700},{"timestamp":1609390800,"views":214000,"duration":6189,"viewsSinceStart":2698700},{"timestamp":1609045200,"views":306000,"duration":7045,"viewsSinceStart":2484700},{"timestamp":1605243600,"views":60000,"duration":3190,"viewsSinceStart":2178700},{"timestamp":1604638800,"views":18000,"duration":2114,"viewsSinceStart":2118700},{"timestamp":1604638800,"views":24000,"duration":1453,"viewsSinceStart":2100700},{"timestamp":1602648000,"views":100000,"duration":556,"viewsSinceStart":2076700},{"timestamp":1596859200,"views":16000,"duration":213,"viewsSinceStart":1976700},{"timestamp":1596859200,"views":9300,"duration":206,"viewsSinceStart":1960700},{"timestamp":1596081600,"views":260000,"duration":209,"viewsSinceStart":1951400},{"timestamp":1596081600,"views":32000,"duration":36,"viewsSinceStart":1691400},{"timestamp":1596081600,"views":134000,"duration":357,"viewsSinceStart":1659400},{"timestamp":1595995200,"views":96000,"duration":803,"viewsSinceStart":1525400},{"timestamp":1595476800,"views":15000,"duration":200,"viewsSinceStart":1429400},{"timestamp":1594872000,"views":92000,"duration":398,"viewsSinceStart":1414400},{"timestamp":1594872000,"views":62000,"duration":270,"viewsSinceStart":1322400},{"timestamp":1594699200,"views":27000,"duration":96,"viewsSinceStart":1260400},{"timestamp":1591761600,"views":76000,"duration":3842,"viewsSinceStart":1233400},{"timestamp":1586923200,"views":14000,"duration":1160,"viewsSinceStart":1157400},{"timestamp":1578114000,"views":15000,"duration":389,"viewsSinceStart":1143400},{"timestamp":1575781200,"views":31000,"duration":380,"viewsSinceStart":1128400},{"timestamp":1573275600,"views":47000,"duration":524,"viewsSinceStart":1097400},{"timestamp":1573275600,"views":10000,"duration":539,"viewsSinceStart":1050400},{"timestamp":1572062400,"views":12000,"duration":967,"viewsSinceStart":1040400},{"timestamp":1571112000,"views":7600,"duration":31,"viewsSinceStart":1028400},{"timestamp":1571112000,"views":26000,"duration":1871,"viewsSinceStart":1020800},{"timestamp":1570939200,"views":316000,"duration":2190,"viewsSinceStart":994800},{"timestamp":1569902400,"views":6400,"duration":362,"viewsSinceStart":678800},{"timestamp":1569902400,"views":3600,"duration":693,"viewsSinceStart":672400},{"timestamp":1569729600,"views":7300,"duration":723,"viewsSinceStart":668800},{"timestamp":1569729600,"views":6200,"duration":411,"viewsSinceStart":661500},{"timestamp":1569643200,"views":6200,"duration":179,"viewsSinceStart":655300},{"timestamp":1569643200,"views":14000,"duration":96,"viewsSinceStart":649100},{"timestamp":1569556800,"views":2800,"duration":68,"viewsSinceStart":635100},{"timestamp":1569470400,"views":116000,"duration":1622,"viewsSinceStart":632300},{"timestamp":1567742400,"views":5000,"duration":2198,"viewsSinceStart":516300},{"timestamp":1566964800,"views":4600,"duration":3908,"viewsSinceStart":511300},{"timestamp":1566878400,"views":9300,"duration":3400,"viewsSinceStart":506700},{"timestamp":1566792000,"views":9500,"duration":4535,"viewsSinceStart":497400},{"timestamp":1566619200,"views":6100,"duration":3901,"viewsSinceStart":487900},{"timestamp":1566187200,"views":5300,"duration":7651,"viewsSinceStart":481800},{"timestamp":1566100800,"views":5200,"duration":2993,"viewsSinceStart":476500},{"timestamp":1566014400,"views":4900,"duration":3029,"viewsSinceStart":471300},{"timestamp":1565150400,"views":7400,"duration":3537,"viewsSinceStart":466400},{"timestamp":1565150400,"views":10000,"duration":1664,"viewsSinceStart":459000},{"timestamp":1565064000,"views":6400,"duration":3169,"viewsSinceStart":449000},{"timestamp":1564804800,"views":12000,"duration":8384,"viewsSinceStart":442600},{"timestamp":1564804800,"views":5600,"duration":2433,"viewsSinceStart":430600},{"timestamp":1564545600,"views":5800,"duration":124,"viewsSinceStart":425000},{"timestamp":1563508800,"views":5600,"duration":1364,"viewsSinceStart":419200},{"timestamp":1563508800,"views":10000,"duration":4539,"viewsSinceStart":413600},{"timestamp":1563336000,"views":4800,"duration":2876,"viewsSinceStart":403600},{"timestamp":1563249600,"views":5900,"duration":2722,"viewsSinceStart":398800},{"timestamp":1563163200,"views":3500,"duration":3030,"viewsSinceStart":392900},{"timestamp":1563163200,"views":3800,"duration":2660,"viewsSinceStart":389400},{"timestamp":1563076800,"views":6000,"duration":2820,"viewsSinceStart":385600},{"timestamp":1562990400,"views":3000,"duration":2666,"viewsSinceStart":379600},{"timestamp":1562904000,"views":11000,"duration":2210,"viewsSinceStart":376600},{"timestamp":1562299200,"views":7800,"duration":2425,"viewsSinceStart":365600},{"timestamp":1562040000,"views":10000,"duration":4028,"viewsSinceStart":357800},{"timestamp":1561953600,"views":8200,"duration":3689,"viewsSinceStart":347800},{"timestamp":1561867200,"views":4600,"duration":3061,"viewsSinceStart":339600},{"timestamp":1561867200,"views":16000,"duration":2621,"viewsSinceStart":335000},{"timestamp":1561780800,"views":11000,"duration":2998,"viewsSinceStart":319000},{"timestamp":1561521600,"views":11000,"duration":3198,"viewsSinceStart":308000},{"timestamp":1561348800,"views":5000,"duration":3105,"viewsSinceStart":297000},{"timestamp":1561262400,"views":5600,"duration":3134,"viewsSinceStart":292000},{"timestamp":1561176000,"views":5200,"duration":3052,"viewsSinceStart":286400},{"timestamp":1560916800,"views":20000,"duration":2963,"viewsSinceStart":281200},{"timestamp":1558497600,"views":4600,"duration":3512,"viewsSinceStart":261200},{"timestamp":1558497600,"views":4600,"duration":3512,"viewsSinceStart":256600},{"timestamp":1558497600,"views":4600,"duration":3512,"viewsSinceStart":252000},{"timestamp":1558497600,"views":4600,"duration":3512,"viewsSinceStart":247400},{"timestamp":1557892800,"views":6400,"duration":3254,"viewsSinceStart":242800},{"timestamp":1557806400,"views":6000,"duration":5190,"viewsSinceStart":236400},{"timestamp":1557806400,"views":6000,"duration":5190,"viewsSinceStart":230400},{"timestamp":1557806400,"views":6000,"duration":5190,"viewsSinceStart":224400},{"timestamp":1557633600,"views":26000,"duration":1837,"viewsSinceStart":218400},{"timestamp":1555300800,"views":17000,"duration":2323,"viewsSinceStart":192400},{"timestamp":1555300800,"views":2600,"duration":2556,"viewsSinceStart":175400},{"timestamp":1555300800,"views":1300,"duration":2556,"viewsSinceStart":172800},{"timestamp":1552708800,"views":1500,"duration":316,"viewsSinceStart":171500},{"timestamp":1550379600,"views":139000,"duration":1795,"viewsSinceStart":170000},{"timestamp":1548046800,"views":24000,"duration":1293,"viewsSinceStart":31000},{"timestamp":1547269200,"views":7000,"duration":419,"viewsSinceStart":7000}],"brief":{"viewsPerLive":40074,"aggregateViews":4488300,"aggregateDuration":237845},"condensed":[{"startTimestamp":1546318800,"endTimestamp":1548997200,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1548997200,"endTimestamp":1551416400,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1551416400,"endTimestamp":1554091200,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1554091200,"endTimestamp":1556683200,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1556683200,"endTimestamp":1559361600,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1559361600,"endTimestamp":1561953600,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1561953600,"endTimestamp":1564632000,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1564632000,"endTimestamp":1567310400,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1567310400,"endTimestamp":1569902400,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1569902400,"endTimestamp":1572580800,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1572580800,"endTimestamp":1575176400,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1575176400,"endTimestamp":1577854800,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1577854800,"endTimestamp":1580533200,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1580533200,"endTimestamp":1583038800,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1583038800,"endTimestamp":1585713600,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1585713600,"endTimestamp":1588305600,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1588305600,"endTimestamp":1590984000,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1590984000,"endTimestamp":1593576000,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1593576000,"endTimestamp":1596254400,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1596254400,"endTimestamp":1598932800,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1598932800,"endTimestamp":1601524800,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1601524800,"endTimestamp":1604203200,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1604203200,"endTimestamp":1606798800,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1606798800,"endTimestamp":1609477200,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1609477200,"endTimestamp":1612155600,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1612155600,"endTimestamp":1614574800,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1614574800,"endTimestamp":1617249600,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1617249600,"endTimestamp":1619841600,"views":0,"viewsSinceStart":4488300},{"startTimestamp":1619841600,"endTimestamp":1622520000,"views":12000,"viewsSinceStart":4476300},{"startTimestamp":1622520000,"endTimestamp":1625112000,"views":0,"viewsSinceStart":4476300}]}} 
viewershipStatsObj = viewershipStatsObj.viewershipStats;

function arrFullToCondensed(interval, dataArr, floor, ceil= undefined){
    dataArr = dataArr.reverse();

    let start = new dayjs(floor).startOf('month')
    let end = start.add(interval.magnitude, interval.unit)
    ceil = new dayjs(ceil);
    const resultArr = []; let condensedViews = 0, fullViewsSinceStart  = 0; 
    
    for(let i = 0; i<=dataArr.length && start.diff(ceil) <= 0; i++){
  
        let fullViews = dataArr[i].views;
        let fullTimestamp = new dayjs(dataArr[i].timestamp * 1000)
  
        if(fullTimestamp.diff(end) <= 0 && fullTimestamp.diff(start) >= 0){
            condensedViews += fullViews
            fullViewsSinceStart = dataArr[i].viewsSinceStart
            
            //if this is the last item and the condensedViews is loaded, we don't want to waste it. we will push it even though we haven't surpassed the interval.
            
        if(i !== (dataArr.length -1))
            continue 
        else {
            console.log('this is last viable fullpoint')
        }
            
        
        
        }
        //fullTimestamp > end
        resultArr.push({"startTimestamp":start.unix(),"endTimestamp":end.unix(), "views":condensedViews, "viewsSinceStart":fullViewsSinceStart })
        start = new dayjs(end);
        end = end.add(interval.magnitude, interval.unit)
        
        //triggers incase the fullTimestamp is beyond the end even after the interval increase. This means the interval had 0 views. 
        //if(fullTimestamp.diff(end) >=  0 || fullTimestamp.diff(start) <=0){
        i--;
        condensedViews = 0
            
            //continue;
        
        //condensedViews = fullViews;
        //condensedViewsSinceStart = fullViewsSinceStart
        
    }
    return resultArr;
}

const result = arrFullToCondensed(
  {'magnitude': 1, 'unit': "months"},
  viewershipStatsObj.full,
  '2019'
  /*ceil will be present by defaults*/
  )
console.log(result.length + "\n\n\n" );
console.log((result));