if(window.console&&console.log){var oldConsoleLog=console.log;console.log=function(){arguments[0]=editConsoleOutput(arguments[0]);oldConsoleLog.apply(this,arguments)};var oldConsoleInfo=console.info;console.info=function(){arguments[0]=editConsoleOutput(arguments[0]);oldConsoleInfo.apply(this,arguments)}}function editConsoleOutput(a){var b=a;"string"==typeof a?b="["+new Date+"] - "+a:"object"==typeof a||"array"==typeof a?b.ts_log_exec=new Date:b=a;return b}
var globalArrayOfApprovedHostsForCustomPushToPhone=["google.com/maps","youtube.com/watch","yelp.com/biz","google.co.uk/maps"],globalRetryInternetTimeoutID,clientRunningScript="CRX",globalShouldPerformGlobalAppHealthCheck=!0,origConsoleFunctionality=console,remindersAppUrl="https://mightytext.net/reminders",currentProductionPath="web8",crxID=chrome.runtime.id,sessionID=randomStringGenerate(12);
function callGAInBackgroundPage(a,b,c){var d={};d.category=a;d.action=b;d.label=c;chrome.runtime.sendMessage({GAEventInfo:d},function(a){console.log(a.confirmation)})}function callKMInBackgroundPage(a,b){var c={};c.event=a;c.properties=b;chrome.runtime.sendMessage({KMEventInfo:c},function(a){console.log(a.confirmation)})}function callIntercomInBackgroundPage(a,b){chrome.runtime.sendMessage({intercomEventInfo:{event:a,properties:b}},function(a){console.log(a.confirmation)})}
function roundNumber(a,b){return Math.round(a*Math.pow(10,b))/Math.pow(10,b)}function cleanTimeDisplayPurposesOnlyTimeNoDay(a,b){b&&(a+=" UTC");return moment(new Date(a)).format("h:mm a")}function randomStringGenerate(a){for(var b="";0<a;--a)b+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.round(61*Math.random())];return b}function optionalReturnSpecialEncodedString(a){if(3>a.replace(/[^%]/g,"").length)return a;a=a.replace(/\+/g,"%20");return a=decodeURIComponent(a)}
function currentTimeStampInSeconds(){return 1E3*(new Date).getTime()}function fixedEncodeURIComponent(a){return encodeURIComponent(a).replace(/[!'()]/g,escape).replace(/\*/g,"%2A")}
function setAutoRemoveTimeOutForThisNotif(a,b){var c=window.localStorage.notif_auto_dismiss,d=36E5;"incoming_mms_wakeup"==a?d=1E4:"1"==c&&(d=1E3*parseInt(window.localStorage.notif_auto_dismiss_time));setTimeout(function(){chrome.notifications.clear(a);console.log("notif clear after: "+d+" milliseconds at: "+new Date)},d)}
function shouldThisPUSHTriggerANotif(a){var b=!0;window.localStorage.global_notifications&&"0"==window.localStorage.global_notifications?b=!1:window.localStorage[a]&&"0"==window.localStorage[a]&&(b=!1);return b}function getCurrentWeekdayName(){var a=new Date,b=Array(7);b[0]="Sunday";b[1]="Monday";b[2]="Tuesday";b[3]="Wednesday";b[4]="Thursday";b[5]="Friday";b[6]="Saturday";return b[a.getDay()]}
function checkConsoleLogSettings(){chrome.storage.local.get(null,function(a){void 0!=a.debug_mode?setConsoleLogFunctionalityForCRX(a.debug_mode):chrome.storage.local.set({debug_mode:"dkfhfaphfkopdgpbfkebjfcblcafcmpi"==crxID?"console_off":"console_on"},function(a){console.log(a)})})}function ___toggleDebugMode(a){"console_on"==a||"console_off"==a?chrome.storage.local.set({debug_mode:a},function(a){console.log(a)}):console.error("Unrecognized debug string.  Please try again")}
function setConsoleLogFunctionalityForCRX(a){"console_off"==a?(console.info=function(){},console.log=function(){}):"console_on"==a&&(console.info=origConsoleFunctionality.info,console.log=origConsoleFunctionality.log)}chrome.storage.onChanged.addListener(function(a,b){void 0!=a.debug_mode&&setConsoleLogFunctionalityForCRX(a.debug_mode.newValue)});function playNotificationTone(){"1"==window.localStorage.notif_sound_mode&&(new Audio("../sounds/"+window.localStorage.notif_sound_tone)).play()}
function ___clearJstorage(a){if(a){var b=manifest.version;"no-news-for-this-version"!=$.jStorage.get("news_"+b,"no-news-for-this-version")&&setTimeout(function(){$.jStorage.set("news_"+b,"1")},1E3)}$.jStorage.flush()}function getRandomInt(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function getSanitizedPhoneNumberRemoveHyphensParenthesisSpaces(a,b){for(;-1<a.search("[-]");)a=a.replace("-","");for(;-1<a.search("[ ]");)a=a.replace(" ","");for(;-1<a.search("[(]");)a=a.replace("(","");for(;-1<a.search("[)]");)a=a.replace(")","");for(;-1<a.search("[.]");)a=a.replace(".","");for(;-1<a.search("[/]");)a=a.replace("/","");for(;-1<a.search("[+]");)a=a.replace("+","");return a=!b&&7>a.length?zeroPad(a,7):a.substring(a.length-7)}
function zeroPad(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}
function getContactNameFromCaches(a,b){var c=[];b&&-1<b.indexOf("|")?c=b.split("|"):c.push(b);for(var d=c.length,g="",f=0;f<d;f++){b=c[f];a=getSanitizedPhoneNumberRemoveHyphensParenthesisSpaces(b,"do_not_zeropad");if("09999999999"==a)return"Unknown / Misc";var e=$.jStorage.get(username_prefix_jstrg_purpose+"|PC_"+a,"no-jstorage-val-found");"no-jstorage-val-found"==e?(e=getSinglePhoneContactInfo(a),e=void 0!=e?e.contactName:b):e=e.contactName;g+=e;f<d-1&&(g+=", ")}return g}
function getSinglePhoneContactInfo(a){var b;$.each(contactsFromPhoneGlobal,function(c,d){a==d.phoneNumClean&&(b=d,$.jStorage.set(username_prefix_jstrg_purpose+"|PC_"+a,{contactName:d.contactName,phoneNum:d.phoneNum,phoneNumType:d.phoneNumType},{TTL:5184E6}))});return b}
function localizeStringsInUI(a){"undefined"!=typeof a&&a.hasOwnProperty("strings_elem")&&$(a.strings_elem).each(function(){var b=$(this).attr("local-key");"undefined"!=b&&(b=getLocalizedAppString({key:b}),$(this).hasClass("mighty-tooltip")?$(this).attr("tooltip-content",b):(a.hasOwnProperty("replace_func")&&(b=a.replace_func(b)),$(this).html(b)),$(this).removeAttr("local-key"),a.hasOwnProperty("additional_callback")&&a.additional_callback(this))})}
function getLocalizedAppString(a){var b="*** Error in localization string function ***";"undefined"!=typeof a&&a.hasOwnProperty("key")?(b=chrome.i18n.getMessage(a.key),"placeholders"in a&&0<a.placeholders.length&&(b=chrome.i18n.getMessage(a.key,a.placeholders)),b=0<b.length?b:'*** Error: Localization string not found for key: "'+a.key+'" ***'):console.error(new Date+"Error in custom localization string function");return b}
function getCurrentActiveTabInfo(a){chrome.tabs.query({currentWindow:!0,active:!0},function(b){console.info("get current active tabs",b);b=$.extend({},a,{url:b[0].url});checkActiveTabURLAgainstOurArrayOfApprovedHosts(b)})}
function checkActiveTabURLAgainstOurArrayOfApprovedHosts(a){if("undefined"!=typeof a&&a.hasOwnProperty("url")){var b=a.url;-1<b.indexOf("http")?($(globalArrayOfApprovedHostsForCustomPushToPhone).each(function(a,d){-1<b.indexOf(d)?(console.log("This is a special site!: "+d),appendAppropriateAppIconToMenu(d)):console.log("no match found")}),a.hasOwnProperty("crx_js_injection_cb")&&a.crx_js_injection_cb()):($("#phoneInteractButtons, .divider").hide(),$("#composeNew").attr("data-message","openComposeNewInNewTab"),
a.hasOwnProperty("non_crx_js_injection_cb")&&a.non_crx_js_injection_cb())}}checkConsoleLogSettings();
function recordMTStatsEvent(a){a=void 0===a?{}:a;var b={client:"crx",browser:BrowserDetect.browser,browser_version:BrowserDetect.version,os:BrowserDetect.OS,app_version:manifest.version,session_id:sessionID};try{"undefined"!=typeof globalUserName&&(b.email=globalUserName),"undefined"!=typeof cleanVersionGlobal&&(b.app_version=cleanVersionGlobal)}catch(d){}var c={"function":"addEvent",event:"event_client_metric"};"event"in a&&"name"in a.event&&(c.event=a.event.name);$.extend(b,a.event.options);try{c.data=
JSON.stringify(b)}catch(d){}$.ajax({type:"POST",url:"https://stats.mightytext.co",data:c,dataType:"text",success:function(a){}})}function buildRandAlphaNumStr(a){for(var b="";0<a;--a)b+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())];return b}
var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string,d=a[b].prop;this.versionSearchString=a[b].versionSearch||a[b].identity;if(c){if(-1!=c.indexOf(a[b].subString))return a[b].identity}else if(d)return a[b].identity}},
searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(-1!=b)return parseFloat(a.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",
identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",
identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};BrowserDetect.init();function checkIfUserIsOnWindows10(){var a=!1;-1<navigator.appVersion.indexOf("Windows NT 10.0")&&(a=!0);return a}
function generateMightyTextSuffixForNotification(){return"\u2022 MightyText"}function buildIncomingMessageContextMessage(a){a=void 0===a?{}:a;try{var b="MightyText";"timestamp"in a&&"string"==typeof a.timestamp&&(b=cleanTimeDisplayPurposesOnlyTimeNoDay(a.timestamp,!0)+" "+generateMightyTextSuffixForNotification())}catch(c){console.error("Error unable to build the incoming message context message string",c)}return b}
function recordNotificationAnalyticsEvent(a){a=void 0===a?{options:{type:"unknown"}}:a;try{recordMTStatsEvent({event:{name:"event_client_metric",options:a.options}})}catch(b){console.error("[NOTIF ANALYTICS] Error: unable to record notif analytics event",b)}}
function recordMTLiveLoggerEvent(a){a=void 0===a?{}:a;var b={client:"webapp",browser:BrowserDetect.browser,browser_version:BrowserDetect.version,os:BrowserDetect.OS};b.app_version=manifest.version;"undefined"!=typeof globalUserName&&(b.email=globalUserName);var c={type:"push-babysitter"};"native-app"==clientRunningScript?(b.client="desktop",checkIfScriptIsLoadedInDesktopBG()?b.sub_client="desktop-bg":b.sub_client="desktop-main"):"undefined"!=typeof threadDisplayModeGlobal&&("event_client_metrics"==
c.event?b.app_mode=threadDisplayModeGlobal:b.sub_client=threadDisplayModeGlobal);$.extend(b,a.event);try{c.data=JSON.stringify(b)}catch(d){console.error("Error processing event data in recordMTStatsEvent: "+d)}$.ajax({type:"POST",url:baseUrl+"/mt-logger"+buildClientSpecificRequestParamsForLogging(),timeout:1E4,data:c,xhrFields:{withCredentials:!0},dataType:"text",success:function(a){console.info("analytics reply:",a)},error:function(a,b){console.error("Request error to mt-logger",b)}})}
function buildClientSpecificRequestParamsForLogging(a){a=a?"&":"?";try{"undefined"!=typeof clientRunningScript&&(a+="client=","webapp"==clientRunningScript?a+="webapp":"CRX"==clientRunningScript?a+="crx":"native-app"==clientRunningScript&&(a+="desktop")),a+="&client_version=","webapp"==clientRunningScript?a+=cleanVersionGlobal:"CRX"==clientRunningScript?a+=manifest.version:"native-app"==clientRunningScript&&(a+=app.getVersion()),a+="&source_client="+sourceClient}catch(b){console.error("Error building client-specific request URL params for logging purposes",
b)}return a};