var do_bgiconinput=!0,g_CSPCHECKER=0;function popupfill_create_iframe(e,t,r,n,i,a,o,s,l,_){if(do_experimental_popupfill&&e){for(var p=e.getElementsByTagName("input"),f=0;f<p.length&&f<MAX_INPUTS_HARD;f++){var d=p[f];void 0!==d.maxLength&&"password"==d.type&&(g_isie||sendBG({cmd:"set_possiblemax",max:d.maxLength}))}g_isie&&init_LPfn()&&LPfn&&LPfn.resetSafeCloseIframe(),g_iframeclose_starttime=null,t=parseInt(t)+"px",r=parseInt(r)+"px";var m=e.body;if(m&&!e.getElementById(LPMAGICIFRAME+n)){var c=e.createElement("iframe");if(c.id=LPMAGICIFRAME+n,c.name=LPMAGICIFRAME+n,g_iframe_docked=!0,!1,g_isie){c.src="https://lastpass.com/fake/fake.php#framesrc=LPMAGIC",init_LPfn()&&LPfn&&LPfn.getDocumentMode(e)<9&&(c.setAttribute("allowTransparency",!0),c.setAttribute("frameBorder",0),c.allowTransparency=!0,c.frameBorder=0)}else if("undefined"!=typeof g_isfirefoxsdk&&g_isfirefoxsdk&&!bg.get("LPContentScriptFeatures").is_infield_enabled){g_popup_iframe=c;var g=e.location.href,u=lpParseUri(g),h=Math.floor(1e8*Math.random());c.setAttribute("lpsrc",u.protocol+"://"+h+"."+u.host+"/lpblankiframe.local")}else{if(bg.get("LPContentScriptFeatures").is_infield_enabled)return"undefined"!=typeof event&&event&&event.type?_.eventType=event.type:_.eventType="click",void csTop.LPInfieldFrame.openFrame(_);g=urlprefix+"popupfilltab.html";"undefined"==typeof chrome&&"undefined"!=typeof lplanguage&&(g+="?lplanguage="+lplanguage),c.src=g}parseInt(t)<0&&(t="0px"),parseInt(r)<0&&(r="0px"),dotrans?(g_frame_css_str="display:block !important; position:absolute !important; visibility:visible !important; z-index:"+CLICKABLE_ICON_ZINDEX+" !important; border-style:none !important; opacity: 1.0 !important; margin:0 !important; padding:0 !important;","undefined"!=typeof g_isie&&g_isie&&(g_frame_css_str+="background-color:transparent !important;background-image:none !important;filter:alpha(opacity=100) !important ; ")):g_frame_css_str="display:block; position:absolute !important; visibility:visible !important; opacity: 1.0 !important ; z-index:"+CLICKABLE_ICON_ZINDEX+" !important; border-style:solid !important; border-color: #4c4c4c !important; border-width:1px !important; border-radius: 4px 4px; -moz-border-radius: 4px; -webkit-border-radius: 4px; box-shadow: 1px rgba(200, 200, 200, 0.5); -webkit-box-shadow: 1px 1px rgba(200, 200, 200, 0.5); -moz-box-shadow: 1px 1px rgba(200, 200, 200, 0.5); filter:alpha(opacity=100) !important; ",c.style.cssText=g_frame_css_str;try{if(framesetarr=document.getElementsByTagName("frameset"),0==framesetarr.length)m.appendChild(c);else if(g_create_iframe_in_top&&!g_isie&&!g_isfirefox&&l&&1==framesetarr.length){var v=LPJSON.stringify(g_frame_css_str+" border: none;");l.body.setAttribute("data-lp-gcss",v);var y=l.getElementsByTagName("FRAMESET");if(y&&y[0]){var b=y[0].getElementsByTagName("FRAME");if(b){var x=b[0].contentWindow.document;x.body.setAttribute("data-lp-gcss",v),x.body.appendChild(c)}else l.body.appendChild(c)}}else{var w=!1;for(f=0;f<framesetarr.length;f++){for(var k=0;k<framesetarr[f].children.length;k++)if("FRAME"==framesetarr[f].children[k].tagName)if(cf=framesetarr[f].children[k].contentWindow.document,null!=cf.getElementById(n)){if(w=!0,toappendTo=cf.getElementById(n),_&&_.framesrc&&_.framesrc==get_doc_location_href(cf))break}else if(null!=cf.getElementsByName(n)&&0!=cf.getElementsByName(n).length&&(w=!0,toappendTo=cf.getElementsByName(n)[0],_&&_.framesrc&&_.framesrc==get_doc_location_href(cf)))break;if(w){try{toappendTo.ownerDocument.body.setAttribute("data-lp-gcss",LPJSON.stringify(g_frame_css_str)),toappendTo.parentNode.appendChild(c)}catch(e){framesetarr[f].children[k].contentWindow.document.body.appendChild(c)}break}}}}catch(e){return void verbose_log("append failed! "+e)}g_isie&&!LP_getloggedin()&&c.parentNode.removeChild(c),c.width=parseInt(a)+"px",g_isie?(c.height="38px",c.height="173px"):c.height="26px";void 0!==i&&i>0&&(c.height=24*i+15+8+"px"),parseInt(o)>0?c.height=parseInt(o)+"px":c.height=parseInt(c.height)+"px";var E="width: "+(parseInt(c.width)+"px")+" !important; height: "+(parseInt(c.height)+"px")+" !important; top:"+r+" !important; left:"+t+" !important; ";c.style.cssText=g_frame_css_str+E,setTimeout(function(){0==g_CSPCHECKER&&"undefined"==typeof chrome&&"object"==typeof safari&&do_iframe_sad_msg(e)},5e3)}}}function weasel(e,t){if(LPCTR("weasel"),do_experimental_popupfill){if((void 0===e||0==e||1==e||e<5)&&(e=200),g_weaseled=!0,g_isdebug){var r=(new Date).getTime(),n=r-g_last_weasel;n>2*e&&verbose_log("last weasel cycle took too long"+n+" ms")}if(popupfill_resize(),g_isdebug){var i=(new Date).getTime()-r;i>e&&verbose_log("last resize took too long "+i+" ms"),g_last_weasel=(new Date).getTime()}g_weasel_id=setTimeout(function(){weasel(e)},e)}}var g_last_weasel=0;function issaveall(e){for(var t=e.elements,r=0,n=0,i=0,a=0;a<t.length;a++){var o=t[a].type;"password"==o?n++:"text"==o||"tel"==o||"email"==o?r++:"textarea"==o&&i++}return 1!=r||1!=n||0!=i}var POPUP_FIELD_OFFSET=-4;function calculate_iframe_pos(e,t,r,n){if(!do_experimental_popupfill)return null;if(void 0===n&&(n=!1),!e)return null;if(null==t)return null;var i=t.style.left,a=t.style.top;if((g_double_password_hack||g_double_secret_password_hack||parseInt(i)<0||parseInt(a)<0)&&null!=(s=e.getElementById(LPMAGICIFRAME+LP_pickFieldName(e,t)))){var o=LP_getAbsolutePos(e,s,null,n);if(o)return a=parseInt(o.top),i=parseInt(o.left),isNaN(a)||isNaN(i)?null:{posx:i+="px",posy:a+="px"}}LP_pickFieldName(e,t);if(null!=t){var s,l=LP_getAbsolutePos(e,t,null,n);if(null!=l&&(i=parseInt(l.left)+POPUP_FIELD_OFFSET+"px",a=parseInt(l.top)+parseInt(l.height)+"px",g_do_icon_number_hint&&(a=parseInt(l.top)+parseInt(l.height)+4+"px")),null==r||0==r||""==r)if(null!=(s=LP_getElementByIdOrName(e,LPMAGICIFRAME+LP_pickFieldName(e,t)))){var _=LP_getAbsolutePos(e,s,null,!0);r=_?_.width:0}else r=0;if(!n){var p=LP_getWindowWidth(window,!0);if(!p)return{posx:0,posy:0};parseInt(r)+parseInt(i)>p&&(i=p-parseInt(r)-20+"px")}}if(g_isie,""==i||"auto"==i||""==a||"auto"==a)return null;var f=parseInt(i),d=parseInt(a);return"NaN"==f||"NaN"==d?null:{posx:i=f+"px",posy:a=d+"px"}}function verbose_log(e){verbose&&("undefined"!=typeof Date?console_log("["+g_docnum+"] "+((new Date).getTime()-g_tsstart)+" : "+e):console_log("["+g_docnum+"] "+e))}function is_watermark(e){return!1}function checkAskGenerate(){}function sendKey(e,t){try{return keyName="DOM_VK_"+e.toUpperCase(),send_simulated_key(t,0,KeyEvent[keyName],!1)}catch(e){lpdbg("error",e)}return null}function send_simulated_key(e,t,r,n){if(void 0===e||void 0===e.ownerDocument)return lpdbg("error","No key target!"),!1;var i=e.ownerDocument.createEvent("KeyboardEvent");"undefined"!=typeof g_isfirefoxsdk&&g_isfirefoxsdk?i.initKeyEvent("keydown",!0,!0,null,!1,!1,n,!1,r,t):i.initKeyboardEvent("keydown",!0,!0,document.defaultView,!1,!1,n,!1,r,r);var a=e.dispatchEvent(i);return a&&"undefined"!=typeof g_isfirefoxsdk&&g_isfirefoxsdk&&((i=e.ownerDocument.createEvent("KeyboardEvent")).initKeyEvent("keypress",!0,!0,null,!1,!1,n,!1,r,t),a=e.dispatchEvent(i)),i=e.ownerDocument.createEvent("KeyboardEvent"),"undefined"!=typeof g_isfirefoxsdk&&g_isfirefoxsdk?i.initKeyEvent("keyup",!0,!0,null,!1,!1,n,!1,r,t):i.initKeyboardEvent("keyup",!0,!0,null,!1,!1,n,!1,r,r),e.dispatchEvent(i),a}var g_formmutations=0;function checkShouldRecheck(e){var t=20,r=!1,n=document,i=window;e&&"object"==typeof e||(e={});var a=!1,o=!1,s=!1;if(void 0!==e.fromclick&&(a=e.fromclick),void 0!==e.frommuto&&(o=e.frommuto),void 0!==e.skipfill&&(s=e.skipfill),g_pending_recheck=!1,debug_checkpoint("entered checkShouldRecheck, clear pending state"),LP_isSinglePageApp(n)&&(t=100),g_formmutations>t)return verbose_log("Abort"),!1;if(LP_should_ignore_this_doc(n,a))return!1;if(do_experimental_popupfill&&g_input_cnt>=0&&g_form_cnt>=0){var l=countInputs(document),_=countFormEquivalents(document),p=computeFingerprint(document);if(verbose_log("checkShouldRecheck() : # inputs was "+g_input_cnt+", now "+l+" #forms was "+g_form_cnt+" now "+_+", fingerprint was "+g_input_fingerprint+" now "+p),g_input_cnt!=l||g_form_cnt!=_||g_input_fingerprint!=p){if(g_formmutations++,formcachereset(document),fieldcachereset(document),g_isie)setTimeout(function(){ie_recheck_page(document,g_is_specialsite)},1e3);else{get_doc_location_href(n);setTimeout(function(){LPCTR("recheck");var t=LP_get_last_url_history(n);t||(LP_put_last_url_history(n),t=LP_get_last_url_history(n));var r=t.href,a=t.href_hash,l=get_doc_location_href(n);if(!o&&(l!==r||e.href!==l||a!==e.href_hash))return formcachereset(n),fieldcachereset(n),g_input_cnt=0,g_form_cnt=0,delete n.body._lpcrdone,LP_put_last_url_history(n),t=LP_get_last_url_history(n),e.href=t.href,e.href_hash=t.href_hash,void(g_pending_recheck||checkShouldRecheck(e));g_pending_eval||evalScriptsInFrame(i,n,!0,{skipfill:s||!function(e){e||(e=LP_derive_doc());if(!e)return!1;if(LP_isSinglePageApp(e))return!0;if(isASPpage())return!0;if(g_did_muto)return g_did_muto=!1,!0;return!1}(n),href:r,href_hash:a,frommuto:o})},200)}g_input_cnt=l,g_form_cnt=_,g_input_fingerprint=p,r=!0}}return r}function is_watermark_password(e){return!1}function createpopuptoplevel_handler(e){if(!e)return!1;var t=LP_derive_doc();g_iscasper&&e.override_doc&&(t=e.override_doc);var r=parseInt(e.from_iframe.posx),n=parseInt(e.from_iframe.posy),i=e.from_iframe.id,a=e.from_iframe.rows,o=e.from_iframe.width,s=(e.from_iframe.minheight,e.from_iframe.framename),l=e.from_iframe.framesrc,_=null;if(is_your_popup_showing(t))return!1;var p=find_iframe_pos(t,s,l,!1);p||(null!==(p=find_iframe_pos(t,s,l,!0))&&void 0!==p.cframedoc?_=p.cframedoc:pass);var f=0,d=0;p?(f=parseInt(p.left)+r+"px",d=parseInt(p.top)+n+"px",g_toplevel_initial_abs_x=f,g_toplevel_initial_abs_y=d):(f="10px",d="10px");return e.from_iframe.iframe=find_iframe(t,s,l,!1),popupfill_create_iframe(t,f,d,i,a,o,"90px",!1,_,e.from_iframe),g_popupfill_iframe_width_save=o,!0}var g_toplevel_initial_abs_x=null,g_toplevel_initial_abs_y=null;function popupfillresize_handler(e){e.width>0&&(g_minwidth_override=parseInt(e.width)),e.height>0&&(g_minheight_override=parseInt(e.height)),!g_create_iframe_in_top||g_isie||g_isfirefox||!LP_inIframe(window)&&toplevel_iframe_state_get()&&(g_draggable&&g_iframe_docked,relocate_popupfill_iframes(document))}function find_iframe_pos(e,t,r,n){if(!e)return null;var i,a;try{var o=e.getElementsByTagName("IFRAME");if(n&&(o=e.getElementsByTagName("FRAME")),!t&&1==o.length)return LP_getAbsolutePos(e,o[0],!0,!0);var s=[];for(i=0;i<o.length&&i<50;i++)s[i]=o[i];for(i=0;i<s.length;i++)if(s[i].name&&""!=t&&s[i].name==t||s[i].src&&""!=r&&compare_puny_urls(s[i].src,r))return LP_getAbsolutePos(e,s[i],!0,!0);if(n)for(i=0;i<s.length;i++){var l=s[i].contentWindow.document,_=l.getElementsByTagName("FRAME");for(a=0;a<_.length&&a<50;a++)if(_[a].name&&""!=t&&_[a].name==t||_[a].src&&""!=r&&_[a].src==r){var p=LP_getAbsolutePos(l,_[a],!0,!0);return p.cframedoc=l,p}}}catch(e){}return null}function find_iframe(e,t,r,n){if(!e)return null;var i,a;try{var o=e.getElementsByTagName("IFRAME");if(n&&(o=e.getElementsByTagName("FRAME")),!t&&1==o.length)return o[0];var s=[];for(i=0;i<o.length&&i<50;i++)s[i]=o[i];for(i=0;i<s.length;i++)if(s[i].name&&""!=t&&s[i].name==t||s[i].src&&""!=r&&compare_puny_urls(s[i].src,r))return s[i];if(n)for(i=0;i<s.length;i++){var l=s[i].contentWindow.document.getElementsByTagName("FRAME");for(a=0;a<l.length&&a<50;a++)if(l[a].name&&""!=t&&l[a].name==t||l[a].src&&""!=r&&l[a].src==r)return l[a]}}catch(e){}return null}
//# sourceMappingURL=sourcemaps/onload_shared.js.map
