var CreateAccountDialog=function(e){Dialog.call(this,e,{views:[{selector:"#dataEntry"},{selector:"#confirmation",title:Strings.translateString("Confirm Password")}],dynamicHeight:!0,additionalHeaderClasses:["icon"],nextButtonText:Strings.translateString("Create Account"),largeButtons:!0,title:Strings.translateString("Create Account"),consentDetails:{countryCode:"",defaultConsentValue:null,ip:""}})};CreateAccountDialog.prototype=Object.create(Dialog.prototype),CreateAccountDialog.prototype.constructor=CreateAccountDialog,function(){var e,t=!1,a=[];CreateAccountDialog.prototype.initialize=function(e){Dialog.prototype.initialize.apply(this,arguments);var t,a=document.getElementById("createAccountDialog"),s=document.getElementById("chooseOtherwise"),r=document.getElementById("contactPermission"),n=document.getElementById("contactPermissionCheckbox"),o=document.getElementById("contactPermissionContainer"),i=document.getElementById("marketingOptOutSeen");a.classList.add("loading"),this.getConsentDetails(function(e){i.value="0",r.value=e.defaultConsentValue,s.addEventListener("click",function(){"0"===i.value&&(n.checked="1"===s.getAttribute("data-default-opt-out-value"),i.value="1",o.classList.add("is-expanded"))}),n.addEventListener("change",function(){n.checked?r.value="0":r.value="1"}),a.classList.remove("loading")}),this.inputFields.password.getElement().LP_addPasswordMeter(),(t=this).inputFields.email.onChange(function(e){e&&getBG().LPServer.textRequest({type:"GET",url:"create_account.php",CSRFToken:!1,data:{username:e,check:"avail",mistype:1},success:function(e){0===e.indexOf("mistype:")?t.addError("email",e.substring(8)):"no"===e&&t.addError("email",Strings.translateString("Email already in use."))}})})},CreateAccountDialog.prototype.getConsentDetails=function(e){var s,r=this;if(t)return e(this.consentDetails);a.push(e),s=function(e){for(t=!0,r.consentDetails=e;a.length>0;){var s=a.pop();s&&s(e)}},("undefined"==typeof bg?getBG():bg).LPServer.jsonRequest({url:"lmiapi/create-account/details",type:"GET",CSRFToken:!1,success:function(e){s&&s(e)},error:function(e){s&&s(null)}})},CreateAccountDialog.prototype.close=function(e){var t;e?Dialog.prototype.close.apply(this,arguments):(t=this,LPTools.getOption(t.data,"showcloseconfirm",!0)?dialogs.confirmation.open({title:"LastPass",text:Strings.translateString("Do you really want to quit?  You cannot use LastPass without creating an account."),handler:function(){dialogs.alert.open({title:"LastPass",text:Strings.translateString("Please visit https://lastpass.com to create an account at a later time."),handler:function(){t.close(!0)}})}}):t.close(!0))},CreateAccountDialog.prototype.validate=function(e){var t=Dialog.prototype.validate.apply(this,arguments);return e.email.length<5&&(this.addError("email",Strings.translateString("It looks like you've entered an invalid or incomplete email address. Please try again.")),t=!1),e.password.length<8&&(this.addError("password",Strings.translateString("Sorry, your password is too short. It must be a minimum of 8 characters long for security reasons.")),t=!1),e.password&&e.password===e.email&&(this.addError("password",Strings.translateString("Sorry, your password can not be the same as your email address.")),t=!1),(e.password.match(/^password\d{0,3}$/i)||"12345678"===e.password||"123456789"===e.password||"1234567890"===e.password||e.password.match(/^lastpass\d{0,3}$/i)||"lastpass.com"===e.password||"qwertyuiop"===e.password||"abcd1234"===e.password)&&(this.addError("password",Strings.translateString("Your password is easily guessable, avoid simple runs of characters, or variations of 'password' or 'lastpass'.")),t=!1),e.password&&-1!==e.reminder.toLowerCase().indexOf(e.password.toLowerCase())&&(this.addError("reminder",Strings.translateString("Your Password Reminder can not be the same as your chosen Master Password for security reasons. Please edit your Reminder so that it does not contain your Master Password.")),t=!1),this.currentViewIndex===this.views.length-1&&e.password!==e.reconfirm&&(this.addError("reconfirm",Strings.translateString("Your Master Password and Confirm Master Password entries do not match, please enter them again.")),t=!1),t},CreateAccountDialog.prototype.handleSubmit=(e=function(e,t,a){Topics.get(Topics.ERROR).publish(e),Topics.get(Topics.REQUEST_ERROR).publish({requestID:a})},function(t){t.email=bg.fix_username(t.email);var a,s,r=LPRequest.getNewRequestID();a=bg,s=this,a.make_lp_key_hash(t.email,t.password,function(n,o,i){var l={username:t.email,email:t.email,hash:o,password_hint:t.reminder,improve:1,loglogins:1,iterations:i,xml:1};l.contactPermission=t.contactPermission,l.marketingOptOutSeen=t.marketingOptOutSeen,BuildVariables&&BuildVariables.createSource&&(l[BuildVariables.createSource]=1),Topics.get(Topics.REQUEST_START).publish({requestID:r}),a.create_account_safe($.param(l),function(n){!function(t,a,s,r,n){var o="";if(t){var i=t;if(i.indexOf("ok")>=0)s.set("g_manual_login",!0),s.LP_do_login(a.email,a.password,!0,!1,null,!0,null,null,function(){n.close(!0)});else if(i.indexOf("usernametaken")>=0)o=Strings.translateString("Email already in use, have you forgotten your password?");else if(i.indexOf("usernameinvalid")>=0||i.indexOf("emailfailed")>=0)o=Strings.translateString("Invalid email address, try again");else{var l=jQuery.parseXML(t);if(l&&l.documentElement){var c=l.getElementsByTagName("error");c&&c.length>0&&c[0].getAttribute("msg")&&(o=c[0].getAttribute("msg"))}""===o&&(o=Strings.translateString("A server error occurred while processing your request."))}}else o=Strings.translateString("Received empty response from server.");o?e(o,a,r):a=null}(n,t,a,r,s)},e)})})}();
//# sourceMappingURL=sourcemaps/createAccountDialog.js.map