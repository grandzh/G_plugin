if (typeof sogouExplorer != "undefined") {
    chrome = sogouExplorer
}
var showMessageTimer = "";
function getHost() {
    return "http://hao.weidunewtab.com/"
}
function initChromeI18n() {
    var matches = document.querySelectorAll('[i18n]');
    for (var i = 0; i < matches.length; ++i) {
        var obj = matches[i];
        v = chrome.i18n.getMessage(obj.getAttribute("i18n"));
        if (v == "") v = obj.getAttribute('i18n');
        if (obj.tagName == 'INPUT') {
            obj.value = v
        } else {
            obj.innerText = v
        }
    }
}
function showMessage(message, time) {
    var showMsg = document.getElementById('showMsg');
    showMsg.innerHTML = '<div class="msg">' + message + '</div>';
    showMsg.style.display = 'block';
    showMessageTimer && clearTimeout(showMessageTimer);
    if (time) {
        showMessageTimer = setTimeout(function() {
            showMsg.style.display = 'none'
        },
        time)
    }
}
function openURL(url) {
    if (typeof sogouExplorer != "undefined") {
        var _url = sogouExplorer.extension.getURL(url);
        sogouExplorer.tabs.create({
            url: 'about:blank',
            selected: true
        },
        function(tab) {
            setTimeout(function() {
                sogouExplorer.tabs.executeScript(tab.id, {
                    code: 'window.location.href="' + _url + '"'
                })
            },
            100)
        })
    } else {
        var _url = chrome.extension.getURL(url);
        chrome.tabs.create({
            url: _url,
            selected: true
        },
        function(tab) {
            console.log(tab.id)
        })
    }
}
function isUrl(str_url) {
    var strRegex = "^((https|http)?://)?[A-Za-z0-9-_]+\\.[0-9a-zA-Z_!~*'().;?:@&=+$,%#-\/]+$";
    var re = new RegExp(strRegex);
    return re.test(str_url)
}
function getPmLv(pmVal) {
    if (pmVal > 0 && pmVal <= 50) {
        return '优'
    } else if (pmVal > 50 && pmVal <= 100) {
        return '良'
    } else if (pmVal > 100 && pmVal <= 150) {
        return '轻度'
    } else if (pmVal > 150 && pmVal <= 200) {
        return '中度'
    } else if (pmVal > 200 && pmVal <= 300) {
        return '重度'
    } else if (pmVal > 300) {
        return '严重'
    }
}
function getPmCol(pmVal) {
    if (pmVal > 0 && pmVal <= 50) {
        return '#00e400'
    } else if (pmVal > 50 && pmVal <= 100) {
        return '#ffda00'
    } else if (pmVal > 100 && pmVal <= 150) {
        return '#ff7e00'
    } else if (pmVal > 150 && pmVal <= 200) {
        return '#ff0000'
    } else if (pmVal > 200 && pmVal <= 300) {
        return '#99004c'
    } else if (pmVal > 300) {
        return '#7e0023'
    }
}