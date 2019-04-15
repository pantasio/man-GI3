wisestamp_utils.log("[wisestamp_content_popup] >>>>>");
var wisestamp_content_popup=function(){this.m_is_popup=true;
this.wisestamp_uid=false;
this.enabled=true;
var c=this;
var a={};
this.init=function(){wisestamp_utils.log("[wisestamp_content_popup::init] wisestamp.sys.platform = "+wisestamp.sys.platform+" >>>>>");
wisestamp_utils.send_request({command:"load_param",param:["urls","version","wisestamp_uid","enabled","dont_show_login_popup","flags"]},function(d){c.urls=d.urls;
c.version=d.version;
c.wisestamp_uid=d.wisestamp_uid;
c.enabled=d.enabled;
c.dont_show_login_popup=d.dont_show_login_popup;
a=d.flags;
b.init();
wisestamp_utils.log("[wisestamp_content_popup::init] <<<<<")
})
};
this.open_wisestamp_top_menu=function(f){wisestamp_utils.log("[wisestamp_content_popup::open_wisestamp_top_menu] >>>>>");
var d=wisestamp_jquery("html > head #wisestamp-lato-font-element");
if(d.length===0){wisestamp_jquery("html > head").append('<link id="wisestamp-lato-font-element" href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" type="text/css">')
}if(wisestamp_utils.is_logged_in(c.wisestamp_uid)){wisestamp_utils.send_request({command:"get",type:"user_plan"},function(h){wisestamp_utils.send_request({command:"load_param",param:["enabled","user"]},function(m){c.enabled=m.enabled;
var i=m.user.login_email;
var k=c.get_wisestamp_top_menu(document,h,i);
var l=wisestamp_jquery("body");
l.append(k);
k.fadeIn("fast");
k.css({display:"block","z-index":"9999999"});
function j(){k.fadeOut("fast",function(){wisestamp_jquery(this).remove();
window.close()
});
wisestamp_ui.remove_event_recursively(document,".wisestamp-top-menu");
c.close_wisestamp_menu_event(".wisestamp-top-menu",undefined)
}wisestamp_utils.setTimeout(function(){wisestamp_ui.add_event_recursively(document,"click.wisestamp-top-menu",j);
c.close_wisestamp_menu_event("click.wisestamp-top-menu",j)
},200)
})
})
}else{c.open_wisestamp_login_menu(f);
var e=wisestamp_jquery("#wisestamp-toolbar-menu");
var g=wisestamp_jquery("body")
}};
this.after_add_top_menu=function(d){wisestamp_utils.log("[wisestamp_content_popup::after_add_top_menu] >>>>>");
c.open_wisestamp_top_menu(d)
};
var b=null;
this.set_super=function(d){b=d;
b.construct(this)
}
};
wisestamp_content_popup.prototype=wisestamp_obj_web;
var wisestamp_obj_popup=new wisestamp_content_popup();
wisestamp_obj_popup.set_super(wisestamp_obj_web);
wisestamp_obj_popup.init();
wisestamp_content=wisestamp_obj_popup;