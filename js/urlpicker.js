// var logURL = function(){
//   var hello = "Hello World"
//   var tabURL = window.location.host;
//   console.log(hello);
// };
//
// logURL();

//THIS CODE WORKS
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    var whitelist = ["www.codecademy.com",
                    "www.coursera.com",
                    "www.codewars.com",
                    "www.codebabes.com"
                    ];
    var blacklist = ["www.facebook.com",
                    "twitter.com",
                    "www.buzzfeed.com",
                    "www.9gag.com"
                    ];
    var url = window.location.hostname;
    var x = 0;

    //Agrega input a WHITELIST
    function whitelistAdd() {
            var wList = document.getElementById('section-linemove-2');

            for (var i in whitelist) {
              var wListItem = document.createElement("p");
              wListItem.innerHTML = whitelist[i];
              wList.appendChild(wListItem);
            };
    }

    //Agrega input a BLACKLIST
    function blacklistAdd() {
            var bList = document.getElementById('section-linemove-1');

            for (var i in blacklist) {
              var bListItem = document.createElement("p");
              bListItem.innerHTML = blacklist[i];
              bList.appendChild(bListItem);
            };
    }

    whitelistAdd();
    blacklistAdd();

    // var myUrl = window.location.href;
    // var myUrl = chrome.runtime.getURL;

    myUrl = tabs[0].url;
    myUrl = myUrl.split('/')[2];

    // For debugging:
    // alert(myUrl);
    // console.log(tabs);


    //Comparación de URL con array BLACKLIST
    for (i = 0; i < blacklist.length; i++) {
            if (blacklist[i] == myUrl) {
                    url = whitelist[i];
                    url = "http://" + url;
                    chrome.tabs.update(tabs[0].id, {url: url});
            };
    };

//if (myUrl == "facebook.com") {
  //chrome.tabs.update(tabs[0].id, {url: "http://raidho.mx/"});
//} else if (window.location.hostname !== "facebook.com") {
//  console.log("BAD");
  //chrome.tabs.update(tabs[0].id, {url: "http://codecademy.com/"});
//};




    // chrome.tabs.update(tabs[0].id, {url: "http://raidho.mx/"});



      // var urlTitle = document.createElement("h2");
      // urlTitle.innerHTML = chrome.tabs[0].id;

      // chrome.tabs.update(tabs[0].id, {url: "http://raidho.mx/"});
    }
);
