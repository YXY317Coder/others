//posts and gets
res.header("Access-Control-Allow-Origin", "*"); // 或者指定特定的域名
res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
res.header("Access-Control-Allow-Headers", "Content-Type");
//post
function posts(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(data);
    if (xhr.status === 200) {
        return xhr.responseText;
    } else {
        console.error("Error: " + xhr.statusText);
        return null;
    }
}
//get
function gets(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    if (xhr.status === 200) {
        return xhr.responseText;
    } else {
        console.error("Error: " + xhr.statusText);
        return null;
    }
}
