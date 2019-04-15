var SiteDialog=function(t){DialogWithGroupInput.call(this,t,{confirmOnClose:!1,hideButtons:!0,hideHeader:!0,type:Account,additionalClasses:"lmiDialog",additionalDropdownClasses:"lmiDropdown"}),this.tiles=[],this.activeTile=null,this.selectedTile=null,this.isSelectable=!1,this.submitted=!1};SiteDialog.prototype=Object.create(DialogWithGroupInput.prototype),SiteDialog.prototype.constructor=SiteDialog,function(){var t=function(t,e,i){var a=$.extend(null,t.data,{action:i,saveSiteEvent:e});bg.LPModule.callService("Segment","sendTypedEvent",["SaveSiteDialog",a],function(t){t&&console.error(t)})};SiteDialog.prototype.initialize=function(e){var i;DialogWithGroupInput.prototype.initialize.apply(this,arguments),i=this,e.on("click",".neverSave",function(){i.data.generatedPasswordSaved&&i.deleteItem(),bg.handleNeverURL({action:"never",cmd:"neverdomain",url:i.data.defaultData.url,fromsave:!0}),t(i,"SaveSiteDialogAction","Never"),bg.IntroTutorial.getState(function(t){for(var e=!1,a=0;a<t.domains.length;a++)i.data.defaultData.url.includes(t.domains[a])&&(e=!0);t.enabled&&e?bg.IntroTutorial.completeTutorial({textChoice:"skipped"}):bg.IntroTutorial.resetState(),i.close()})}),e.on("input change",function(){i.data.generatedPasswordSaved&&(i.nextButton.text(Strings.translateString("Update")),i.data.inputChanged=!0),bg.Policies.getAccountSelectionBasedOnEmail(function(t){t&&bg.getLinkedAccount(function(t){var a=i.getData();t&&a.unencryptedUsername===bg.get("g_username")&&-1!==a.group.indexOf(t.group)?e.find("#submit").attr("disabled","disabled"):e.find("#submit").removeAttr("disabled")})})}),i.backButton=e.find("#close").bind("click",function(){i.data.generatedPassword?i.data.generatedPasswordSaved?(i.data.matchingSites&&0===i.data.matchingSites.length?i.$element.find("#undo").text(Strings.translateString("Yes, remove")):i.$element.find("#undo").text(Strings.translateString("Yes, undo")),i.dialogContent.css({height:i.dialogContent.css("height")}),i.$element.addClass("removeGeneratedConfirmation")):(t(i,"SaveSiteDialogAction","NotNow"),i.close()):(t(i,"SaveSiteDialogAction","NotNow"),bg.IntroTutorial.getState(function(t){for(var e=!1,a=0;a<t.domains.length;a++)i.data.defaultData.url.includes(t.domains[a])&&(e=!0);t.enabled&&e?bg.IntroTutorial.completeTutorial({textChoice:"skipped"}):bg.IntroTutorial.resetState(),i.close()}))}),i.nextButton=e.find("#submit").bind("click",function(){i.isSelectable?i.selectedTile&&i.submit():i.submit()}),e.find("#closeConfirmation").bind("click",function(){t(i,"SaveSiteDialogAction","OK"),i.close()}),e.find("#undo").bind("click",function(){t(i,"SaveSiteDialogAction","Undo"),i.data.matchingSites&&0===i.data.matchingSites.length?i.deleteItem(function(){i.close()}):i.revertPasswordChange(function(){i.close()})}),e.find(".addNewSiteButton").bind("click",function(){t(i,"SaveSiteDialogNewClicked");var e=i.tiles.slice();i.defaultFields(i.data),i.originalData=i.getData(),i.populateFields(i.data.dialogData);var a=i.setupAdd();i.setSelectable(!1),$(this).LP_hide();for(var n=0;n<e.length;++n)e[n].remove();i.csFeatures.save_a_site_options&&a.showDetails({animate:!1,clearErrors:!0,tileHeight:"auto"})}),e.find(".updateAnotherSiteButton").bind("click",function(){t(i,"SaveSiteDialogAnotherClicked");var e=i.tiles.slice();$(this).LP_hide();for(var a=0;a<e.length;++a)e[a].remove();i.setupUpdateAnother()})};SiteDialog.prototype.deleteItem=function(t){this.vaultItem.deleteItem({confirm:!1,success:t})},SiteDialog.prototype.revertPasswordChange=function(t){this.vaultItem.revertPasswordChange({confirm:!1,success:t})},SiteDialog.prototype.setupAdd=function(t){t=t||this.data,this.$element.find(".question").text(Strings.translateString("Add to LastPass?")),this.nextButton.text(Strings.translateString("Add")),this.$element.find(".updateAnotherSiteButton").LP_hide();var e=new this.SiteTile;return t.defaultData.unencryptedUsername||e.showDetails({animate:!1,clearErrors:!0,tileHeight:"auto"}),e},SiteDialog.prototype.setupUpdateAnother=function(t){t=t||this.data,this.$element.find(".question").text(Strings.translateString("Which account should we update?")),this.nextButton.text(Strings.translateString("Update")),this.$element.find(".addNewSiteButton").LP_hide();for(var e=0;e<t.defaultData.domainSites.length;++e)new this.SiteTile({site:LPProxy.getSiteModel(t.defaultData.domainSites[e])}).setSelectable(!0);this.hasDuplicates()&&this.$element.find(".explanation").text(Strings.translateString("Choose one to update and delete the duplicate.")),this.setFrameSize()};var e=function(t,e,i){var a=$.extend({},t.defaultData);return e&&$.extend(a,e.getFormData($.extend(i,DialogInput.getProperties(t.dialogData),DialogInput.getProperties(t.defaultData)))),a},i=function(t,i,a){return $.extend(e(t,i,a),t.dialogData)};SiteDialog.prototype.hasDuplicates=function(){if(!this.data.defaultData.unencryptedUsername)return!1;for(var t=0;t<this.tiles.length;++t)if(this.tiles[t].getDuplicates().length>0)return!0;return!1},SiteDialog.prototype.setup=function(a,n){n.saveOptions={source:"saveSite"},a.find(".addSiteFavicon").append(LPTools.createElement("img",{class:"favicon",src:n.favicon?n.favicon:"images/site/world.png"}));var s=this,o=a.find(".tileContainer"),l=a.find(".question"),r=a.find(".explanation"),d=a.find(".dialogForm"),c=a.find(".tile.template"),u=a.find(".deleteOverlayContainer.template"),g=function(t){for(var e={},i=t.find("[dialogFieldDisplay]"),a=0;a<i.length;++a)e[i[a].getAttribute("dialogFieldDisplay")]=!0;return e}(c),h=DialogInput.getProperties(s.inputFields);this.csFeatures=bg.get("LPContentScriptFeatures");var p=this.SiteTile=function(a){a=a||{};var n,l=this,r=c.clone().removeClass("template"),p=null,f=s.data,m=!1,S=!1,v=null,D=!1,b=e(f,a.site,h),y=i(f,a.site,h),C=null,w=function(t){t&&s.clearErrors(),s.originalData=b,s.populateFields(y)};this.showedPassword=function(){return D},this.getDialogData=function(){return y},this.getOriginalData=function(){return b},this.getOriginalDialogData=function(){return i(f,a.site,h)},this.getDuplicates=function(){if(null===C&&(C=[],f.defaultData.unencryptedUsername)){var t=bg.hostof(y.url),e=l.getDialogData().unencryptedUsername;s.tiles.forEach(function(i){var a=i.getDialogData();i!==l&&bg.hostof(a.url)===t&&a.unencryptedUsername===e&&C.push(i)})}return C},this.handleHeightChange=(n=function(t,e){t=t||{};var i=LPTools.getOption(t,"animate",!0),a="animating";i&&(t.animationClass&&(a+=" "+t.animationClass),r.addClass(a));var n=function(t){r.removeClass(a),t&&t.transitionEndHandler&&t.transitionEndHandler(),e({callback:t&&t.onFrameResizeComplete})};t.change(function(e){var a,s,o,l=LPTools.getOption(e,"tileHeight",LPTools.getOption(t,"tileHeight",r.children().first().outerHeight())),d=r.height();return r.css("height",l),l!==d&&i?(s=function(){n(e)},o=function(t){t.target===this&&(a.unbind("transitionend",o),s())},(a=r).bind("transitionend",o)):n(e),l})},function(t){LPTools.getOption(t,"animate",!0)?s.requestAnimationFrame(function(e){n(t,e)}):n(t,function(t){s.setFrameSize(),t&&t.callback&&t.callback()})}),this.showDetails=function(t){this.handleHeightChange($.extend(t,{animationClass:"details-animatation",change:function(e){null===v&&(v=r.height()),s.activeTile&&s.activeTile!==l&&s.activeTile.hideDetails(t),s.activeTile=l,w(t&&t.clearErrors),r.find(".tileContent").append(d),r.addClass("details");var i=e();s.clickedEdit||(s.clickedEdit=!0,s.adjustView(!0),s.adjustScrollHeight(i-v))}}))},this.preSubmit=function(){s.activeTile!==this&&(s.activeTile&&(s.activeTile.hideDetails(),s.activeTile=null),w()),s.vaultItem=a.site,!s.vaultItem&&f.dialogData.fields&&(f.saveOptions.saveFromSubmit=!0)},this.hideDetails=function(t){y=s.getData();var e=d.clone();this.handleHeightChange($.extend(t,{animationClass:"details-animatation",change:function(t){r.find(".tileContent").append(e),r.removeClass("details"),t({transitionEndHandler:function(){e.remove()},tileHeight:v})}}))},this.unselect=function(){m&&(s.selectedTile=null,m=!1,r.removeClass("selected"),s.$element.removeClass("selected"),s.nextButton.prop("disabled",!0))},this.toggleSelect=function(){m?(this.unselect(),this.getDuplicates().forEach(function(t){t.hideDeleteOverlay()})):(this.getDuplicates().forEach(function(t){t.showDeleteOverlay()}),s.tiles.forEach(function(t){t.unselect()}),s.selectedTile=this,m=!0,r.addClass("selected"),s.$element.addClass("selected"),s.nextButton.prop("disabled",!1),t(s,"SaveSiteDialogSelectClicked"))},this.remove=function(){r.remove();for(var t=0;t<s.tiles.length;++t)if(s.tiles[t]===this){s.tiles.splice(t,1);break}},this.showDeleteOverlay=function(){null===p&&((p=u.clone().removeClass("template")).find(".cancelDeleteButton").bind("click",function(){t(s,"SaveSiteDialogDuplicateKeepClicked"),l.hideDeleteOverlay()}),p.find(".deleteButton").bind("click",function(){t(s,"SaveSiteDialogDuplicateDeleteClicked"),a.site.deleteItem({confirm:!1,success:function(){l.remove()}}),l.hideDeleteOverlay()})),r.append(p),r.addClass("duplicate")},this.hideDeleteOverlay=function(){r.removeClass("duplicate"),p.one("animationend",function(){r.hasClass("duplicate")||p.detach()})},this.setSelectable=function(t){S=t;var e=r.find(".favicon");S?(e.addClass("hoverFadeOut"),r.find(".checkmark").LP_show()):(e.removeClass("hoverFadeOut"),r.find(".checkmark").LP_hide()),s.setSelectable(t)},s.csFeatures.save_a_site_options||r.find(".tileEdit").addClass("hoverFadeIn"),r.find(".tileEdit").bind("click",function(){t(s,"SaveSiteDialogEditClicked"),l.showDetails({clearErrors:!0})}),r.find(".checkmark").bind("click",function(){l.toggleSelect()}),r.on("click",".showPassword",function(){D=!0}),o.append(r),function(t,e){for(var i=t.find("[dialogFieldDisplay]"),a=0;a<i.length;++a){var n=i[a],s=e[n.getAttribute("dialogFieldDisplay")];s&&(n.textContent=s)}}(r,a.site?a.site.getFormData(g):f.defaultData),s.tiles.push(this)};if(n.matchingSites)if(0===n.matchingSites.length)n.generatedPasswordSaved?(l.text(Strings.translateString("This site has been added to your LastPass vault")),this.nextButton.text(Strings.translateString("OK")),this.backButton.text(Strings.translateString("Remove")),new p({site:n.vaultItem})):this.setupAdd(n);else if(1===n.matchingSites.length)n.generatedPasswordSaved?(l.text(Strings.translateString("We've updated your password")),this.nextButton.text(Strings.translateString("OK")),this.backButton.text(Strings.translateString("Undo"))):(l.text(Strings.translateString("Update password?")),this.nextButton.text(Strings.translateString("Update")),n.defaultData.unencryptedUsername&&n.matchingSiteSameSubDomain&&!s.csFeatures.save_a_site_options||(a.find(".addNewSiteButton").LP_show(),n.defaultData.domainSites.length>n.matchingSites.length&&s.csFeatures.save_a_site_options&&a.find(".updateAnotherSiteButton").LP_show())),n.vaultItem=LPProxy.getSiteModel(n.matchingSites[0]),new p({site:n.vaultItem});else{for(var f=0;f<n.matchingSites.length;++f)new p({site:LPProxy.getSiteModel(n.matchingSites[f])}).setSelectable(!0);l.text(Strings.translateString("Which account should we update?")),this.hasDuplicates()&&r.text(Strings.translateString("Choose one to update and delete the duplicate.")),n.defaultData.unencryptedUsername&&!s.csFeatures.save_a_site_options||a.find(".addNewSiteButton").LP_show(),this.nextButton.text(Strings.translateString("Update"))}!n.generatedPassword||n.generatedPasswordSaved||n.sameDomain||(l.text(Strings.translateString("Oops! What would you like to do with your generated password?")),this.backButton.text(Strings.translateString("Discard"))),DialogWithGroupInput.prototype.setup.apply(this,arguments),this.inputFields.unencryptedUsername.setValues(LPProxy.getSiteUsernames()),this.inputFields.unencryptedUsername.disableClickToggle()},SiteDialog.prototype.setSelectable=function(t){t?(this.$element.addClass("selectable"),this.nextButton.prop("disabled",!0)):(this.$element.removeClass("selectable"),this.nextButton.prop("disabled",!1))},SiteDialog.prototype.validate=function(t){var e=DialogWithGroupInput.prototype.validate.apply(this,arguments);return""===t.unencryptedUsername&&(this.addError("unencryptedUsername",Strings.translateString("Please enter a username.")),e=!1),e},SiteDialog.prototype.getDialogActions=function(t){},SiteDialog.prototype.close=function(t){bg.LPTabState.clear({force:!0}),DialogWithGroupInput.prototype.close.apply(this,arguments)},SiteDialog.prototype.saveGeneratedPassword=function(t,a){var n;if(t.generatedPassword&&t.formSubmitted&&t.defaultData.unencryptedUsername)if(0===t.matchingSites.length)n=i(t),(new Account).addFromDialog(n,this.getGroup(n),{success:function(e){t.vaultItem=e,t.generatedPasswordSaved=!0,bg.LPTabState.clear({force:!0}),a()}});else if(1===t.matchingSites.length&&t.matchingSiteSameSubDomain){var s=LPProxy.getSiteModel(t.matchingSites[0]);n=i(t,s),o(n,e(t,s),n),s.saveFromDialog(n,this.getGroup(n),{success:function(e){t.vaultItem=e,t.generatedPasswordSaved=!0,bg.LPTabState.clear({force:!0}),a()}})}else a();else a()},SiteDialog.prototype.open=function(t){var e=this;this.saveGeneratedPassword(t,function(){var i,a;i=t,a=function(i){t.favicon=i,DialogWithGroupInput.prototype.open.call(e,t)},bg.LPIcons.get({url:i.defaultData.url,square:!0,callback:function(t){if(t)a(t);else{var e=function(){bg.LPPlatform.getFavicon({url:i.defaultData.url,callback:a})};i.sameDomain?csTop.LPContentScriptTools.getFavicon(function(t){t?a(t):e()}):e()}}})})},SiteDialog.prototype.adjustScrollHeight=function(t){this.scrollHeight&&(this.scrollHeight+=t,this.tileContainer.css({"max-height":this.scrollHeight}))},SiteDialog.prototype.setInitialScrollHeight=function(){if(this.tiles.length>3){this.tileContainer=this.$element.find(".tileContainer");var t=this.tileContainer.height(),e=this.$element.find(".tile").first().height(),i=(t-e*this.tiles.length)/(this.tiles.length-1);this.scrollHeight=3.5*e+3*i,this.tileContainer.css({overflow:"auto","max-height":this.scrollHeight})}},SiteDialog.prototype.showInitial=function(){var e;(e=this).requestAnimationFrame(function(i){e.show(),e.setInitialScrollHeight(),e.$element.addClass("animate-enter").one("animationend",function(){e.$element.removeClass("animate-enter"),i()}),t(e,"SaveSiteDialogViewed")})};var a=null,n=!1;SiteDialog.prototype.showInProcessOverlay=function(){if(this.submitted){var t=this.$element;t.addClass("inProcess").one("animationend",function(){t.addClass("waiting"),setTimeout(function(){n=!0,a&&a()},500)})}},SiteDialog.prototype.hideInProcessOverlay=function(){this.$element.removeClass("inProcess waiting")},SiteDialog.prototype.closeOnSuccess=function(){if(this.submitted){this.csFeatures.new_save_site&&bg.sendTimingEvent("addSite","stop");var t=this;t.$element.addClass("inProcess waiting");var e=function(){t.$element.removeClass("waiting").addClass("success").one("animationend.success",function(){setTimeout(function(){t.close()},500)})};n?e():a=function(){setTimeout(function(){e()},0)}}},SiteDialog.prototype.performValidate=function(t){var e=this;if(e.selectedTile)if(e.selectedTile===e.activeTile)e.activeTile.handleHeightChange({change:function(i){var a=t.callback;t.callback=function(){var t=arguments;i({onFrameResizeComplete:function(){a&&a.apply(e,t)}})},DialogWithGroupInput.prototype.performValidate.call(e,t)}});else{var i=t.callback;t.callback=function(t){t||e.selectedTile.showDetails(),i&&i.apply(this,arguments)},DialogWithGroupInput.prototype.performValidate.call(e,t)}},SiteDialog.prototype.getErrorOptions=function(){return{static:!0,alignTop:!0,showErrorLabel:!1}},SiteDialog.prototype.submit=function(){this.csFeatures.new_save_site&&bg.sendTimingEvent("addSite","resume"),1===this.tiles.length&&(this.selectedTile=this.tiles[0]),this.selectedTile.preSubmit(),DialogWithGroupInput.prototype.submit.apply(this,arguments),this.data.generatedPasswordSaved&&!this.data.inputChanged?t(this,"SaveSiteDialogAction","OK"):this.vaultItem?t(this,"SaveSiteDialogAction","Update"):t(this,"SaveSiteDialogAction","Add")};var s=function(t,e){t.fields&&t.fields.forEach(function(i){t.unencryptedUsername&&t.unencryptedUsername===i.value&&"password"!==i.type?i.value=e.unencryptedUsername:"password"===i.type&&(i.value=e.password)})},o=function(t,e,i){if(i.fields){s(e,i),s(t,i);var a=e.fields?e.fields:[];t.fields&&(a=a.concat(t.fields.filter(function(t){for(var e=0;e<a.length;++e){var i=a[e];if(t.type===i.type&&t.name===i.name&&t.formname===i.formname)return!1}return!0}))),i.fields=a}};SiteDialog.prototype.handleSubmit=function(t){this.submitted=!0,o(this.selectedTile.getOriginalDialogData(),this.selectedTile.getOriginalData(),t),DialogWithGroupInput.prototype.handleSubmit.apply(this,arguments)}}();
//# sourceMappingURL=sourcemaps/contentScriptSiteDialog.js.map