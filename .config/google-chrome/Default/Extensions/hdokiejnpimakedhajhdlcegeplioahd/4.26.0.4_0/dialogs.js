!function(o){var e,i,t="",a=[],l={},r=["newvaultGlobal","dialog","buttons"],n=["dialog","dialogFields"],g=function(o){return t+LPPlatform.getResourcePath(o)},s=(e=null,i=function(o,i){for(var t=0,a=o.length;t<a;++t){var l=o[t].getAttribute(i);l&&(e[l]=!0)}},{loadFile:function(o,i){null===e&&s.initialize();var t=g(o.name);void 0===e[t]?(e[t]=!0,l[t]=[i],o.load(function(){var o=l[t];delete l[t];for(var e=0,i=o.length;e<i;++e)o[e]()})):l[t]?l[t].push(i):i()},initialize:function(){null===e&&(e={},i(o.getElementsByTagName("link"),"href"),i(o.getElementsByTagName("script"),"src"))}}),d=function(){this.files=[],this.addedFiles={}};d.prototype.load=function(o){var e=0,i=this.files,t=function(){++e===i.length?o&&o():s.loadFile(i[e],t)};0===e&&i.length>0&&s.loadFile(i[0],t)},d.prototype.addFile=function(o){void 0===this.addedFiles[o.name]&&(this.files.push(o),this.addedFiles[o.name]=!0)},d.prototype.addFiles=function(o){if(o)for(var e=0,i=(o=[].concat(o)).length;e<i;++e)this.addFile(o[e])};var c=function(o){d.call(this);for(var e=0,i=(o=o?r.concat(o):r).length;e<i;++e)this.addFile(o[e])};(c.prototype=Object.create(d.prototype)).constructor=c,c.prototype.addFile=function(e){e&&d.prototype.addFile.call(this,new function(e){e.indexOf(".css")!==e.length-4&&(e=e+=".css"),this.name=e,this.load=function(i){var t=o.createElement("link");t.setAttribute("type","text/css"),t.setAttribute("rel","stylesheet"),t.setAttribute("href",g(e)),LPPlatform.addEventListener(t,"load",i),o.body.appendChild(t)}}(e))},c.prototype.load=function(o){for(var e=0,i=this.files,t=function(){++e===i.length&&o()},a=0,l=i.length;a<l;++a)s.loadFile(i[a],t)};var D=function(o){d.call(this);for(var e=0,i=(o=o?n.concat(o):n).length;e<i;++e)this.addFile(o[e])};(D.prototype=Object.create(d.prototype)).constructor=D,D.prototype.addFile=function(e){e&&d.prototype.addFile.call(this,new function(e){e.indexOf(".js")!==e.length-3&&(e=e+=".js"),this.name=e,this.load=function(i){var t=o.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src",g(e)),LPPlatform.addEventListener(t,"load",i),o.body.appendChild(t)}}(e))};LPRequire={requireJS:function(o,e){new D(o).load(e)}},LPDialog={DialogLoader:function(o){var e=this,i=!1,l=null,r=new D(o.js),n=new c(o.css),g=null;this.parentElementID=o.parentElementID,this.type=o.type;var s=function(o,e){var i,t,a={},l=o?[].concat(o):[];for(e=e?[].concat(e):[],i=0,t=l.length;i<t;++i)a[l[i]]=!0;for(i=0,t=e.length;i<t;++i)a.hasOwnProperty(e[i])||l.push(e[i]);return l};this.extend=function(e){return new LPDialog.DialogLoader({id:e.id||o.id,htmlSource:s(o.htmlSource,e.htmlSource),css:s(o.css,e.css),js:s(o.js,e.js),type:e.type||o.type,parentElementID:e.parentElementID||o.parentElementID})},this.loadedJS=function(){return i},this.getID=function(){return o.id};var d,u=(d=this,function(e){var t=window[o.type];l=new t(d),i=!0,e(l)});this.loadJS=function(o){r?(Topics.get(Topics.DIALOG_LOADING).publish(),r.load(function(){u(o)})):u(o)};var p=function(e,i,a,l){a<i.length?LPPlatform.getHTML(t+o.htmlSource[a],function(o){var t,r;t=e,r=o,(r=$(r)).find("[dialogsection]").addBack("[dialogsection]").each(function(){var o=this.getAttribute("dialogsection"),e=t.find("[dialogsection="+o+"]");e.before(this),e.remove()}),r.find("[dialogsectionbefore]").addBack("[dialogsectionbefore]").each(function(){var o=this.getAttribute("dialogsectionbefore");t.find("[dialogsection="+o+"]").before(this)}),r.find("[dialogsectionafter]").addBack("[dialogsectionafter]").each(function(){var o=this.getAttribute("dialogsectionafter");t.find("[dialogsection="+o+"]").after(this)}),r.find("[dialogsectionappend]").addBack("[dialogsectionappend]").each(function(){var o=this.getAttribute("dialogsectionappend");t.find("[dialogsection="+o+"]").append(this)}),r.find("[dialogsectionprepend]").addBack("[dialogsectionprepend]").each(function(){var o=this.getAttribute("dialogsectionprepend");t.find("[dialogsection="+o+"]").prepend(this)}),p(e,i,++a,l)}):l()},h=function(e,i){var a=function(){!function(o,e,i){i=i||0;var t=o.find("img");if(t.length>0)for(var a=function(){var o=0,a=null,l=!1;return i>0&&(a=setTimeout(function(){l=!0,o<t.length&&e()},i)),function(){++o,l||o!==t.length||(clearTimeout(a),a=null,e())}}(),l=0,r=t.length;l<r;++l)$(t[l]).bind("load",a);else e()}(e,i,7500)};o.htmlSource instanceof Array?LPPlatform.getHTML(t+o.htmlSource[0],function(i){e.html(i),p(e,o.htmlSource,1,a)}):o.htmlSource?LPPlatform.getHTML(t+o.htmlSource,function(o){e.html(o),a()}):a()};this.load=function(o,e){n?n.load(function(){h(o,e)}):h(o,e)},this.open=function(){var o,i=arguments;i&&i[0]?i[0].type=this.type:i=[{type:this.type}],this.loadedJS()?l.open.apply(l,i):(o=e,a.push(o),this.loadJS(function(){LPDialog.beforeLoad?LPDialog.beforeLoad(function(){if(null===g)for(var o in dialogs)if(dialogs[o]===e){g=o;break}return g}(),function(){l.open.apply(l,i)}):l.open.apply(l,i),function(o){for(var e=0,i=a.length;e<i;++e)a[e]===o&&a.splice(e,1)}(e)}))},this.close=function(){l&&l.close.apply(l,arguments)},this.getDialog=function(){return l}},JSFileSet:D,CSSFileSet:c,getPendingCount:function(){return a.length},getDialogs:function(){var o=[];for(var e in dialogs)o.push(dialogs[e]);return o},setBaseURL:function(o){t=o},openDialog:function(o,e){dialogs[o].open(e)}}}(document),dialogs={site:new LPDialog.DialogLoader({id:"siteDialog",htmlSource:"siteDialog.html",css:["buttons","dialog","siteDialog","passwordMeter"],js:["selectDropdown","typeaheadDropdown","dialog","dialogWithGroupInput","editableFieldsDialog","siteDialog","passwordMeter","bloodhound","bloodhoundDropdown"],type:"SiteDialog"}),note:new LPDialog.DialogLoader({id:"noteDialog",htmlSource:"noteDialog.html",css:["buttons","dialog","noteDialog"],js:["selectDropdown","typeaheadDropdown","stateDropdown","phoneInput","cc3l","dialog","dialogWithGroupInput","noteDialog","countrySelect","timezoneSelect"],type:"NoteDialog"}),customNoteTemplate:new LPDialog.DialogLoader({id:"customNoteTemplateDialog",htmlSource:"customNoteTemplateDialog.html",css:["buttons","dialog","customNoteTemplateDialog"],js:["selectDropdown","typeaheadDropdown","dialog","customNoteTemplateDialog"],type:"CustomNoteTemplateDialog"}),formFill:new LPDialog.DialogLoader({id:"formFillDialog",htmlSource:"formFillDialog.html",css:["buttons","dialog","formFillDialog"],js:["selectDropdown","typeaheadDropdown","formFillDialog","countrySelect","timezoneSelect","stateDropdown","phoneInput","cc3l"],type:"FormFillDialog"}),acceptShare:new LPDialog.DialogLoader({id:"acceptShareDialog",htmlSource:"acceptRejectShareDialog.html",css:["buttons","dialog","acceptRejectShareDialog"],js:["selectDropdown","typeaheadDropdown","dialog","dialogWithGroupInput","acceptRejectShareDialog"],type:"AcceptShareDialog"}),share:new LPDialog.DialogLoader({id:"shareDialog",htmlSource:"shareDialog.html",css:["buttons","dialog","shareDialog","containerSelectionDialog","vaultItem"],js:["selectDropdown","typeaheadDropdown","dialog","shareDialog","bloodhound","bloodhoundDropdown","vaultItemTypeahead","sharingModel"],type:"ShareDialog"}),identity:new LPDialog.DialogLoader({id:"identityDialog",htmlSource:"identityDialog.html",css:["buttons","dialog","containerSelectionDialog","identityDialog"],js:["dialog","containerSelectionDialog","identityDialog"],type:"IdentityDialog"}),sharedfolderAccess:new LPDialog.DialogLoader({id:"sharedFolderAccessDialog",htmlSource:"sharedFolderAccessDialog.html",css:["buttons","dialog","containerSelectionDialog","sharedFolderAccessDialog"],js:["dialog","containerSelectionDialog","sharedFolderAccessDialog"],type:"SharedFolderAccessDialog"}),sharedFolder:new LPDialog.DialogLoader({id:"sharedFolderDialog",htmlSource:"sharedFolderDialog.html",css:["buttons","dialog","sharedFolderDialog"],js:["dialog","sharedFolderDialog","bloodhound","selectDropdown","typeaheadDropdown","bloodhoundDropdown"],type:"SharedFolderDialog"}),familiesSharedFolder:new LPDialog.DialogLoader({id:"familiesSharedFolderDialog",htmlSource:"familiesSharedFolderDialog.html",css:["buttons","dialog","familiesSharedFolderDialog"],js:["dialog","selectDropdown","familiesSharedFolderDialog"],type:"FamiliesSharedFolderDialog"}),createSharedFolder:new LPDialog.DialogLoader({id:"createSharedFolderDialog",htmlSource:"createSharedFolderDialog.html",css:["buttons","dialog"],js:["dialog","dialogWithGroupInput","folderDialog"],type:"CreateSharedFolderDialog"}),convertLegacySharedFolder:new LPDialog.DialogLoader({id:"convertLegacySharedFolderDialog",htmlSource:"convertLegacySharedFolderDialog.html",css:["buttons","dialog","convertLegacySharedFolderDialog"],js:["dialog","selectDropdown","convertLegacySharedFolderDialog"],type:"ConvertLegacySharedFolderDialog"}),createCreditMonitoring:new LPDialog.DialogLoader({id:"createCreditMonitoringDialog",htmlSource:"createCreditMonitoringDialog.html",css:["buttons","dialog","createCreditMonitoringDialog"],js:["dialog","createCreditMonitoringDialog"],type:"CreateCreditMonitoringDialog"}),generatePassword:new LPDialog.DialogLoader({id:"generatePasswordDialog",htmlSource:"generatePasswordDialog.html",css:["buttons","dialog","generatePasswordDialog","passwordMeter"],js:["dialog","generatePasswordDialog","selectDropdown","passwordMeter"],type:"GeneratePasswordDialog"}),betterGeneratePassword:new LPDialog.DialogLoader({id:"betterGeneratePasswordDialog",htmlSource:"betterGeneratePasswordDialog.html",css:["buttons","dialog","passwordMeter","betterGeneratePassword","betterGeneratePasswordDialog"],js:["dialog","betterGeneratePasswordDialog","selectDropdown","passwordMeter"],type:"BetterGeneratePasswordDialog"}),login:new LPDialog.DialogLoader({id:"loginDialog",htmlSource:"loginDialog.html",css:["loginDialog"],js:["loginDialog","capslockstate"],type:"LoginDialog"}),reprompt:new LPDialog.DialogLoader({id:"repromptDialog",htmlSource:"repromptDialog.html",css:["repromptDialog"],js:["repromptDialog"],type:"RepromptDialog"}),createAccount:new LPDialog.DialogLoader({id:"createAccountDialog",htmlSource:"createAccountDialog.html",css:["buttons","dialog","createAccountDialog","passwordMeter"],js:["dialog","createAccountDialog","selectDropdown","passwordMeter"],type:"CreateAccountDialog"}),folder:new LPDialog.DialogLoader({id:"folderDialog",type:"FolderDialog",css:["buttons","dialog"],js:["dialog","selectDropdown","typeaheadDropdown","dialogWithGroupInput","folderDialog"],htmlSource:"folderDialog.html"}),fieldHistory:new LPDialog.DialogLoader({id:"fieldHistoryDialog",htmlSource:"fieldHistoryDialog.html",css:["buttons","dialog","fieldHistoryDialog"],js:["dialog","fieldHistoryDialog"],type:"FieldHistoryDialog"}),linkAccount:new LPDialog.DialogLoader({id:"linkAccountDialog",htmlSource:"linkAccountDialog.html",css:["buttons","dialog","linkAccountDialog"],js:["dialog","linkAccountDialog"],type:"LinkAccountDialog"}),confirmation:new LPDialog.DialogLoader({id:"confirmationDialog",htmlSource:"confirmationDialog.html",css:["buttons","dialog"],js:["dialog","confirmationDialog"],type:"ConfirmationDialog"}),alert:new LPDialog.DialogLoader({id:"alertDialog",htmlSource:"alertDialog.html",css:["buttons","dialog"],js:["dialog","confirmationDialog"],type:"AlertDialog"}),enterpriseTrial:new LPDialog.DialogLoader({id:"enterpriseTrialDialog",htmlSource:"enterpriseTrialDialog.html",css:["buttons","dialog"],js:["dialog","enterpriseTrialDialog"],type:"EnterpriseTrialDialog"}),denyEmergencyAccess:new LPDialog.DialogLoader({id:"denyEmergencyAccessDialog",htmlSource:"denyEmergencyAccessDialog.html",css:["buttons","dialog"],js:["dialog","denyEmergencyAccessDialog"],type:"DenyEmergencyAccessDialog"}),verifyEmail:new LPDialog.DialogLoader({id:"verifyEmailDialog",htmlSource:"verifyEmailDialog.html",css:["buttons","dialog"],js:["dialog","verifyEmailDialog"],type:"VerifyEmailDialog"}),application:new LPDialog.DialogLoader({id:"applicationDialog",htmlSource:"applicationDialog.html",css:["buttons","dialog","passwordMeter"],js:["dialog","dialogWithGroupInput","editableFieldsDialog","passwordMeter","applicationDialog","selectDropdown","typeaheadDropdown"],type:"ApplicationDialog"}),chooseProfile:new LPDialog.DialogLoader({id:"chooseProfileDialog",htmlSource:"chooseProfileDialog.html",css:["buttons","dialog","chooseProfileDialog"],js:["dialog","chooseProfileDialog"],type:"ChooseProfileDialog"}),vaultItemSelect:new LPDialog.DialogLoader({id:"vaultItemSelectDialog",htmlSource:"vaultItemSelectDialog.html",css:["buttons","dialog","vaultItem"],js:["dialog","vaultItemSelectDialog"],type:"VaultItemSelectDialog"}),inviteFriends:new LPDialog.DialogLoader({id:"inviteFriendsDialog",htmlSource:"inviteFriendsDialog.html",css:["buttons","dialog"],js:["dialog","inviteFriendsDialog"],type:"InviteFriendsDialog"}),addEmergencyAccess:new LPDialog.DialogLoader({id:"addEmergencyAccessDialog",htmlSource:"addEmergencyAccessDialog.html",css:["buttons","dialog"],js:["dialog","addEmergencyAccessDialog"],type:"AddEmergencyAccessDialog"}),upgradePremium:new LPDialog.DialogLoader({id:"upgradePremiumDialog",htmlSource:"upgradePremiumDialog.html",css:["buttons","dialog"],js:["dialog","upgradePremiumDialog"],type:"UpgradePremiumDialog"}),upgradeFamiliesForFolderSharing:new LPDialog.DialogLoader({id:"upgradeFamiliesForFolderSharingDialog",htmlSource:"upgradeFamiliesForFolderSharingDialog.html",css:["buttons","dialog"],js:["dialog","upgradeFamiliesForFolderSharingDialog"],type:"UpgradeFamiliesForFolderSharingDialog"}),familiesInvitation:new LPDialog.DialogLoader({id:"familiesInvitationDialog",htmlSource:"familiesInvitationDialog.html",css:["buttons","dialog"],js:["dialog","familiesInvitationDialog"],type:"FamiliesInvitationDialog"}),tryFamilies:new LPDialog.DialogLoader({id:"tryFamiliesDialog",htmlSource:"tryFamiliesDialog.html",css:["buttons","dialog"],js:["dialog","tryFamiliesDialog"],type:"TryFamiliesDialog"}),sharingKey:new LPDialog.DialogLoader({id:"sharingKeyDialog",htmlSource:"sharingKeyDialog.html",css:["buttons","dialog"],js:["dialog","sharingKeyDialog"],type:"SharingKeyDialog"}),addFormField:new LPDialog.DialogLoader({id:"addFormFieldDialog",htmlSource:"addFormFieldDialog.html",js:["dialog","dialogWithGroupInput","editableFieldsDialog"],type:"AddFormFieldDialog"}),addItem:new LPDialog.DialogLoader({id:"addItemDialog",htmlSource:"addItemDialog.html",js:["addItemDialog"],css:["addItemDialog","lpGrid"],type:"AddItemDialog"}),restrictedSharing:new LPDialog.DialogLoader({id:"restrictedSharingDialog",htmlSource:"restrictedSharingDialog.html",js:["restrictedSharingDialog"],css:["buttons","restrictedSharingDialog"],type:"RestrictedSharingDialog"}),restrictedEmergencyAccess:new LPDialog.DialogLoader({id:"restrictedEmergencyAccess",htmlSource:"restrictedEmergencyAccessDialog.html",js:["restrictedEmergencyAccessDialog"],css:["dialog","buttons","restrictedEmergencyAccessDialog"],type:"RestrictedEmergencyAccessDialog"}),tourDialogBase:new LPDialog.DialogLoader({id:"introTourDialog",htmlSource:"Tour/introTourDialog.html",css:["buttons","dialog","lpGrid","Tour/introTourDialog"],js:["dialog","lpArrow","lpPing","lpTag","Tour/introTourData","Tour/introTourFlow","Tour/introTourQueue","Tour/introTour","Tour/introTourDialog"],type:"IntroTourDialog"}),vaultInfoDialog:new LPDialog.DialogLoader({css:["buttons","dialog","lpGrid","vaultInfoDialog"],htmlSource:"vaultInfoDialog.html",js:["dialog","vaultInfoDialog"],type:"VaultInfoDialog"})},dialogs.changePassword=dialogs.vaultItemSelect.extend({id:"changePasswordDialog",js:"changePasswordDialog",type:"ChangePasswordDialog"}),$.extend(dialogs,{notification:new LPDialog.DialogLoader({id:"notificationDialog",htmlSource:"notificationDialog.html",css:["buttons","dialog","notificationDialog"],js:["dialog","notificationDialog"],type:"NotificationDialog"}),duplicatePassword:new LPDialog.DialogLoader({id:"duplicatePasswordDialog",htmlSource:"duplicatePasswordDialog.html",css:["buttons","dialog","duplicatePasswordDialog"],js:["dialog","duplicatePasswordDialog"],type:"DuplicatePasswordDialog"}),weakPassword:new LPDialog.DialogLoader({id:"weakPasswordDialog",htmlSource:"weakPasswordDialog.html",css:["buttons","dialog","weakPasswordDialog"],js:["dialog","weakPasswordDialog"],type:"WeakPasswordDialog"}),securityNotice:new LPDialog.DialogLoader({id:"securityNoticeDialog",htmlSource:"securityNoticeDialog.html",css:["buttons","dialog","securityNoticeDialog"],js:["dialog","securityNoticeDialog"],type:"SecurityNoticeDialog"}),breachAlert:new LPDialog.DialogLoader({id:"breachAlertDialog",htmlSource:"breachAlertDialog.html",css:["buttons","dialog","breachAlertDialog"],js:["dialog","breachAlertDialog"],type:"BreachAlertDialog"}),preferences:new LPDialog.DialogLoader({id:"preferencesDialog",htmlSource:"preferencesDialog.html",css:["buttons","dialog","preferencesDialog"],js:["dialog","preferencesDialog"],type:"PreferencesDialog"}),introTutorialWelcome:new LPDialog.DialogLoader({id:"introTutorialWelcomeDialog",htmlSource:"IntroTutorial/introTutorialWelcomeDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/introTutorialHelpDialogOriginal","IntroTutorial/introTutorialWelcomeDialog"],type:"IntroTutorialWelcomeDialog"}),introTutorialSelectSite:new LPDialog.DialogLoader({id:"introTutorialSelectSiteDialog",htmlSource:"IntroTutorial/introTutorialSelectSiteDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/LPSiteService","IntroTutorial/introTutorialImages","IntroTutorial/introTutorialSelectSiteDialog"],type:"IntroTutorialSelectSiteDialog"}),introTutorialComplete:new LPDialog.DialogLoader({id:"introTutorialCompleteDialog",htmlSource:"IntroTutorial/introTutorialCompleteDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/introTutorialCompleteDialog"],type:"IntroTutorialCompleteDialog"}),introTutorialHelp:new LPDialog.DialogLoader({id:"introTutorialHelpDialog",htmlSource:"IntroTutorial/introTutorialHelpDialog.html",css:"IntroTutorial/introTutorialHelpDialog",js:["IntroTutorial/introTutorialHelpDialog"],type:"IntroTutorialHelpDialog"}),tourDialogBase:new LPDialog.DialogLoader({id:"introTourDialog",htmlSource:"Tour/introTourDialog.html",css:["buttons","dialog","lpGrid","Tour/introTourDialog"],js:["dialog","lpArrow","lpPing","Tour/introTourData","Tour/introTourFlow","Tour/introTourQueue","Tour/introTour","Tour/introTourDialog"],type:"IntroTourDialog"}),migration:new LPDialog.DialogLoader({id:"migrationPopup",htmlSource:"migrationPopup.html",css:["buttons","migrationPopup"],js:["migrationPopup"],type:"MigrationPopup"})}),dialogs.login=dialogs.login.extend({htmlSource:"extensionLoginDialog.html",css:"extensionLoginDialog",js:["extensionLoginDialog","selectDropdown","typeaheadDropdown"],type:"ExtensionLoginDialog"}),dialogs.siteTutorial=dialogs.site.extend({css:"IntroTutorial/introTutorialHelpDialogOriginal",js:["IntroTutorial/introTutorialHelpDialogOriginal","extensionSiteTutorialDialog"],type:"ExtensionSiteTutorialDialog"}),function(){var o=new LPDialog.DialogLoader({id:"loginDialog",htmlSource:"extensionLoginDialogSimple.html",css:["fonts/opensans/opensans.css","loginDialog","extensionDialogSimple","extensionLoginDialogBase","lpGrid","backgroundOverlay"],js:["loginDialog","extensionLoginDialog","capslockstate","extensionLoginDialogSimple","selectDropdown","typeaheadDropdown","fieldValidator","backgroundOverlay"],type:"ExtensionLoginDialogSimple"});dialogs.loginSimple=o.extend({css:["extensionLoginDialogSimple"]}),dialogs.loginTab=o.extend({css:["extensionLoginDialogTab"]}),dialogs.loginApp=dialogs.loginSimple.extend({js:["extensionLoginDialogApp"],type:"ExtensionLoginDialogApp"});var e=new LPDialog.DialogLoader({id:"createAccountDialog",css:["fonts/opensans/opensans.css","extensionDialogSimple","buttons","dialog","lpGrid","passwordMeter","backgroundOverlay","extensionCreateAccountBase"],js:["createAccountDialog","dialog","extensionCreateAccount","selectDropdown","passwordMeter","fieldValidator","backgroundOverlay","fieldToolTip","emailToolTip","buildVars"],type:"ExtensionCreateAccount"});dialogs.createAccountSimple=e.extend({htmlSource:"extensionCreateAccountDialogSimple.html",css:["extensionCreateAccountSimple"],js:["extensionCreateAccountSimple"],type:"ExtensionCreateAccountSimple"}),dialogs.createAccountIcon=e.extend({htmlSource:"extensionCreateAccountDialogIcon.html",css:["extensionCreateAccountIcon","compositeBackgroundOverlay"],js:["extensionCreateAccountIcon","request","lpArrow","compositeBackgroundOverlay"],type:"ExtensionCreateAccountIcon"})}();
//# sourceMappingURL=sourcemaps/dialogs.js.map
