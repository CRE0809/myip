var jsonip = " ";var jsonhostname = " ";var jsoncity = " ";var jsonregion = " ";var jsoncountry = " ";var jsonloc = " ";var jsonorg = " ";var jsontimezone = " ";
function getIPInfo() {
    document.write(`<h2>IPv4位置：`+jsonip+`</h2>`);
    if(jsonhostname != " ") {
        document.write(`<h2>主機名稱：`+jsonhostname+`</h2>`);
    }
    document.write(`<h2>城市：`+jsoncity+`</h2>`);
    document.write(`<h2>地區：`+jsonregion+`</h2>`);
    document.write(`<h2>國家：`+jsoncountry+`</h2>`);
    document.write(`<h2>IP座標：`+jsonloc+`</h2>`);
    document.write(`<h2>組織：`+jsonorg+`</h2>`);
    document.write(`<h2>時區：`+jsontimezone+`</h2>`);
    document.write(`<h2>瀏覽器資訊：`+navigator.userAgent+`</h2>`);
}
function getIP(json) {
    jsonip = json.ip;jsoncity = json.city;jsonregion = json.region;jsoncountry = json.country;jsonloc = json.loc;jsonorg = json.org;jsontimezone = json.timezone;if(json.hostname) jsonhostname = json.hostname;
}
