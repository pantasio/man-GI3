var userEmail;
function initializePhoneNotifOptionsPopup(){var c=window.location.hash.replace("#notif_object_key=","");chrome.runtime.sendMessage({getInfoForAdditionalNotif:!0,globalDeviceKey:c},function(a){console.log("Additional Notif Info ",a);getSingleUserDeviceAppFromServer(a.global_device_notif);buildHTMLForThisNotif(a.global_device_notif);userEmail=a.user_email});localizeStringsInUI({strings_elem:$(".localized-string"),replace_func:function(a){return a.replace("%app_name%",'<span class="device-notif-option-app-name">this app</span>')}})}
function getSingleUserDeviceAppFromServer(c,a){var e=encodeURIComponent(c.package_name),d=c.device_id,b={url:"https://textyserver.appspot.com/",type:"GET",dataType:"text",timeout:8E3,success:function(b,d,e){console.log(b);void 0==a?(b=JSON.parse(b),console.log(b),displayAppropriateOptions(b.user_device_app,c)):void 0!=b.user_device_app||void 0!=b.user_notifs?showConfirmationOfPhoneNotifSuccess(c.app_name,a,!0):showConfirmationOfPhoneNotifSuccess(c.app_name,a,!1)},error:function(b,d,e){void 0==a?displayAppropriateOptions(null):
showConfirmationOfPhoneNotifSuccess(c.app_name,a,!1);colorConsole("Error details: "+e.error,"red")}};if(void 0==a)b.type="GET",b.url+="deviceapp?function=getSingleUserDeviceApp&package_name="+e+"&device_id="+d;else if(b.type="POST",b.dataType="json","store-this-notif"==a){var f=JSON.stringify(c.original_object);console.log(f);b.url+="usernotifs?function=storeSingleNotif";b.data={device_id:d,package_name:e,notif_content:f}}else f=c.app_name,b.url+="deviceapp?function=",b.data={device_id:d,package_name:e,
app_name:f},"store-all-future-notifs-for-this-app"==a?(b.url+="setAppNotifStoreState",b.data.notif_store=1):(b.url+="setAppNotifBlockState","block-this-app"==a?b.data.notif_block=1:"unblock-this-app"==a&&(b.data.notif_block=0));console.log({url_for_ajax_request:"https://textyserver.appspot.com/"});console.log(b);$.ajax(b)}
function displayAppropriateOptions(c,a){null!=c?0==c.notif_store?$(".device-notif-option").show():$("#button-one").show():$(".device-notif-option").show();$(".device-notif-preview").fadeIn(200,function(){setupClickHandlers(a)});resizeThisNotifWindow()}
function setupClickHandlers(c){$(".device-notif-option").on("click",function(){var a=$(this).data("action");console.log(c);getSingleUserDeviceAppFromServer(c,a);"k"==userEmail.charAt(0)&&callKMInBackgroundPage("Device-Notif-Click-Option-Letter-K",{"Package-Name":c.package_name,Client:"CRX",Action:a});callGAInBackgroundPage("CRX","Device-Notif-Click-Option",a)})}
function buildHTMLForThisNotif(c){console.log(c);$("title").text(c.app_name+" - MightyText");$(".device-notif-preview-img-wrapper > img").attr("src",c.app_img_url);$(".device-notif-app-name").text(c.app_name);$(".device-notif-text").text(c.app_notif_message).dotdotdot({ellipsis:"...",height:120});$(".device-notif-option .device-notif-option-app-name").text(c.app_name)}
function showConfirmationOfPhoneNotifSuccess(c,a,e){var d="",b="";console.log(a);0!=e?(b='<i class="fa fa-check-circle device-notif-option-icon device-notif-success"></i>',"block-this-app"==a?d=getLocalizedAppString({key:"blocked_app_notif"}):"store-this-notif"==a?d=getLocalizedAppString({key:"store_this_app_notif"}):"store-all-future-notifs-for-this-app"==a&&(d=getLocalizedAppString({key:"save_all_this_apps_notifs_conf"}))):(b='<i class="fa fa-times-circle device-notif-option-icon device-notif-error"></i>',
"block-this-app"==a?d=getLocalizedAppString({key:"error_blocking_app_notif"}):"store-this-notif"==a?d=getLocalizedAppString({key:"error_storing_notif"}):"store-all-future-notifs-for-this-app"==a&&(d=getLocalizedAppString({key:"error_save_all_this_apps_notifs"})));d=d.replace("%app_name%",'<span class="device-notif-option-app-name">'+c+"</span>");$("[data-action='"+a+"']").html(b).append('<span class="device-notif-option-action-text">'+d+"</span>").hide().fadeIn(150).delay(4E3).queue(function(){window.close()})}
function resizeThisNotifWindow(){chrome.windows.getCurrent(function(c){var a=window.navigator.appVersion;console.log(a);a=-1<a.indexOf("Macintosh")?$(".device-notif-preview").height()+22:$(".device-notif-preview").height()+39;console.log("notifHeight: "+a);chrome.windows.update(c.id,{height:a},function(a){console.log(a)})})}initializePhoneNotifOptionsPopup();