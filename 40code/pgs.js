//posts and gets
function posts(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
    if (xhr.status === 200) {
        return xhr.responseText;
    } else {
        console.error("Error: " + xhr.statusText);
        return null;
    }
}

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
