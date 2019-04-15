function displayTOSPPUpdateContent(data = {}){//strings should be localized
	try{
		$(".notif-body").html(chrome.i18n.getMessage('gdpr_tos_pp_consent_banner_content', ["https://mightytext.net/tos", "https://mightytext.net/privacy"]))
		var consentBtnHTML = '<button id="tos-pp-consent-btn" class="mt-btn btn">OK</div>'
		consentBtn = $(consentBtnHTML).appendTo(".notif-footer");
		$(consentBtn).on("click", function(){
			chrome.runtime.sendMessage({user_consented_to_tos_pp_update: true, ip_info: data.ip_info});//recording event from background
			window.close();
		});
		
	} catch(err){
		console.error("Unable to display content for TOS/PP update", err);
	}
}

function parseHashParamsToDetermineNotifDetails(){
	try{
		var hashParamsObj = $.deparam(window.location.hash.substr(1));
		var notifMode = hashParamsObj.mode;
		
		if(notifMode == "tos-pp"){
			displayTOSPPUpdateContent({
				ip_info: {
					country_code: hashParamsObj.country_code,
					is_eu: hashParamsObj.is_eu
				}
			});			
		} else {
			console.error("Unrecognized mode value passed", notifMode);
		}
		
	} catch (err){
		console.error("Unable to parse hash params on load of custom notif window", err);
	}
}

parseHashParamsToDetermineNotifDetails();