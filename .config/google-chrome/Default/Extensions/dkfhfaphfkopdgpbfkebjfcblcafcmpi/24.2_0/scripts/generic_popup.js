checkBrowserActionIconStateAndDisplayPopupContent();
function checkBrowserActionIconStateAndDisplayPopupContent(){chrome.browserAction.getTitle({},function(a){if(-1<a.indexOf(getLocalizedAppString({key:"browser_action_no_int"}))){var b=getLocalizedAppString({key:"ba_error_popup_1"}).replace(/%br%/g,"<br>");displayAppStateSpecficContent(b);checkInternetConnection(a)}else-1<a.indexOf(getLocalizedAppString({key:"browser_action_unable_to_connect"}))&&(b=getLocalizedAppString({key:"ba_error_popup_2"}).replace(/%br%/g,"<br>").replace(/%bold%/g,"<b>").replace(/%bold_close%/g,
"</b>"),displayAppStateSpecficContent(b,!0,"Retry",function(){checkInternetConnection(a)}))})}function displayAppStateSpecficContent(a,b,c,d){$(".message").html(a);b&&($(".action-btn").text(c).on("click",function(){d()}),$(".action-btn-wrapper").show());$("body").show()}
function checkInternetConnection(a){navigator.onLine&&$.ajax({type:"GET",url:"https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",timeout:2E3,dataType:"text",success:function(b){tellBGToReloadCRX(a)},error:function(){}})}
function tellBGToReloadCRX(a){var b;-1<a.indexOf(getLocalizedAppString({key:"browser_action_no_int"}))?b="Int-Conn-Good-User-Trigger-Reload":-1<a.indexOf(getLocalizedAppString({key:"browser_action_unable_to_connect"}))&&(b="Unable-Reach-MT-User-Trigger-Reload");chrome.runtime.sendMessage({reloadCRX:!0,reloadReason:b},function(a){"reloading_crx_now"==a.reply&&window.close()})};