var _gaq=_gaq||[];
var tracker=new function(){this.mixpanel=null;
this.ga_account="UA-5007935-30";
this.init=function(){if(typeof(wisestamp)==="undefined"||!(wisestamp.sys.platform==="chrome")){return
}(function(l,c){if(!c.__SV){var d,k,h,j;
window.mixpanel=c;
d=l.createElement("script");
d.type="text/javascript";
d.async=!0;
d.src="https://cdn.mxpnl.com/libs/mixpanel-2.2.min.js";
k=l.getElementsByTagName("script")[0];
k.parentNode.insertBefore(d,k);
c._i=[];
c.init=function(b,i,m){function g(e,o){var f=o.split(".");
2==f.length&&(e=e[f[0]],o=f[1]);
e[o]=function(){e.push([o].concat(Array.prototype.slice.call(arguments,0)))
}
}var n=c;
"undefined"!==typeof m?n=c[m]=[]:m="mixpanel";
n.people=n.people||[];
n.toString=function(e){var f="mixpanel";
"mixpanel"!==m&&(f+="."+m);
e||(f+=" (stub)");
return f
};
n.people.toString=function(){return n.toString(1)+".people (stub)"
};
h="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
for(j=0;
j<h.length;
j++){g(n,h[j])
}c._i.push([b,i,m])
};
c.__SV=1.2
}})(document,window.mixpanel||[]);
mixpanel.init("cd4476e92db81d7d833077acee2bdbea");
_gaq.push(["_setAccount",this.ga_account]);
(function(){var b=document.createElement("script");
b.type="text/javascript";
b.async=true;
b.src="https://ssl.google-analytics.com/ga.js";
var a=document.getElementsByTagName("script")[0];
a.parentNode.insertBefore(b,a)
})()
};
this.ga_track=function(a,b){switch(wisestamp.sys.platform){default:if(typeof _gaq!=="undefined"){_gaq.push(["_track_event",a,b])
}}};
this.ws_track=function(a){wisestamp_utils.send_get_request(wisestamp.config.urls.apis.wstrack,a,function(b){},"json")
};
this.track=function(a,b){switch(wisestamp.sys.platform){default:if(typeof mixpanel!=="undefined"){mixpanel.track(a,b)
}}};
this.alias=function(a){switch(wisestamp.sys.platform){default:if(typeof mixpanel!=="undefined"){mixpanel.alias(a)
}}};
this.identify=function(a){switch(wisestamp.sys.platform){default:if(typeof mixpanel!=="undefined"){mixpanel.identify(a)
}}};
this.people_set=function(a){switch(wisestamp.sys.platform){default:if(typeof mixpanel!=="undefined"){mixpanel.people.set(a)
}}};
this.init()
};