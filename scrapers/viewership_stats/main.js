const puppeteer = require("puppeteer-extra")
const StealthSPlugin = require("puppeteer-extra-plugin-stealth")
puppeteer.use(StealthSPlugin());

const fs = require("fs");
const dayjs = require('dayjs')

const {getStats} =  require("./evaluate.js");
const mockData = JSON.parse("[{\"node\":{\"slug\":\"abir-moussi\",\"facebookSlug\":\"AbirMoussiOfficielle\",\"id\":\"58ce0cd4-65cf-5515-b0a8-83786a2a2ef7\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/politicians/abir_moussi.json\"}}},{\"node\":{\"slug\":\"adbeldtif-al-oulwi\",\"facebookSlug\":\"ABDELLATIFALOUI22\",\"id\":\"dc62185a-54c4-5427-8bb6-24d860bbe359\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/politicians/adbeldtif_al_oulwi.json\"}}},{\"node\":{\"slug\":\"mohamad-affes\",\"facebookSlug\":\"Dr.MohamedAffes\",\"id\":\"5ea7d794-c3b2-5093-bf78-cc18a6443624\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/politicians/mohamad_affes.json\"}}},{\"node\":{\"slug\":\"ziad-hechmi\",\"facebookSlug\":\"elhechmi.ziad\",\"id\":\"29cf35d8-17c3-5b96-bb59-e63f9f61c7f6\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/politicians/ziad_hechmi.json\"}}},{\"node\":{\"slug\":\"saif-din-makhlouf\",\"facebookSlug\":\"makseif.page\",\"id\":\"2d34a9da-23f1-5ec4-b9f4-ef0782c6bff5\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/politicians/saif_makhlouf.json\"}}},{\"node\":{\"slug\":\"nedhal-soudi\",\"facebookSlug\":\"nidhalsaoudi89\",\"id\":\"5e6ad5b1-df72-5130-9f31-cfd492bb83eb\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/politicians/nedhal_soudi.json\"}}}]")


function arrFullToCondensed(interval, dataArr, floor, ceil= undefined){
    dataArr = dataArr.reverse();

    let start = new dayjs(floor).startOf('month')
    let end = start.add(interval.magnitude, interval.unit)
    ceil = new dayjs(ceil);
    const resultArr = []; let condensedViews = 0, condensedViewsSinceStart  = 0,condensedLivesCount = 0;
    
    for(let i = 0; i<=dataArr.length && start.diff(ceil) <= 0; i++){
  
        let fullViews = dataArr[i].views;
        let fullTimestamp = new dayjs(dataArr[i].timestamp * 1000)
  
        if(fullTimestamp.diff(end) <= 0 && fullTimestamp.diff(start) >= 0){
            condensedViews += fullViews
            condensedViewsSinceStart = dataArr[i].viewsSinceStart
            condensedLivesCount++
            
            //if this is the last item and the condensedViews is loaded, we don't want to waste it. we will push it even though we haven't surpassed the interval.
            
        if(i !== (dataArr.length -1))
            continue 
        else {
            console.log('this is last viable fullpoint')
        }
            
        
        
        }
        //fullTimestamp > end
        resultArr.push({
            "startTimestamp":start.unix(),
            "endTimestamp":end.unix(),
            "views":condensedViews,
            "viewsSinceStart":condensedViewsSinceStart,
            "avgViewsPerLive": condensedLivesCount === 0 ? 0 : parseInt(condensedViews/condensedLivesCount)
        })
        start = new dayjs(end);
        end = end.add(interval.magnitude, interval.unit)
        
        //triggers incase the fullTimestamp is beyond the end even after the interval increase. This means the interval had 0 views. 
        //if(fullTimestamp.diff(end) >=  0 || fullTimestamp.diff(start) <=0){
        i--;
        condensedViews = 0
        condensedLivesCount = 0
            //continue;
        
        //condensedViews = fullViews;
        //condensedViewsSinceStart = condensedViewsSinceStart
        
    }
    return resultArr;
}


async function main(query){
    let browser;
    try{
        browser = await puppeteer.launch({headless: false,slowMo:50 })
        const page = await browser.newPage();
        
        //defines dayjs method that converts facebook time strings into unix timestamp 
        await page.exposeFunction("stringToUnixTime", (dateStr)=>{
            if(dateStr.includes("Today")) return new dayjs().unix()
            if(dateStr.includes("Yesterday")) return new dayjs().subtract(1, "day").unix();
            //general case
            if(dateStr.match(/\d{4}/) == null) dateStr += " " + new dayjs().get("y") 
            
            return new dayjs(dateStr).unix();
        })
        
        await page.setCookie({name: 'locale', value: 'en_US', domain:'facebook.com'})
        //scrapes full viewership stats and adds them to the politician json file.
        for(let i = 0; i< query.length; i++){ 
            const {facebookSlug, parent:{absolutePath}} = query[i].node
            
            await page.goto(`https://www.facebook.com/${facebookSlug}/live_videos/`)
            if(i == 0)
                await page.click('ul._2pid > li:nth-of-type(3) > a')
            
            await page.waitForSelector("._2pie");

            const viewershipStatsObj = await page.evaluate(getStats)
            const condensedArr =  arrFullToCondensed(
                {'magnitude': 1, 'unit': "months"},
                viewershipStatsObj.full,
                '2019'
                /*ceil will be present by defaults*/
                )
            
            
            let data = JSON.parse(fs.readFileSync(absolutePath));
            
            data.viewershipStats = viewershipStatsObj;
            data.viewershipStats.condensed = condensedArr
            
            fs.writeFileSync(absolutePath, JSON.stringify(data));

        }
        
    }
    catch(err){
        console.trace(err);
    }finally{
        if(browser) browser.close()
    }


}



// for(let i = 0; i< mockData.length; i++){ 
//     const {parent:{absolutePath}} = mockData[i].node
    
//     const fullArr = JSON.parse(fs.readFileSync(absolutePath)).viewershipStats.full;
//     const condensedArr =  arrFullToCondensed({'magnitude': 1, 'unit': "months"}, fullArr )
    
//     let data = JSON.parse(fs.readFileSync(absolutePath));
//     data.viewershipStats.condensed = condensedArr;
//     fs.writeFileSync(absolutePath, JSON.stringify(data));


// }


module.exports.main  = main;
