// alert('HELLO FROM CONTENT JS')
//NOTE: CONTENT JS CANNOT USE MOST chrome. APIs APART FROM .extension, .runtime, .storage, .i18n

console.log('testing from content js');
// let a = document.getElementsByTagName('a');
// let firstHref = a[0];
// console.log(firstHref)

//note: the whole point of content is to grab info for background.js!

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse)=>{
    if( request.message === "clicked_browser_action" ) {
        let a = document.getElementsByTagName('a');
        let firstHref = a[0].href;
        console.log(firstHref)
        chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    };
  }
);

//here, content can grab href URL but cannot use chrome.tabs.
//on the other hand, background can use chrome.tabs but cannot grab URL

//if you want to use browser actions like icon clicks, LISTEN IN BACKGROUND
//Then, make background tell content to give it info.
//Then, use content to give background the URL.
//Background profits and opens the tab with the URL.