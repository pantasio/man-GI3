var wisestamp_message_handler=new function(){this.handle=function(e,g,k){wisestamp_utils.log("[wisestamp_message_handler::handle] command = "+e.command+" >>>>>");
function j(i){if(typeof(k)==="function"){k(i)
}}switch(e.command){case"update_remote":switch(e.type){case"save_mappings":wisestamp_utils.send_get_request(wisestamp.config.urls.apis.update_settings,{mappings:JSON.stringify(e.value)},function(){wisestamp_controller.refresh(function(){j()
})
});
break
}break;
case"get":switch(e.type){case"is_fb_token_refresh_needed":j({needed:wisestamp_controller.is_fb_token_refresh_needed()});
break;
case"wisestamp_uid":j(wisestamp_controller.load_param("wisestamp_uid"));
break;
case"user_plan":j(wisestamp_controller.is_logged_in()!==true||wisestamp_controller.load_param("user").plan==1);
break;
case"banner_ads":j(wisestamp_controller.load_param("ws_smg_bannerAds"));
break;
case"signature":var b=e.param;
switch(wisestamp.sys.platform){case"firefox":break;
case"chrome":case"safari":default:if((b==="None")||(b==="0")){wisestamp_controller.ws_track({e:e.event_name+"_no_sig"})
}else{wisestamp_controller.ws_track({e:e.event_name})
}break
}if((wisestamp_controller.load_param("enabled")===true)&&(wisestamp_controller.is_logged_in()===true)){if(wisestamp_controller.load_param("mp_active")){tracker.track("compose",{wisestamp_uid:wisestamp_controller.load_param("wisestamp_uid")})
}if(wisestamp_controller.load_param("ws_mail_service")!==e.content_type){tracker.people_set({mailService:e.content_type});
wisestamp_controller.save_param("ws_mail_service",e.content_type)
}wisestamp_controller.get_signature_html(b,function(i){j({data:{html:i}})
})
}else{j({data:{html:""}})
}break;
case"signatures_list":j({data:wisestamp_controller.get_signatures_list()});
break;
case"all":var f=wisestamp_controller.get_data();
j({data:f});
break
}break;
case"load_param":var c={};
if(typeof e.param==="object"){for(var h in e.param){c[e.param[h]]=wisestamp_controller.load_param(e.param[h])
}}else{c[e.param]=wisestamp_controller.load_param(e.param)
}j(c);
break;
case"save_param":wisestamp_controller.save_param(e.param,e.value);
break;
case"mixpanel":if(wisestamp.sys.platform!=="firefox"){switch(e.type){case"track":tracker.track(e.event,e.params);
break;
case"identify":tracker.identify(e.uid);
break;
case"alias":tracker.alias(e.uid);
break
}}j({test:"response"});
break;
case"ga":tracker.ga_track("extension",e.action);
break;
case"ws_track":switch(wisestamp.sys.platform){case"firefox":break;
case"chrome":case"safari":default:wisestamp_controller.ws_track({e:e.action},e.payload);
break
}break;
case"set_enabled":wisestamp_controller.save_param("enabled",e.value);
wisestamp_controller.update_extension_icon();
j(wisestamp_controller.get_data());
break;
case"update_data":if(e.save_button===true){wisestamp_controller.save_param("save_button_clicked",true)
}if(e.logout===true){wisestamp_controller.delete_param("wisestamp_uid")
}wisestamp_controller.refresh(j);
break;
case"track":var d=e.param;
break;
case"notified":var d=e.param;
wisestamp_notifications.notified(d.id,d.value,function(i){j({value:i})
});
break;
case"get_notifications":wisestamp_notifications.get_notifications(function(i,m){j({items:i,notified_id:m})
});
break;
case"get_upgrade_promo_notifications":wisestamp_notifications.get_upgrade_promo_notifications(function(i,m){j({items:i,notified_id:m})
});
break;
case"open_window":switch(wisestamp.sys.platform){case"safari":safari.application.activeBrowserWindow.openTab("foreground").url=e.url;
break
}break;
case"close_window":chrome.tabs.remove(g.tab.id);
break;
case"clear_scripts":switch(wisestamp.sys.platform){case"safari":safari.extension.removeContentScripts();
break
}break;
case"screen_capture":switch(wisestamp.sys.platform){case"safari":var a=safari.application.activeBrowserWindow.activeTab.visibleContentsAsDataURL();
j(a);
break
}break;
case"apps_names_list":j({});
break;
case"setup_compose":case"remove_compose":case"setup_wisestamp":switch(wisestamp.sys.platform){case"firefox":case"chrome":chrome.windows.getAll({populate:true},function(n){for(var i=0;
i<n.length;
i++){var m=n[i];
for(var o=0;
o<m.tabs.length;
o++){chrome.tabs.sendRequest(m.tabs[o].id,e,function(p){})
}}j(null)
});
break;
case"safari":safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("assign compose events",e);
break
}break;
case"disable_inject_first_time_script":wisestamp_controller.disable_inject_first_time_script(false);
j({});
break;
case"disable_inject_show_notification_script":wisestamp_controller.disable_inject_show_notification_script();
j({});
break;
case"set_irh_enabled":switch(wisestamp.sys.platform){case"firefox":case"chrome":var l=wisestamp_controller.load_param("prefs");
l.irh_enabled=e.value;
wisestamp_controller.save_param("prefs",l);
wisestamp_utils.send_get_request(wisestamp.config.urls.apis.update_settings,{prefs:JSON.stringify(l)});
wisestamp_irh.update_listener();
break
}j({});
break;
case"get_person":wisestamp_utils.send_get_request(wisestamp.config.urls.apis.get_person,{data:wisestamp_utils.btoa(e.email)},function(i){var m=JSON.parse(wisestamp_utils.atob(i.data));
j(m)
},"json");
break;
case"log_out":var d={};
d.from_extension=true;
d.platform=wisestamp.sys.platform;
d.version=wisestamp_utils.get_version();
wisestamp_utils.send_get_request(wisestamp.config.urls.apis.logout,d,function(i){if(i.result===true){wisestamp_controller.delete_param("wisestamp_uid");
wisestamp_controller.refresh(function(){j(i);
wisestamp_controller.reload_all_wisestamp_tabs()
})
}},"json");
break;
case"log_in":var d={};
d.from_extension=true;
d.platform=wisestamp.sys.platform;
d.version=wisestamp_utils.get_version();
if(typeof(e.wisestamp_uid)==="undefined"){wisestamp_controller.delete_param("wisestamp_uid");
d.umail=e.login_email;
d.upassword=e.login_password;
wisestamp_utils.send_get_request(wisestamp.config.urls.apis.authorize,d,function(i){if(i&&i.result&&i.user&&i.user.uid){wisestamp_controller.save_param("wisestamp_uid",i.user.uid);
wisestamp_controller.refresh(function(){j(i);
wisestamp_controller.reload_active_tab();
wisestamp_controller.reload_all_wisestamp_tabs()
})
}else{j(i)
}},"json")
}else{wisestamp_controller.save_param("wisestamp_uid",e.wisestamp_uid);
wisestamp_controller.refresh(function(){j();
wisestamp_controller.reload_active_tab();
wisestamp_controller.reload_all_wisestamp_tabs()
})
}break;
default:if(e.closePanel===true){j({})
}break
}return true
}
};
if(typeof exports!=="undefined"){exports.wisestamp_message_handler=wisestamp_message_handler
};