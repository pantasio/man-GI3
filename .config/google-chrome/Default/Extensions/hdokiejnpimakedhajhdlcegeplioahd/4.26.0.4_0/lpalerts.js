var g_alert_set=0;function rich_notification(e){var t=e.lpa_title,a=e.lpa_iconurl,i=e.lpa_id,r=e.lpa_onclicktext,l=e.lpa_onclickurl,o=e.lpa_msg;if(e.lpa_breachunlock&&sendLpImprove("alert_response_breach_unlock_tried"),localStorage.setItem(g_username+"-breach_ids",i),handle_notification_click=function(e,t){1==t?chrome.notifications.clear(e):0==g_alert_set&&(g_alert_set=1,openURL(l),setTimeout(function(){g_alert_set=0},1e3))},g_ischrome&&void 0!==chrome.notifications){var n={type:"basic",title:t,message:o,iconUrl:a,priority:2,buttons:[{title:r},{title:"Dismiss"}]};chrome.notifications.create("rich"+i,n,function(e){chrome.notifications.onButtonClicked.addListener(handle_notification_click)})}else{g_alert_set=1,handlenotifications(t,o,l)}}function handle_new_alerts(e){var t=g_username+"-breach_ids";for(var a in alert_response={},e.attributes)alert_response[e.attributes[a].name]=e.attributes[a].value;var i=alert_response.lpa_breachonlyifaffected,r=alert_response.lpa_breach,l=alert_response.lpa_breachurl,o=alert_response.lpa_breachhasrecipe;if(l&&o){var n=!1;for(var a in g_sites)lp_gettld_url(g_sites[a].url)==lp_gettld_url(l)&&(g_sites[a].pwch="1",n=!0);n&&rewritelocalfile()}var _=!0;if(""!=l&&"1"==i&&"1"==r)for(var a in _=!1,g_sites)if(lp_gettld_url(g_sites[a].url)==lp_gettld_url(l)){_=!0;break}_&&(void 0!==localStorage[t]&&alert_response.lpa_id==localStorage[t]||(1==alert_response.lpa_rich&&rich_notification(alert_response),1==alert_response.lpa_toolbar&&(g_notification_type="lpalert",g_badgedata={cmd:"notification",type:g_notification_type},g_notification_data={data:alert_response,cmd:"notification",type:"lpalert"},set_badge(g_notification_data,getcurrenttabid()),drawIconAtRotation(0),sendTS(g_badgedata))))}
//# sourceMappingURL=sourcemaps/lpalerts.js.map
