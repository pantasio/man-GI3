chrome.runtime.onMessage.addListener(function(a,b,c){if(a.sendContentToPhone)syncToPhone(a.action_data),c({confirmation:'{"requestToSendImg":"true"}'});else if(a.pushThisPageToPhone)c({message_received_to_push_to_phone:!0}),findActiveTabAndExecuteAnAction("sendToPhone");else if(a.launchMT)c({launching_MT:!0}),goToActiveMightyTextTab();else if(a.openComposeNew)c({opening_compose_new:!0}),findActiveTabAndExecuteAnAction("composeNew");else if(a.sendLinkViaSMS)c({sending_link_via_sms:!0}),findActiveTabAndExecuteAnAction("sendMessage");
else if(a.requestPhoneStatusNotCollapsed)b="check-phone-status-not-needed",a.hasOwnProperty("high_priority_gcm")&&(b="gcm_priority_high"),sendOtherC2DM("get_phone_status&collapse_key=false",b),c({requesting_phone_status:!0});else if(a.openComposeNewInNewTab)c({opening_compose_new_in_new_tab:!0}),openNewTabOfWebAppInComposeNew();else if(a.getInfoForAdditionalNotif)c({global_device_notif:deviceNotifManagerArray[a.globalDeviceKey],user_email:google_username_currently_logged_in}),delete deviceNotifManagerArray[a.globalDeviceKey];
else if(a.getPathToLatestCutOfWebApp)c({path_to_latest_webapp:void 0!=currentProductionPath?currentProductionPath:"error_loading_external_js_file_from_MT",referral_url:window.localStorage[username_prefix_jstrg_purpose+"|referral_url"]});else if(a.sendImageViaMMS)c({sending_image_via_mms:!0}),findActiveTabAndExecuteAnAction("sendMessage",a.imgToSendSrc);else if(a.GAEventInfo)c({confirmation:"Recorded GA Event!"}),_gaq.push(["_trackEvent",a.GAEventInfo.category,a.GAEventInfo.action,a.GAEventInfo.label]);
else if(a.KMEventInfo)c({confirmation:"Recorded KM Event!"}),_kmq.push(["record",a.KMEventInfo.event,a.KMEventInfo.properties]);else if(a.hasOwnProperty("intercomEventInfo")){var d=a.intercomEventInfo;d.hasOwnProperty("event")?(a=d.event,b={},d.hasOwnProperty("properties")&&(b=d.properties),d={confirmation:"Recorded Intercom Event!"},Intercom("trackEvent",a,b)):d={error:'Missing "event" parameter'};c(d)}else a.hasOwnProperty("get_phone_contacts")&&c({contacts:contactsFromPhoneGlobal})});
function addContextMenusAndPageAction(){chrome.contextMenus.removeAll(function(){chrome.contextMenus.create({id:"context-menu-handle-image",title:getLocalizedAppString({key:"send_img_with_mt"}),type:"normal",contexts:["image"],onclick:function(a,b){handleClick(a,b,"image")}});chrome.contextMenus.create({id:"context-menu-handle-page",title:getLocalizedAppString({key:"send_page_with_mt"}),type:"normal",onclick:function(a,b){handleClick(a,b,"link")}});chrome.contextMenus.create({id:"context-menu-handle-selection",
title:getLocalizedAppString({key:"send_selection_with_mt"}),type:"normal",contexts:["selection"],onclick:function(a,b){handleClick(a,b,"selection")}});chrome.contextMenus.create({id:"browser-action-cmenu-open-mt",title:getLocalizedAppString({key:"open_mightytext"}),type:"normal",contexts:["browser_action"],onclick:function(a,b){_kmq.push(["record","user-clicked-open-mt-from-browser-action-context-menu"]);goToActiveMightyTextTab()}});chrome.contextMenus.create({id:"browser-action-cmenu-compose-new",
title:getLocalizedAppString({key:"compose_new"}),type:"normal",contexts:["browser_action"],onclick:function(a,b){_kmq.push(["record","user-clicked-compose-new-from-browser-action-context-menu"]);getCurrentActiveTabInfo({non_crx_js_injection_cb:function(){openNewTabOfWebAppInComposeNew()},crx_js_injection_cb:function(){findActiveTabAndExecuteAnAction("composeNew")}})}})})}
function handleClick(a,b,c,d,e){console.log("inside of handle click because of: "+c);var f={info:a,tab:b,context:c};console.log(f);if(void 0!=a.frameUrl&&-1<String(a.frameUrl).indexOf("mightytext.net"))return!1;chrome.tabs.sendMessage(b.id,{webToPhoneJSTestMessage:!0},function(a){console.log(a);a&&a.content_script_exists?(console.log(a),shortenContextURLThenBuildIframeURL(f,b.id,d,e)):(chrome.tabs.insertCSS(b.id,{file:"styles/font-awesome-4.2.0/css/font-awesome.css"},function(){chrome.tabs.insertCSS(b.id,
{file:"styles/material-icons/material-font.css"},function(){console.log("inserted font-awesome");chrome.tabs.insertCSS(b.id,{file:"styles/animate.css"},function(){console.log("inserted animated.css");chrome.tabs.insertCSS(b.id,{file:"styles/bootstrap-alert-css-only/css/bootstrap-custom.css"},function(){console.log("inserted bootstrap-custom.css");chrome.tabs.insertCSS(b.id,{file:"styles/web_to_phone.css"},function(){console.log("inserted web_to_phone.css")})})})})}),chrome.tabs.executeScript(b.id,
{file:"scripts/libs/jquery-2.1.0.min.js"},function(){console.log("executed jquery");chrome.tabs.executeScript(b.id,{file:"scripts/libs/bootstrap-growl-master/bootstrap-growl.min.js"},function(){console.log("inserted bootstrap growl library");chrome.tabs.executeScript(b.id,{file:"scripts/libs/jQuery.dotdotdot-1.6.14/src/js/jquery.dotdotdot.min.js"},function(){console.log("inserted dotdotdot library");chrome.tabs.executeScript(b.id,{file:"scripts/common.js"},function(){console.log("inserted common.js");
chrome.tabs.executeScript(b.id,{file:"scripts/web_to_phone.js"},function(){console.log("executed web_to_phone.js");"link"!=c&&"selection"!=c||"composeNew"==e?sendClickInfoToContentScript(f,b.id,d,e):shortenContextURLThenBuildIframeURL(f,b.id,d,e)})})})})}))});void 0==e&&(_kmq.push(["record","Context-Menu-Invoke",{"Content-Type":c,Client:"CRX"}]),_gaq.push(["_trackEvent","CRX","Context-Menu-Invoke",c]))}
function sendClickInfoToContentScript(a,b,c,d){console.log("inside of sendclickinfotocontentscript");var e={};e=1==c?{contextMenuInfo:a,bypassOptionsModal:!0,task:d}:{contextMenuInfo:a};console.log({tabid:b,message:e});chrome.tabs.sendMessage(b,e,function(a){console.log(a)})}
function syncToPhone(a){console.log(a);if("image"==a.context)body=" ",action="fetch_binary_from_url_store_on_device",action_data=body+"||"+a.info.srcUrl;else if("link"==a.context){var b=fixedEncodeURIComponent(a.tab.title),c=fixedEncodeURIComponent(a.info.pageUrl);action="launch_from_url";action_data=c+"|||"+b}else"selection"==a.context&&(action="send_snippet_to_phone",action_data=a.info.selectionText);sendOtherC2DM(action,action_data,null,a.tab.id)}
function tellCSToOpenWidget(a){a={context:"link",info:{pageUrl:a.url},tab:{title:a.title,id:a.id}};handleClick(a.info,a.tab,"link")}function alertWeb2PhoneOfSendC2DMSuccess(a,b){chrome.tabs.sendMessage(a,{sendC2DMStatus:!0,response_status:b},function(a){console.log(a)})}
function shortenContextURLThenBuildIframeURL(a,b,c,d){var e=encodeURIComponent(a.info.pageUrl);$.ajax({type:"GET",url:"https://mightytext.net/prod-assets/bitly/shorten-link.php?url="+e,dataType:"text",success:function(f,e,g){f=f.replace(/\\"/g,'"');f=JSON.parse(f);console.log(f);f=void 0!=f.data.url?f.data.url.replace("http://",""):a.info.pageUrl;a.info.shortUrl=f;console.log(a);sendClickInfoToContentScript(a,b,c,d)},error:function(e,h,g){colorConsole("Error in C2DM: "+g,"red");colorConsole("Error details: "+
g.error,"red");a.info.shortUrl=a.info.pageUrl;sendClickInfoToContentScript(a,b,c,d)}})}function findActiveTabAndExecuteAnAction(a,b){chrome.tabs.query({currentWindow:!0,active:!0},function(c){if(checkForChromeTab({tabs:c})&&"composeNew"==a)openNewTabOfWebAppInComposeNew();else{c=c[0];var d={editable:!1,menuItemId:"context-menu-handle-page",pageUrl:c.url};if(void 0!=b){var e="image";d.srcUrl=b}else e="link";handleClick(d,c,e,!0,a)}})}
function checkForChromeTab(a){var b=!1;"undefined"!=typeof a&&"tabs"in a&&$(a.tabs).each(function(a,d){"url"in d&&-1<d.url.indexOf("chrome://")&&(b=!0)});return b}function openNewTabOfWebAppInComposeNew(){chrome.tabs.create({url:"https://mightytext.net/"+currentProductionPath+"#mode=compose-new"},function(){console.log("new tab with webapp in compose new mode created")})};