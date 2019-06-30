function active(tabId) {

  chrome.tabs.get(tabId, function(tab) {

    var id = tab.id,
      url = tab.url
    
    if (url.indexOf('huahaicang') != -1) {
      chrome.browserAction.setIcon({path:'images/online.png'});
    } else {
      chrome.browserAction.setIcon({path:'images/offline.png'});
    }
  })

}

chrome.tabs.onActivated.addListener(function(tabInfo) {

  active(tabInfo.tabId)

})

chrome.tabs.onUpdated.addListener(function(tabId) {

  active(tabId)

})