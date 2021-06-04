const scraper = require("./scrapers/mainVS")
scraper.main()

function test(){

    if(dateStr.includes("Today")) return new dayjs().unix()
    if(dateStr.includes("Yesterday")) return new dayjs().subtract(1, "day").unix();
    
    //general case
    if(dateStr.match(/\d{4}/) == null) dateStr += " " + new dayjs().get("y").unix() 
    return new dayjs(dateStr).unix();
    
}

// const resultObj = test();
// console.log(resultObj);

// console.log(new dayjs(resultObj*1000) )