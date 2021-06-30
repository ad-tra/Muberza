const scraper = require("./scrapers/mainVS");
async function driver(){
    console.log(scraper.main());
}
driver();