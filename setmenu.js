// setmakamenu.js - part of make america kittens again
// v1.1.3
// by Tom Royal 
// tomroyal.com

// sets up a menu item to invoke the de-kittening

function DeMakaMenuClick(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "undoSnellify"
        });
    });
}


var setMAKAmenu1 = chrome.contextMenus.create({"title": "Unsnellify", "contexts":["page"], "onclick": DeMakaMenuClick});