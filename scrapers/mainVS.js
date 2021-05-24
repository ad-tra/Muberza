const puppeteer = require("puppeteer-extra")
const StealthSPlugin = require("puppeteer-extra-plugin-stealth")
const fs = require("fs");
const dayjs = require('dayjs')

puppeteer.use(StealthSPlugin());

const {getStats} =  require("./viewership_stats.js");
const mockData = JSON.parse("[{\"node\":{\"slug\":\"abir-moussi\",\"facebookSlug\":\"AbirMoussiOfficielle\",\"id\":\"58ce0cd4-65cf-5515-b0a8-83786a2a2ef7\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/abir_moussi.json\"}}},{\"node\":{\"slug\":\"adbeldtif-al-oulwi\",\"facebookSlug\":\"ABDELLATIFALOUI22\",\"id\":\"dc62185a-54c4-5427-8bb6-24d860bbe359\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/adbeldtif_al_oulwi.json\"}}},{\"node\":{\"slug\":\"mohamad-affes\",\"facebookSlug\":\"Dr.MohamedAffes\",\"id\":\"5ea7d794-c3b2-5093-bf78-cc18a6443624\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/mohamad_affes.json\"}}},{\"node\":{\"slug\":\"ziad-hechmi\",\"facebookSlug\":\"elhechmi.ziad\",\"id\":\"29cf35d8-17c3-5b96-bb59-e63f9f61c7f6\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/ziad_hechmi.json\"}}},{\"node\":{\"slug\":\"saif-din-makhlouf\",\"facebookSlug\":\"makseif.page\",\"id\":\"2d34a9da-23f1-5ec4-b9f4-ef0782c6bff5\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/saif_makhlouf.json\"}}},{\"node\":{\"slug\":\"nedhal-soudi\",\"facebookSlug\":\"nidhalsaoudi89\",\"id\":\"5e6ad5b1-df72-5130-9f31-cfd492bb83eb\",\"parent\":{\"absolutePath\":\"C:/Users/19083/OneDrive/Documents/programation_projects/personal/Muberza/static/api/nedhal_soudi.json\"}}}]")




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
        
        
        
        for(let i = 0; i< mockData.length; i++){ 
            const {facebookSlug, parent:{absolutePath}} = mockData[i].node

            await page.goto(`https://www.facebook.com/${facebookSlug}/live_videos/`)
            await page.waitForSelector("._2pie");

            const result = await page.evaluate(getStats)
            setJSON(absolutePath, result);

            await page.waitForTimeout(parseInt(Math.random() * 50) * 100);
            
        }
        
    }
    catch(err){
        console.trace(err);
    }finally{
        if(browser) browser.close()
    }


}



module.exports.main  = main;
