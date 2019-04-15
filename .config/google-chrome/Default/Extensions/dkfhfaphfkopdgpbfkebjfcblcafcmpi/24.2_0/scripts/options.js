function initializeOptionsPage(){localizeStringsInUI({strings_elem:$(".localized-string, .mighty-tooltip")});$("body").attr("lang",navigator.language);getLocalJStorageSettings({environment:"settings"});setupHandlersForSettings();callKMInBackgroundPage("user-loaded-crx-settings-page",{Client:"CRX"})}
function setupHandlersForSettings(){$(".settingsInput").on("click",function(){var a=$(this).is(":checked"),b=$(this).attr("name"),c=$(this).attr("value");a=a?c:"0";"global_notifications"!=b&&"message_notifications"!=b||checkIfUserIsLoggedInBeforeSettingBAIcon();callKMInBackgroundPage("user-changed-crx-setting",{crx_setting_name:b,crx_setting_value_set:c,Client:"CRX"});window.localStorage[b]=a;checkToSeeIfAnySettingsShouldBeDisabled();showSettingsChangeConfirmation()});$(".settingsSelect").change(function(a){a=
$(this).attr("name");var b=$(this).val();window.localStorage[a]=b;"notif_sound_tone"==a&&(playNotificationTone(),callKMInBackgroundPage("user-set-custom-notification-sound",{sound_name:b,Client:"CRX"}));updateOptionsInput();showSettingsChangeConfirmation()});$("#notif-auto-dismiss").siblings("sup").find(".fa-question-circle").on("click",function(){var a=getLocalizedAppString({key:"auto_dismiss_explanation"});displayCustomExplanationModal(a)});$("#sound-preview").on("click",function(){callKMInBackgroundPage("user-previewed-crx-notif-sound");
playNotificationTone()});$("#refresh-phone-contacts").on("click",function(){callKMInBackgroundPage("user-refreshed-contacts-from-crx-settings");clearLocalCacheOfContactsAndRefreshContactsFromPhone()});$(".remove-btn").on("click",function(){$(this).parent().fadeOut(800)})}function showSettingsChangeConfirmation(){$("#confirmation").fadeIn({duration:800,queue:!1}).delay(2E3).fadeOut(800)}
function updateOptionsInput(){var a=$(".crx-setting");$(a).each(function(){var a=$(this).attr("name");if("undefined"!=typeof window.localStorage[a])if(a=window.localStorage[a],$(this).is("select"))a=$(this).find("option[value='"+a+"']"),0<a.length?$(a).attr("selected","selected"):console.error("error: unable to find option for the user's stored sound tone setting");else{var c=$(this).val();$(this).attr("type");c==a&&$(this).attr("checked","checked")}});checkToSeeIfAnySettingsShouldBeDisabled()}
function checkToSeeIfAnySettingsShouldBeDisabled(){if(0==window.localStorage.global_notifications)return $(".settingHolder").not("#master-setting-holder, #contacts-settings, #notif-setting").addClass("disabled").find(".settingsInput, .settingsSelect").attr("disabled","disabled"),!1;1==window.localStorage.global_notifications&&$(".settingHolder").not("#master-setting-holder").removeClass("disabled").find(".settingsInput, .settingsSelect").removeAttr("disabled");0==window.localStorage.notif_sound_mode?
$("#notif-sound-tone").parent().addClass("disabled").find(".settingsSelect").attr("disabled","disabled"):1==window.localStorage.notif_sound_mode&&$("#notif-sound-tone").parent().removeClass("disabled").find(".settingsSelect").removeAttr("disabled");0==window.localStorage.notif_auto_dismiss?$("#notif-auto-dismiss-time").addClass("disabled").attr("disabled","disabled"):1==window.localStorage.notif_auto_dismiss&&$("#notif-auto-dismiss-time").removeClass("disabled").removeAttr("disabled")}
function displayCustomExplanationModal(a){$("#explanation .content").html(a).parent().fadeIn({duration:500,queue:!1})}
function checkIfUserIsLoggedInBeforeSettingBAIcon(){$.ajax({url:"https://textyserver.appspot.com/api?function=getUserInfoFull&CLIENT=CRX",type:"GET",timeout:1E4,dataType:"json",error:function(a,b,c){console.log("ERROR in AJAX in getUserInfoFull: "+c)},success:function(a,b,c){console.log(a);a.user_info_full&&0<a.user_info_full.email.length&&chrome.runtime.sendMessage({setProperBrowserActionIcon:!0},function(a){console.log(a)})}})}
function clearLocalCacheOfContactsAndRefreshContactsFromPhone(){chrome.runtime.sendMessage({userClickedClearContactsButton:!0},function(a){console.log(a)})}chrome.runtime.onMessage.addListener(function(a,b,c){a.refreshContactsFromPhoneC2DMSent&&displayRefreshContactsStatusNotif(a.status)});
function displayRefreshContactsStatusNotif(a){if(a){a=getLocalizedAppString({key:"refresh_contacts_attempt_confirm"}).replace(/%br%/g,"<br>");var b="success"}else a=getLocalizedAppString({key:"refresh_contacts_attempt_error"}).replace(/%br%/g,"<br>"),b="fail";$("#request-status").html(a).addClass(b).fadeIn({duration:500,queue:!1}).delay(5E3).fadeOut(800)}initializeOptionsPage();