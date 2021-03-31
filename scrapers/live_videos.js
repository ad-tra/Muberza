let result = ""
let final = 0
let nodes = document.querySelectorAll('span.fcg');
let j = 0
for (j = 0; j< nodes.length ;j++) {
    if (nodes[j].parentElement.textContent.match("2020") != null)
        break;
    
    result = nodes[j].textContent
    result = result.replace(" views", "")
    result = result.replace("K", "000")

    if (result.match("M") != null) {
        result = parseFloat(result.match(/[\d.]+/)[0]) * 1000000
    }
    result = parseInt(result);
    console.log(result+"\n"+j)
    final = final + result

}
function intToString(final){
final = final.toString()
for (let i = final.length - 3; i > 0; i = i - 3)
    final = final.substring(0, i) + "," + final.substring(i)
return final
}


console.log("AVG - "+ intToString(parseInt(final/j+1)))



console.log("VIEWS - "+ intToString(final))

 
