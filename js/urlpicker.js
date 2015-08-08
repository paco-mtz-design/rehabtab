// var logURL = function(){
//   var hello = "Hello World"
//   var tabURL = window.location.host;
//   console.log(hello);
// };
//
// logURL();

//THIS CODE WORKS
chrome.tabs.query({'active': true}, function(tabs) {
  chrome.tabs.update(tabs[0].id, {url: "http://raidho.mx/"});
      var urlTitle = document.createElement("h2");
      urlTitle.innerHTML = chrome.tabs[0].id;
      console.log("Done");
});
