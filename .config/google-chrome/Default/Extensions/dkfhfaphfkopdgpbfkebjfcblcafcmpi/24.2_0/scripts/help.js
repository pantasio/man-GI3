function getFreshLatestGoogleUserIntoBGScope(){chrome.runtime.sendMessage({new_notify_background_that_user_is_logged_in:!0},function(a){"successful_user_login"==a.reply&&(window.location="https://mightytext.net/app")})}function closeThisWindow(){chrome.tabs.query({url:chrome.extension.getURL("help.html")},function(a){chrome.tabs.remove(a[0].id,function(){console.log("window removed")})})}getFreshLatestGoogleUserIntoBGScope();