/*
 jQuery contextMenu - Plugin for simple contextMenu handling

 Version: git-master

 Authors: Rodney Rehm, Addy Osmani (patches for FF)
 Web: http://medialize.github.com/jQuery-contextMenu/

 Licensed under
   MIT License http://www.opensource.org/licenses/mit-license
   GPL v3 http://opensource.org/licenses/GPL-3.0

*/
(function(e,p){function E(a){a=a.split(/\s+/);for(var b=[],c=0,d;d=a[c];c++)d=d[0].toUpperCase(),b.push(d);return b}function t(a){return a.id&&e('label[for="'+a.id+'"]').val()||a.name}function C(a,b,c){c||(c=0);b.each(function(){var b=e(this),g=this,h=this.nodeName.toLowerCase();if("label"==h&&b.find("input, textarea, select").length){var k=b.text();b=b.children().first();g=b.get(0);h=g.nodeName.toLowerCase()}switch(h){case "menu":var f={name:b.attr("label"),items:{}};c=C(f.items,b.children(),c);
break;case "a":case "button":f={name:b.text(),disabled:!!b.attr("disabled"),callback:function(){return function(){b.click()}}()};break;case "menuitem":case "command":switch(b.attr("type")){case p:case "command":case "menuitem":f={name:b.attr("label"),disabled:!!b.attr("disabled"),callback:function(){return function(){b.click()}}()};break;case "checkbox":f={type:"checkbox",disabled:!!b.attr("disabled"),name:b.attr("label"),selected:!!b.attr("checked")};break;case "radio":f={type:"radio",disabled:!!b.attr("disabled"),
name:b.attr("label"),radio:b.attr("radiogroup"),value:b.attr("id"),selected:!!b.attr("checked")};break;default:f=p}break;case "hr":f="-------";break;case "input":switch(b.attr("type")){case "text":f={type:"text",name:k||t(g),disabled:!!b.attr("disabled"),value:b.val()};break;case "checkbox":f={type:"checkbox",name:k||t(g),disabled:!!b.attr("disabled"),selected:!!b.attr("checked")};break;case "radio":f={type:"radio",name:k||t(g),disabled:!!b.attr("disabled"),radio:!!b.attr("name"),value:b.val(),selected:!!b.attr("checked")};
break;default:f=p}break;case "select":f={type:"select",name:k||t(g),disabled:!!b.attr("disabled"),selected:b.val(),options:{}};b.children().each(function(){f.options[this.value]=e(this).text()});break;case "textarea":f={type:"textarea",name:k||t(g),disabled:!!b.attr("disabled"),value:b.val()};break;case "label":break;default:f={type:"html",html:b.clone(!0)}}f&&(c++,a["key"+c]=f)});return c}e.support.htmlMenuitem="HTMLMenuItemElement"in window;e.support.htmlCommand="HTMLCommandElement"in window;e.support.eventSelectstart=
"onselectstart"in document.documentElement;if(!e.ui||!e.ui.widget){var F=e.cleanData;e.cleanData=function(a){for(var b=0,c;null!=(c=a[b]);b++)try{e(c).triggerHandler("remove")}catch(d){}F(a)}}var l=null,w=!1,q=e(window),x=0,r={},m={},y={},z={selector:null,appendTo:null,trigger:"right",autoHide:!1,delay:200,reposition:!0,determinePosition:function(a){if(e.ui&&e.ui.position)a.css("display","block").position({my:"center top",at:"center bottom",of:this,offset:"0 5",collision:"fit"}).css("display","none");
else{var b=this.offset();b.top+=this.outerHeight();b.left+=this.outerWidth()/2-a.outerWidth()/2;a.css(b)}},position:function(a,b,c){if(b||c){b="maintain"===b&&"maintain"===c?a.$menu.position():{top:c,left:b};c=q.scrollTop()+q.height();var d=q.scrollLeft()+q.width(),e=a.$menu.height(),f=a.$menu.width();b.top+e>c&&(b.top-=e);b.left+f>d&&(b.left-=f);a.$menu.css(b)}else a.determinePosition.call(this,a.$menu)},positionSubmenu:function(a){if(e.ui&&e.ui.position)a.css("display","block").position({my:"left top",
at:"right top",of:this,collision:"flipfit fit"}).css("display","");else{var b={top:0,left:this.outerWidth()};a.css(b)}},zIndex:1,animation:{duration:50,show:"slideDown",hide:"slideUp"},events:{show:e.noop,hide:e.noop},callback:null,items:{}},u=null,A=null,B=null,D,G=function(a){for(var b=0;b=Math.max(b,parseInt(a.css("z-index"),10)||0),a=a.parent(),a&&a.length&&!(-1<"html body".indexOf(a.prop("nodeName").toLowerCase())););return b},f={abortevent:function(a){a.preventDefault();a.stopImmediatePropagation()},
contextmenu:function(a){var b=e(this);a.preventDefault();a.stopImmediatePropagation();if(!("right"!=a.data.trigger&&a.originalEvent||b.hasClass("context-menu-active")||b.hasClass("context-menu-disabled"))){l=b;if(a.data.build){var c=a.data.build(l,a);if(!1===c)return;a.data=e.extend(!0,{},z,a.data,c||{});if(!a.data.items||e.isEmptyObject(a.data.items))throw window.console&&(console.error||console.log)("No items specified to show in contextMenu"),Error("No Items specified");a.data.$trigger=l;n.create(a.data)}n.show.call(b,
a.data,a.pageX,a.pageY)}},click:function(a){a.preventDefault();a.stopImmediatePropagation();e(this).trigger(e.Event("contextmenu",{data:a.data,pageX:a.pageX,pageY:a.pageY}))},mousedown:function(a){var b=e(this);l&&l.length&&!l.is(b)&&l.data("contextMenu").$menu.trigger("contextmenu:hide");2==a.button&&(l=b.data("contextMenuActive",!0))},mouseup:function(a){var b=e(this);b.data("contextMenuActive")&&l&&l.length&&l.is(b)&&!b.hasClass("context-menu-disabled")&&(a.preventDefault(),a.stopImmediatePropagation(),
l=b,b.trigger(e.Event("contextmenu",{data:a.data,pageX:a.pageX,pageY:a.pageY})));b.removeData("contextMenuActive")},mouseenter:function(a){var b=e(this),c=e(a.relatedTarget),d=e(document);c.is(".context-menu-list")||c.closest(".context-menu-list").length||l&&l.length||(A=a.pageX,B=a.pageY,D=a.data,d.on("mousemove.contextMenuShow",f.mousemove),u=setTimeout(function(){u=null;d.off("mousemove.contextMenuShow");l=b;b.trigger(e.Event("contextmenu",{data:D,pageX:A,pageY:B}))},a.data.delay))},mousemove:function(a){A=
a.pageX;B=a.pageY},mouseleave:function(a){a=e(a.relatedTarget);if(!a.is(".context-menu-list")&&!a.closest(".context-menu-list").length){try{clearTimeout(u)}catch(b){}u=null}},layerClick:function(a){var b=e(this).data("contextMenuRoot"),c=a.button,d=a.pageX,f=a.pageY,h,k;a.preventDefault();a.stopImmediatePropagation();setTimeout(function(){var g="left"==b.trigger&&0===c||"right"==b.trigger&&2===c;document.elementFromPoint&&(b.$layer.hide(),h=document.elementFromPoint(d-q.scrollLeft(),f-q.scrollTop()),
b.$layer.show());if(b.reposition&&g)if(document.elementFromPoint){if(b.$trigger.is(h)||b.$trigger.has(h).length){b.position.call(b.$trigger,b,d,f);return}}else{k=b.$trigger.offset();var l=e(window);k.top+=l.scrollTop();if(k.top<=a.pageY&&(k.left+=l.scrollLeft(),k.left<=a.pageX&&(k.bottom=k.top+b.$trigger.outerHeight(),k.bottom>=a.pageY&&(k.right=k.left+b.$trigger.outerWidth(),k.right>=a.pageX)))){b.position.call(b.$trigger,b,d,f);return}}if(h&&g)b.$trigger.one("contextmenu:hidden",function(){e(h).contextMenu({x:d,
y:f})});b.$menu.trigger("contextmenu:hide")},50)},keyStop:function(a,b){b.isInput||a.preventDefault();a.stopPropagation()},key:function(a){var b=l.data("contextMenu")||{};switch(a.keyCode){case 9:case 38:if(f.keyStop(a,b),b.isInput){if(9==a.keyCode&&a.shiftKey){a.preventDefault();b.$selected&&b.$selected.find("input, textarea, select").blur();b.$menu.trigger("prevcommand");return}if(38==a.keyCode&&"checkbox"==b.$selected.find("input, textarea, select").prop("type")){a.preventDefault();return}}else if(9!=
a.keyCode||a.shiftKey){b.$menu.trigger("prevcommand");return}case 40:f.keyStop(a,b);if(b.isInput){if(9==a.keyCode){a.preventDefault();b.$selected&&b.$selected.find("input, textarea, select").blur();b.$menu.trigger("nextcommand");return}if(40==a.keyCode&&"checkbox"==b.$selected.find("input, textarea, select").prop("type")){a.preventDefault();return}}else{b.$menu.trigger("nextcommand");return}break;case 37:f.keyStop(a,b);if(b.isInput||!b.$selected||!b.$selected.length)break;if(!b.$selected.parent().hasClass("context-menu-root")){a=
b.$selected.parent().parent();b.$selected.trigger("contextmenu:blur");b.$selected=a;return}break;case 39:f.keyStop(a,b);if(b.isInput||!b.$selected||!b.$selected.length)break;var c=b.$selected.data("contextMenu")||{};if(c.$menu&&b.$selected.hasClass("context-menu-submenu")){b.$selected=null;c.$selected=null;c.$menu.trigger("nextcommand");return}break;case 35:case 36:b.$selected&&b.$selected.find("input, textarea, select").length||((b.$selected&&b.$selected.parent()||b.$menu).children(":not(.disabled, .not-selectable)")[36==
a.keyCode?"first":"last"]().trigger("contextmenu:focus"),a.preventDefault());return;case 13:f.keyStop(a,b);if(b.isInput){if(b.$selected&&!b.$selected.is("textarea, select")){a.preventDefault();return}break}b.$selected&&b.$selected.trigger("mouseup");return;case 32:case 33:case 34:f.keyStop(a,b);return;case 27:f.keyStop(a,b);b.$menu.trigger("contextmenu:hide");return;default:if(c=String.fromCharCode(a.keyCode).toUpperCase(),b.accesskeys[c]){b.accesskeys[c].$node.trigger(b.accesskeys[c].$menu?"contextmenu:focus":
"mouseup");return}}a.stopPropagation();b.$selected&&b.$selected.trigger(a)},prevItem:function(a){a.stopPropagation();var b=e(this).data("contextMenu")||{};if(b.$selected){var c=b.$selected;b=b.$selected.parent().data("contextMenu")||{};b.$selected=c}c=b.$menu.children();for(var d=b.$selected&&b.$selected.prev().length?b.$selected.prev():c.last(),g=d;d.hasClass("disabled")||d.hasClass("not-selectable");)if(d=d.prev().length?d.prev():c.last(),d.is(g))return;b.$selected&&f.itemMouseleave.call(b.$selected.get(0),
a);f.itemMouseenter.call(d.get(0),a);a=d.find("input, textarea, select");a.length&&a.focus()},nextItem:function(a){a.stopPropagation();var b=e(this).data("contextMenu")||{};if(b.$selected){var c=b.$selected;b=b.$selected.parent().data("contextMenu")||{};b.$selected=c}c=b.$menu.children();for(var d=b.$selected&&b.$selected.next().length?b.$selected.next():c.first(),g=d;d.hasClass("disabled")||d.hasClass("not-selectable");)if(d=d.next().length?d.next():c.first(),d.is(g))return;b.$selected&&f.itemMouseleave.call(b.$selected.get(0),
a);f.itemMouseenter.call(d.get(0),a);a=d.find("input, textarea, select");a.length&&a.focus()},focusInput:function(a){a=e(this).closest(".context-menu-item");var b=a.data(),c=b.contextMenu;b=b.contextMenuRoot;b.$selected=c.$selected=a;b.isInput=c.isInput=!0},blurInput:function(a){a=e(this).closest(".context-menu-item").data();a.contextMenuRoot.isInput=a.contextMenu.isInput=!1},menuMouseenter:function(a){e(this).data().contextMenuRoot.hovering=!0},menuMouseleave:function(a){var b=e(this).data().contextMenuRoot;
b.$layer&&b.$layer.is(a.relatedTarget)&&(b.hovering=!1)},itemMouseenter:function(a){var b=e(this),c=b.data(),d=c.contextMenu;c=c.contextMenuRoot;c.hovering=!0;a&&c.$layer&&c.$layer.is(a.relatedTarget)&&(a.preventDefault(),a.stopImmediatePropagation());(d.$menu?d:c).$menu.children(".hover").trigger("contextmenu:blur");b.hasClass("disabled")||b.hasClass("not-selectable")?d.$selected=null:b.trigger("contextmenu:focus")},itemMouseleave:function(a){var b=e(this),c=b.data(),d=c.contextMenu;c=c.contextMenuRoot;
c!==d&&c.$layer&&c.$layer.is(a.relatedTarget)?(c.$selected&&c.$selected.trigger("contextmenu:blur"),a.preventDefault(),a.stopImmediatePropagation(),c.$selected=d.$selected=d.$node):b.trigger("contextmenu:blur")},itemClick:function(a){var b=e(this),c=b.data(),d=c.contextMenuRoot,f=c.contextMenuKey;if(c.contextMenu.items[f]&&!b.is(".disabled, .context-menu-submenu, .context-menu-separator, .not-selectable")){a.preventDefault();a.stopImmediatePropagation();if(e.isFunction(d.callbacks[f])&&Object.prototype.hasOwnProperty.call(d.callbacks,
f))a=d.callbacks[f];else if(e.isFunction(d.callback))a=d.callback;else return;!1!==a.call(d.$trigger,f,d)?d.$menu.trigger("contextmenu:hide"):d.$menu.parent().length&&n.update.call(d.$trigger,d)}},inputClick:function(a){a.stopImmediatePropagation()},hideMenu:function(a,b){a=e(this).data("contextMenuRoot");n.hide.call(a.$trigger,a,b&&b.force)},focusItem:function(a){a.stopPropagation();a=e(this);var b=a.data(),c=b.contextMenu;b=b.contextMenuRoot;a.addClass("hover").siblings(".hover").trigger("contextmenu:blur");
c.$selected=b.$selected=a;c.$node&&b.positionSubmenu.call(c.$node,c.$menu)},blurItem:function(a){a.stopPropagation();a=e(this);var b=a.data().contextMenu;a.removeClass("hover");b.$selected=null}},n={show:function(a,b,c){var d=e(this),g={};e("#context-menu-layer").trigger("mousedown");a.$trigger=d;if(!1===a.events.show.call(d,a))l=null;else if(n.update.call(d,a),a.position.call(d,a,b,c),a.zIndex&&(g.zIndex=G(d)+a.zIndex),n.layer.call(a.$menu,a,g.zIndex),a.$menu.find("ul").css("zIndex",g.zIndex+1),
a.$menu.css(g)[a.animation.show](a.animation.duration,function(){d.trigger("contextmenu:visible")}),d.data("contextMenu",a).addClass("context-menu-active"),e(document).off("keydown.contextMenu").on("keydown.contextMenu",f.key),a.autoHide)e(document).on("mousemove.contextMenuAutoHide",function(b){var c=d.offset();c.right=c.left+d.outerWidth();c.bottom=c.top+d.outerHeight();!a.$layer||a.hovering||b.pageX>=c.left&&b.pageX<=c.right&&b.pageY>=c.top&&b.pageY<=c.bottom||a.$menu.trigger("contextmenu:hide")})},
hide:function(a,b){var c=e(this);a||(a=c.data("contextMenu")||{});if(b||!a.events||!1!==a.events.hide.call(c,a)){c.removeData("contextMenu").removeClass("context-menu-active");if(a.$layer){setTimeout(function(a){return function(){a.remove()}}(a.$layer),10);try{delete a.$layer}catch(d){a.$layer=null}}l=null;a.$menu.find(".hover").trigger("contextmenu:blur");a.$selected=null;e(document).off(".contextMenuAutoHide").off("keydown.contextMenu");a.$menu&&a.$menu[a.animation.hide](a.animation.duration,function(){a.build&&
(a.$menu.remove(),e.each(a,function(b,c){switch(b){case "ns":case "selector":case "build":case "trigger":return!0;default:a[b]=p;try{delete a[b]}catch(h){}return!0}}));setTimeout(function(){c.trigger("contextmenu:hidden")},10)})}},create:function(a,b){b===p&&(b=a);a.$menu=e('<ul class="context-menu-list"></ul>').addClass(a.className||"").data({contextMenu:a,contextMenuRoot:b});e.each(["callbacks","commands","inputs"],function(c,d){a[d]={};b[d]||(b[d]={})});b.accesskeys||(b.accesskeys={});e.each(a.items,
function(c,d){var g=e('<li class="context-menu-item"></li>').addClass(d.className||""),h=null,k=null;g.on("click",e.noop);d.$node=g.data({contextMenu:a,contextMenuRoot:b,contextMenuKey:c});if(d.accesskey)for(var l=E(d.accesskey),m=0,v;v=l[m];m++)if(!b.accesskeys[v]){b.accesskeys[v]=d;d._name=d.name.replace(new RegExp("("+v+")","i"),'<span class="context-menu-accesskey">$1</span>');break}if("string"==typeof d)g.addClass("context-menu-separator not-selectable");else if(d.type&&y[d.type])y[d.type].call(g,
d,a,b),e.each([a,b],function(a,b){b.commands[c]=d;e.isFunction(d.callback)&&(b.callbacks[c]=d.callback)});else{"html"==d.type?g.addClass("context-menu-html not-selectable"):d.type?(h=e("<label></label>").appendTo(g),e("<span></span>").html(d._name||d.name).appendTo(h),g.addClass("context-menu-input"),a.hasTypes=!0,e.each([a,b],function(a,b){b.commands[c]=d;b.inputs[c]=d})):d.items&&(d.type="sub");switch(d.type){case "text":k=e('<input type="text" value="1" name="" value="">').attr("name","context-menu-input-"+
c).val(d.value||"").appendTo(h);break;case "textarea":k=e('<textarea name=""></textarea>').attr("name","context-menu-input-"+c).val(d.value||"").appendTo(h);d.height&&k.height(d.height);break;case "checkbox":k=e('<input type="checkbox" value="1" name="" value="">').attr("name","context-menu-input-"+c).val(d.value||"").prop("checked",!!d.selected).prependTo(h);break;case "radio":k=e('<input type="radio" value="1" name="" value="">').attr("name","context-menu-input-"+d.radio).val(d.value||"").prop("checked",
!!d.selected).prependTo(h);break;case "select":k=e('<select name="">').attr("name","context-menu-input-"+c).appendTo(h);d.options&&(e.each(d.options,function(a,b){e("<option></option>").val(a).text(b).appendTo(k)}),k.val(d.selected));break;case "sub":e("<span></span>").html(d._name||d.name).appendTo(g);d.appendTo=d.$node;n.create(d,b);g.data("contextMenu",d).addClass("context-menu-submenu");d.callback=null;break;case "html":e(d.html).appendTo(g);break;default:e.each([a,b],function(a,b){b.commands[c]=
d;e.isFunction(d.callback)&&(b.callbacks[c]=d.callback)}),e("<span></span>").html(d._name||d.name||"").appendTo(g)}if(d.type&&"sub"!=d.type&&"html"!=d.type&&(k.on("focus",f.focusInput).on("blur",f.blurInput),d.events))k.on(d.events,a);d.icon&&g.addClass("icon icon-"+d.icon)}d.$input=k;d.$label=h;g.appendTo(a.$menu);if(!a.hasTypes&&e.support.eventSelectstart)g.on("selectstart.disableTextSelect",f.abortevent)});a.$node||a.$menu.css("display","none").addClass("context-menu-root");a.$menu.appendTo(a.appendTo||
document.body)},resize:function(a,b){a.css({position:"absolute",display:"block"});a.data("width",Math.ceil(a.width())+1);a.css({position:"static",minWidth:"0px",maxWidth:"100000px"});a.find("> li > ul").each(function(){n.resize(e(this),!0)});b||a.find("ul").andSelf().css({position:"",display:"",minWidth:"",maxWidth:""}).width(function(){return e(this).data("width")})},update:function(a,b){var c=this;b===p&&(b=a,n.resize(a.$menu));a.$menu.children().each(function(){var d=e(this),f=d.data("contextMenuKey"),
h=a.items[f];f=e.isFunction(h.disabled)&&h.disabled.call(c,f,b)||!0===h.disabled;d[f?"addClass":"removeClass"]("disabled");if(h.type)switch(d.find("input, select, textarea").prop("disabled",f),h.type){case "text":case "textarea":h.$input.val(h.value||"");break;case "checkbox":case "radio":h.$input.val(h.value||"").prop("checked",!!h.selected);break;case "select":h.$input.val(h.selected||"")}h.$menu&&n.update.call(c,h,b)})},layer:function(a,b){a=a.$layer=e('<div id="context-menu-layer" style="position:fixed; z-index:'+
b+'; top:0; left:0; opacity: 0; filter: alpha(opacity=0); background-color: #000;"></div>').css({height:q.height(),width:q.width(),display:"block"}).data("contextMenuRoot",a).insertBefore(this).on("contextmenu",f.abortevent).on("mousedown",f.layerClick);e.support.fixedPosition||a.css({position:"absolute",height:e(document).height()});return a}};e.fn.contextMenu=function(a){a===p?this.first().trigger("contextmenu"):a.x&&a.y?this.first().trigger(e.Event("contextmenu",{pageX:a.x,pageY:a.y})):"hide"===
a?(a=this.data("contextMenu").$menu)&&a.trigger("contextmenu:hide"):"destroy"===a?e.contextMenu("destroy",{context:this}):e.isPlainObject(a)?(a.context=this,e.contextMenu("create",a)):a?this.removeClass("context-menu-disabled"):a||this.addClass("context-menu-disabled");return this};e.contextMenu=function(a,b){"string"!=typeof a&&(b=a,a="create");"string"==typeof b?b={selector:b}:b===p&&(b={});var c=e.extend(!0,{},z,b||{}),d=e(document),g=d,h=!1;c.context&&c.context.length?(g=e(c.context).first(),
c.context=g.get(0),h=c.context!==document):c.context=document;switch(a){case "create":if(!c.selector)throw Error("No selector specified");if(c.selector.match(/.context-menu-(list|item|input)($|\s)/))throw Error('Cannot bind to selector "'+c.selector+'" as it contains a reserved className');if(!c.build&&(!c.items||e.isEmptyObject(c.items)))throw Error("No Items specified");x++;c.ns=".contextMenu"+x;h||(r[c.selector]=c.ns);m[c.ns]=c;c.trigger||(c.trigger="right");w||(d.on({"contextmenu:hide.contextMenu":f.hideMenu,
"prevcommand.contextMenu":f.prevItem,"nextcommand.contextMenu":f.nextItem,"contextmenu.contextMenu":f.abortevent,"mouseenter.contextMenu":f.menuMouseenter,"mouseleave.contextMenu":f.menuMouseleave},".context-menu-list").on("mouseup.contextMenu",".context-menu-input",f.inputClick).on({"mouseup.contextMenu":f.itemClick,"contextmenu:focus.contextMenu":f.focusItem,"contextmenu:blur.contextMenu":f.blurItem,"contextmenu.contextMenu":f.abortevent,"mouseenter.contextMenu":f.itemMouseenter,"mouseleave.contextMenu":f.itemMouseleave},
".context-menu-item"),w=!0);g.on("contextmenu"+c.ns,c.selector,c,f.contextmenu);if(h)g.on("remove"+c.ns,function(){e(this).contextMenu("destroy")});switch(c.trigger){case "hover":g.on("mouseenter"+c.ns,c.selector,c,f.mouseenter).on("mouseleave"+c.ns,c.selector,c,f.mouseleave);break;case "left":g.on("click"+c.ns,c.selector,c,f.click)}c.build||n.create(c);break;case "destroy":if(h){var k=c.context;e.each(m,function(a,b){if(b.context!==k)return!0;l=e(".context-menu-list").filter(":visible");l.length&&
l.data().contextMenuRoot.$trigger.is(e(b.context).find(b.selector))&&l.trigger("contextmenu:hide",{force:!0});try{m[b.ns].$menu&&m[b.ns].$menu.remove(),delete m[b.ns]}catch(I){m[b.ns]=null}e(b.context).off(b.ns);return!0})}else if(!c.selector)d.off(".contextMenu .contextMenuAutoHide"),e.each(m,function(b,a){e(a.context).off(a.ns)}),r={},m={},x=0,w=!1,e("#context-menu-layer, .context-menu-list").remove();else if(r[c.selector]){var l=e(".context-menu-list").filter(":visible");l.length&&l.data().contextMenuRoot.$trigger.is(c.selector)&&
l.trigger("contextmenu:hide",{force:!0});try{m[r[c.selector]].$menu&&m[r[c.selector]].$menu.remove(),delete m[r[c.selector]]}catch(H){m[r[c.selector]]=null}d.off(r[c.selector])}break;case "html5":(!e.support.htmlCommand&&!e.support.htmlMenuitem||"boolean"==typeof b&&b)&&e('menu[type="context"]').each(function(){this.id&&e.contextMenu({selector:"[contextmenu="+this.id+"]",items:e.contextMenu.fromMenu(this)})}).css("display","none");break;default:throw Error('Unknown operation "'+a+'"');}return this};
e.contextMenu.setInputValues=function(a,b){b===p&&(b={});e.each(a.inputs,function(a,d){switch(d.type){case "text":case "textarea":d.value=b[a]||"";break;case "checkbox":d.selected=b[a]?!0:!1;break;case "radio":d.selected=(b[d.radio]||"")==d.value?!0:!1;break;case "select":d.selected=b[a]||""}})};e.contextMenu.getInputValues=function(a,b){b===p&&(b={});e.each(a.inputs,function(a,d){switch(d.type){case "text":case "textarea":case "select":b[a]=d.$input.val();break;case "checkbox":b[a]=d.$input.prop("checked");
break;case "radio":d.$input.prop("checked")&&(b[d.radio]=d.value)}});return b};e.contextMenu.fromMenu=function(a){a=e(a);var b={};C(b,a.children());return b};e.contextMenu.defaults=z;e.contextMenu.types=y;e.contextMenu.handle=f;e.contextMenu.op=n;e.contextMenu.menus=m;"undefined"!==typeof define&&define.amd&&define("contextMenu")})(jQuery);
