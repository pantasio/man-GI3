chrome.runtime.onMessage.addListener(function(a,b,c){a.webToPhoneJSTestMessage&&c({content_script_exists:!0});if(a.contextMenuInfo){var e=a.contextMenuInfo;chrome.runtime.sendMessage({getPathToLatestCutOfWebApp:!0,getUserReferralURL:!0},function(b){var f=b.path_to_latest_webapp;a.bypassOptionsModal?(initializeOverlay(e,a.bypassOptionsModal,a.task,f,b.referral_url),c({receivedInfo:!0,bypassingOptionsModal:!0})):(initializeOverlay(e,null,null,f,b.referral_url),c({receivedInfo:!0,bypassingOptionsModal:!1}))});
c({contextMenuInfoReceived:!0})}else a.sendC2DMStatus&&(a.response_status?showSuccessNotif(!0):showSuccessNotif(!1,getLocalizedAppString({key:"unable_to_comm_with_phone"})),c({successAcknowledged:!0}))});
function returnPhoneActionsMenuHTML(a){var b=chrome.extension.getURL("img/128x128_MT_logo_boom_gradient_white.png"),c=chrome.extension.getURL("../img/web-to-phone/send_to_phone3.png"),e=chrome.extension.getURL("../img/web-to-phone/send_pic_message7.png"),d=chrome.extension.getURL("img/web-to-phone/remove.png");a='<div class="imgTaskSelect mtOverLay" data-context="'+a+'"><div class="linkPreview"><div class="linkPreviewImg">';a+='<img src="'+b+'"/>';a+="</div>";a+='<div class="linkPreviewBody">';a+=
'<div class="linkPreviewTitle"></div>';a+='<div class="linkPreviewURL"></div>';a+="</div>";a+="</div>";a+='<div class="mightyWrapper">';a+='<div class="task mightyClearfix" data-task="sendWebContentToPhone">';a+='<img src="'+c+'"/>';a+='<div class="webImgPlaceHolder">';a+='<img src="" />';a+='<div class="selectHolder"></div>';a+="</div>";a+='<div class="taskCaption"></div>';a+="</div>";a+='<div class="task mightyClearfix" data-task="sendMessage">';a+='<img src="'+e+'"/>';a+='<div class="webImgPlaceHolder">';
a+='<img src=""/>';a+='<div class="selectHolder"></div>';a+="</div>";a+='<div class="taskCaption"></div>';a+="</div>";a+="</div>";a+='<img id="removeMightyOverlay" src="'+d+'" alt="removeButton"/>';return a+="</div>"}
function initializeOverlay(a,b,c,e,d){var f=a.context,g=chrome.extension.getURL("../img/web-to-phone/loading.gif"),m=chrome.extension.getURL("img/web-to-phone/send_link_to_phone3.png"),n=chrome.extension.getURL("../img/web-to-phone/send_to_phone3.png"),p=chrome.extension.getURL("img/web-to-phone/send_link_message4.png"),q=chrome.extension.getURL("../img/web-to-phone/send_pic_message7.png"),r=chrome.extension.getURL("img/web-to-phone/send_selection_to_phone.png"),t=chrome.extension.getURL("img/web-to-phone/send_selected_text.png"),
h=$(".mightyWidgetWrapper");$(h).remove();e=buildIframeURL(a,f,c,e,d);g='<div class="mightyWidgetWrapper mtOverLay"><div class="mightyWidgetContainer"><i class="material-icons" style="visibility:hidden;position:absolute;top:0px;left:0px;">check</i>'+('<div class="mightyComposeWidgetLoadingSpinnerWrapper"><img class="mightyComposeWidgetLoadingSpinner" src="'+g+'"/></div><div class="sendc2dmNotifWrapper"><a class="sendc2dmNotif"><i class="material-icons mightyCheckMark">check_circle</i> <span id="notifText"></span></a></div></div></div>');
var u=returnPhoneActionsMenuHTML(f);d="web-content";h="context-menu";"composeNew"==c?(d="compose-new",h="popup-menu"):"sendMessage"==c&&(h="popup-menu");var l='<iframe scrolling="no" id="mightyIframeWidget" src="'+e+'" data-intent="'+d+'" data-web-content-type="'+f+'" data-widget-action-origin="'+h+'" ></iframe>';$(g).appendTo("body").each(function(){var d=$(this).find(".mightyWidgetContainer");"link"!=f&&"image"!=f&&"selection"!=f||$(u).appendTo(d).each(function(){if(b)if("sendToPhone"==c){sendThisContentToPhone(this,
a,f,"popup-menu");var d=getLocalizedAppString({key:"open_link_on_phone_success"})}else{if("sendMessage"==c||"composeNew"==c)"composeNew"==c&&(f="compose-new",$("#mightyIframeWidget").attr("data-web-content-type","compose-new")),openComposeNewWidget(this,l,$(this).parent(),f,"popup-menu",a)}else{setupOptionsMenu(this,f,l,a);if("link"==f){var e=p;var g=m;var h=getLocalizedAppString({key:"send_link_as_text"});var k=getLocalizedAppString({key:"open_link_on_phone"});d=getLocalizedAppString({key:"open_link_on_phone_success"});
$(".linkPreview").show();$(".linkPreviewTitle").text(a.tab.title).dotdotdot({ellipsis:"...",height:null});$(".linkPreviewURL").text(a.info.pageUrl).dotdotdot({ellipsis:"...",height:null});lookForLinkPreviewImage(a.tab)}else"image"==f?($(".linkPreview, .linkPreviewSMS, .selectHolder").hide(),e=q,g=n,h=getLocalizedAppString({key:"send_img_as_mms"}),k=getLocalizedAppString({key:"send_img_to_phone"}),d=getLocalizedAppString({key:"send_img_to_phone_success"}),$("div.task > .webImgPlaceHolder").show().find("img").attr("src",
a.info.srcUrl)):"selection"==f&&($(".linkPreview, .linkPreviewSMS").hide(),e=t,g=r,h=getLocalizedAppString({key:"send_select_to_phone_as_text"}),k=getLocalizedAppString({key:"send_select_to_phone"}),d=getLocalizedAppString({key:"send_select_to_phone_success"}),$(".webImgPlaceHolder").find("img").hide(),$(".webImgPlaceHolder").show().find(".selectHolder").text('"'+a.info.selectionText+'"').dotdotdot({ellipsis:'..."',height:null}));$("div[data-task='sendMessage'] .taskCaption").text(h);$("div[data-task='sendWebContentToPhone'] .taskCaption").text(k);
$("div[data-task='sendMessage'] > img").attr("src",e);$("div[data-task='sendWebContentToPhone'] > img").attr("src",g)}"link"==f&&(e=checkForCustomPushToPhoneHost(a.tab.url),0!=e&&(d=appendCustomSuccessString(e),appendCustomTasks(e)));$("#notifText").text(d)})})}
function buildIframeURL(a,b,c,e,d){e="https://mightytext.net/"+e+"/?compose=true#mode=compose-new&view=iframe";var f="mightytext.net/R1";"undefined"!=typeof d&&0<d.length&&(f=d);if("link"==b||"selection"==b){d="";if("composeNew"!=c){if("link"==b){var g=a.tab.title;400<g.length&&(g=g.substring(0,396)+"...")}else"selection"==b&&(g=a.info.selectionText,1E3<g.length&&(g=g.substring(0,396)+"..."));d=d+('"'+g+'"')+(" - "+a.info.shortUrl);d+=" - "+getLocalizedAppString({key:"sent_with_mt"})+" ("+f+")"}if(1500>
d.length)a=fixedEncodeURIComponent(d),e+="&body="+a+"&type=sms";else return alert(getLocalizedAppString({key:"select_too_long"})),!1}else"image"==b?(a=fixedEncodeURIComponent(a.info.srcUrl),d=fixedEncodeURIComponent("- "+getLocalizedAppString({key:"sent_with_mt"})+" ("+f+")"),e+="&body="+d+"&type=mms&binarysrc="+a):alert(getLocalizedAppString({key:"gen_context_menu_error"}));return e}
function setupOptionsMenu(a,b,c,e){var d=$(a).parent(),f=$(a).find("#removeMightyOverlay");$(a).fadeIn();$(".imgTaskSelect").on("click",function(a){a.stopPropagation()});$(".mightyWidgetWrapper").not(".imgTaskSelect").on("click",function(a){console.log(a);if("mightyIframeWidget"==$(a.target).attr("id"))return!1;closeOverlay()});$(a).find(".task").on("click",function(f){f.stopPropagation();f=$(this).attr("data-task");"sendMessage"==f?openComposeNewWidget(a,c,d,b,"context-menu",e):"sendWebContentToPhone"==
f&&sendThisContentToPhone(a,e,b,"context-menu")});$(f).on("click",function(a){closeOverlay()})}
function handleIframedWebAppMessages(a){composeNewWebappTimeout=globalComposeNewWebappTimeout;"compose_new_content_load_success"==a.data?(clearTimeout(composeNewWebappTimeout),$("#mightyIframeWidget").addClass("show"),$(".mightyComposeWidgetLoadingSpinnerWrapper").remove()):"closeIframe"==a.data?closeComposeNewOverlay():"successful_sendc2dm"==a.data?($("#mightyIframeWidget").fadeOut(250,function(){$(this).remove();showSuccessNotif(!0,getLocalizedAppString({key:"message_sent"}));if("compose-new"==
$(this).data("intent")){iFrameKMEventName="CRX-Widget-Compose-New-Send";var a="compose-new";var c="popup-menu"}else iFrameKMEventName="CRX-Widget-Text-Web-Content-Send",a=$(this).data("web-content-type"),c=$(this).data("widget-action-origin");callKMInBackgroundPage(iFrameKMEventName,{"Content-Type":a,Client:"CRX","App-Action-Location":c})}),callGAInBackgroundPage("CRX","Sent-Message-From-Compose-New-Iframe","Sent")):"successful_scheduled_message"==a.data?($("#mightyIframeWidget").fadeOut(250,function(){$(this).remove();
showSuccessNotif(!0,getLocalizedAppString({key:"message_scheduled"}));if("compose-new"==$(this).data("intent")){iFrameKMEventName="CRX-Widget-Compose-New-Scheduled-Message";var a="compose-new";var c="popup-menu"}else iFrameKMEventName="CRX-Widget-Text-Web-Content-Scheduled-Message",a=$(this).data("web-content-type"),c=$(this).data("widget-action-origin");callKMInBackgroundPage(iFrameKMEventName,{"Content-Type":a,Client:"CRX","App-Action-Location":c})}),callGAInBackgroundPage("CRX","Scheduled-Message-From-Compose-New-Iframe",
"Scheduled")):"user_draft_saved"==a.data?displayBootstrapGrowl(getLocalizedAppString({key:"draft_saved"})+".","success"):"user_draft_updated"==a.data?displayBootstrapGrowl(getLocalizedAppString({key:"draft_updated"})+".","success"):"user_draft_not_updated"==a.data?displayBootstrapGrowl(getLocalizedAppString({key:"draft_not_updated"})+".","danger"):"user_draft_not_saved"==a.data?displayBootstrapGrowl(getLocalizedAppString({key:"draft_not_saved"})+".","danger"):"user_created_template"==a.data&&displayBootstrapGrowl(getLocalizedAppString({key:"template_created"})+
".","success")}var globalComposeNewWebappTimeout;
function listenForEventsFromIFrame(){var a=setTimeout(function(){showSuccessNotif(!1,getLocalizedAppString({key:"unable_to_load_mt_iframe"}));callGAInBackgroundPage("CRX","CRX-Widget-Iframe-Timeout");$("#mightyIframeWidget").ready(function(){});return!1},5E3);$("#mightyIframeWidget").ready(function(){$("#mightyIframeWidget").addClass("show");$(".mightyComposeWidgetLoadingSpinnerWrapper").remove();globalComposeNewWebappTimeout=setTimeout(function(){showSuccessNotif(!1,getLocalizedAppString({key:"unable_to_load_mt_iframe"}));
callGAInBackgroundPage("CRX","CRX-Widget-Iframe-Content-Timeout")},4E3);clearTimeout(a);window.addEventListener("message",handleIframedWebAppMessages)})}function displayIframeAfterItsLoaded(a){$("#mightyIframeWidget").addClass("show");$(".mightyComposeWidgetLoadingSpinnerWrapper").remove();void 0!=a&&clearTimeout(a)}function closeOverlay(){$(".mightyWidgetWrapper").fadeOut().remove();$.growl(!1,{command:"closeAll"})}
function showSuccessNotif(a,b,c){$(".mightyComposeWidgetLoadingSpinner").hide();void 0!=b&&$("#notifText").text(b);1!=a&&$("#notifText").css("fontSize","24px");$(".sendc2dmNotifWrapper").fadeIn(150,function(){0!=a?$(".mightyWidgetWrapper").delay(2E3).fadeOut(250,function(){$(this).remove()}):($(".mightyCheckMark").text("error").addClass("mightyError"),$(".sendc2dmNotifWrapper").delay(2E3).fadeOut(250,function(){closeComposeNewOverlay()}))})}
function appendIframe(a,b){$(a).appendTo(b).each(function(){listenForEventsFromIFrame()})}
function openComposeNewWidget(a,b,c,e,d,f){$(a).fadeOut();appendIframe(b,c[0]);callGAInBackgroundPage("CRX","Context-Menu-Click-Option","Send-As-Message");a="compose-new"==e?"CRX-Widget-Compose-New-Invoke":"CRX-Widget-Text-Web-Content-Invoke";f=checkForCustomPushToPhoneHost(f.tab.url);0!=f&&(e="youtube.com/watch"==f?"youtube":"yelp.com/biz"==f?"yelp":"google-maps");callKMInBackgroundPage(a,{"Content-Type":e,Client:"CRX","App-Action-Location":d});"context-menu"==d&&callKMInBackgroundPage("Context-Menu-Click-Option",
{"Content-Type":e,Client:"CRX","App-Action-Location":d,Action:"Send-As-Message-"+e})}
function sendThisContentToPhone(a,b,c,e){if("selection"==c&&1E3<b.info.selectionText.length)return $(".imgTaskSelect").fadeOut(250,function(){showSuccessNotif(!1,getLocalizedAppString({key:"selection_too_long"}))}),!1;var d=checkForCustomPushToPhoneHost(b.tab.url);if(0!=d)if("youtube.com/watch"==d)c="youtube";else if("yelp.com/biz"==d)c="yelp";else if("google.com/maps"==d||"google.co.uk/maps"==d)c="google-maps";callGAInBackgroundPage("CRX","Context-Menu-Click-Option","Send-To-Phone-"+c);callKMInBackgroundPage("Send-To-Phone",
{"Content-Type":c,Client:"CRX","App-Action-Location":e});"context-menu"==e&&callKMInBackgroundPage("Context-Menu-Click-Option",{"Content-Type":c,Client:"CRX",Action:"Send-To-Phone"});chrome.runtime.sendMessage({sendContentToPhone:!0,action_data:b,context:c},function(b){b=b.confirmation;b=jQuery.parseJSON(b);console.log(b);$(a).fadeOut().remove()})}
function lookForLinkPreviewImage(a){var b=$('meta[property="og:image"]'),c=$('meta[name="og:image"]');console.log({og:b});a=0<b.length?b[0].content:0<c.length?c[0].content:a.favIconUrl;console.log(a.length);0<a.length&&$(".linkPreviewImg > img").attr("src",a)}function checkForCustomPushToPhoneHost(a){var b=!1;$(globalArrayOfApprovedHostsForCustomPushToPhone).each(function(c,e){-1<a.indexOf(e)&&(b=e)});return b}
function appendCustomSuccessString(a){var b="";"google.com/maps"==a||"google.co.uk/maps"==a?b=getLocalizedAppString({key:"map_to_phone_success"}):"youtube.com/watch"==a?b=getLocalizedAppString({key:"vid_to_phone_success"}):"yelp.com/biz"==a&&(b=getLocalizedAppString({key:"yelp_to_phone_success"}));return b}
function appendCustomTasks(a){if("youtube.com/watch"==a){var b=chrome.extension.getURL("img/web-to-phone/send_video_to_phone.png");var c=getLocalizedAppString({key:"vid_to_phone"})}else"yelp.com/biz"==a&&(b=chrome.extension.getURL("img/web-to-phone/send_yelp_to_phone.png"),c=getLocalizedAppString({key:"yelp_to_phone"}));$("div[data-task='sendWebContentToPhone'] .taskCaption").text(c);$("div[data-task='sendWebContentToPhone'] > img").attr("src",b)}
function displayBootstrapGrowl(a,b){$.growl(a,{type:b,z_index:99999999999,delay:6E5,template:'<div data-growl="container" class="alert mightyAlert" role="alert"><button type="button" class="close" data-growl="dismiss"><span aria-hidden="true">\u00d7</span><span class="sr-only">Close</span></button><span data-growl="icon"></span><span data-growl="title"></span><span data-growl="message"></span><a href="#" data-growl="url"></a></div>'})}
function closeComposeNewOverlay(){window.removeEventListener("message",handleIframedWebAppMessages,!1);$.growl(!1,{command:"closeAll"});$(".mightyWidgetWrapper").fadeOut(250,function(){$(this).remove()})};