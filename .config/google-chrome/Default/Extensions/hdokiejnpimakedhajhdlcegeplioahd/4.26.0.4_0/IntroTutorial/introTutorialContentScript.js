!function(t){"use strict";var e=function(e){bg.IntroTutorial.getState(function(o){for(var i=!1,n=0;n<o.domains.length;n++)document.location.host.toLowerCase().includes(o.domains[n])&&(i=!0);if(o.enabled&&i){var a=o.isInContext?t.InContextIntroTutorialDialogDefaultOptions:t.VaultIntroTutorialDialogOptions;e(o,a)}})};Topics.get(Topics.SITE_NOTIFICATION_STATE).subscribe(function(t){var o=null;function i(t){o&&t&&LPFrame.css({id:o.getDialogID(),css:{top:t.top+45,left:t.left+t.infieldOffset+25}})}function n(t){o?(Topics.get(Topics.INFIELD_FRAME_POSITION_CHANGED).unsubscribe(i),bg.IntroTutorial.getState(function(e){"add_first_site"!==e.inContextOnboardingStep&&(o.close(!0),o=null,t&&t())})):t&&t()}e(function(t,e){var i=LPSiteService.getSite(t.domains[0]);if(i.isOnLoginPage(document)){if(bg.IntroTutorial.setState({firstLogin:!1}),0===LPFrame.numberOfDialogs()){e=i.getCustomOptions()?i.getCustomOptions():e;if(t.isLoginTheLastPassWay?o=LPFrame.openDialog(e.name,{addHide:!0,textChoice:"loginTheLastPassWay",arrow:e.getArrowOptions()},{css:e.getCssOptions()}):t.isSiteSaved?bg.IntroTutorial.resetState():o=LPFrame.openDialog(e.name,{addHide:!0,textChoice:"siteLanding",arrow:e.getArrowOptions()},{css:e.getCssOptions()}),o){var n=e.getTrackElementOptions();n.element=i.getTrackingEl(document),o.trackElement(n)}}}else t.firstLogin?i.logMeOut(document,e.name):t.isAllSet&&bg.IntroTutorial.completeTutorial({textChoice:"completed"})}),Topics.get(Topics.SITE_NOTIFICATION).subscribe(function(o){e(function(e,i){bg.IntroTutorial.setState({inContextOnboardingStep:"add_site_to_lastpass"}),setTimeout(function(){LPFrame&&LPFrame.numberOfDialogs()>1&&LPFrame.close(1),bg.sendLpImprove("onboardingtour::displayed_onboarding_save_a_site",{version:"incontext"});var e=window.location.hostname;t&&t.defaultData&&t.defaultData.name&&(e=t.defaultData.name),o.getInterface().LPDialog.openDialog(i.name,{addHide:!0,siteName:e,textChoice:"saveSite",parentDialog:"contentScriptSite",css:{position:"absolute",top:"100%","margin-top":"10px","margin-right":0,right:0},arrow:{orientation:"top",positionTarget:"#submit"}})},1e3)})}),Topics.get(Topics.INFIELD_NOTIFICATION_OPENED).subscribe(function(t){e(function(e,a){n(function(){var n=e.inContextOnboardingStep;n&&"add_first_site"!==n&&(o=LPFrame.openDialog(a.name,{addHide:!0,textChoice:"selectYourSite",arrow:a.getArrowOptions()},{css:{width:"auto",height:"auto","min-width":"168px"}})),Topics.get(Topics.INFIELD_FRAME_POSITION_CHANGED).subscribe(i),i(t)})})}),Topics.get(Topics.INFIELD_NOTIFICATION_FILLED).subscribe(function(){e(function(t,e){t.enabled&&(bg.IntroTutorial.setState({isLoginTheLastPassWay:!1}),bg.IntroTutorial.completeTutorial({textChoice:"completed",siteName:t.domains[0]}))})}),Topics.get(Topics.INFIELD_NOTIFICATION_CLOSED).subscribe(function(){e(function(t,e){n()})})})}(IntroTutorialDialogOptions);
//# sourceMappingURL=sourcemaps/IntroTutorial/introTutorialContentScript.js.map
