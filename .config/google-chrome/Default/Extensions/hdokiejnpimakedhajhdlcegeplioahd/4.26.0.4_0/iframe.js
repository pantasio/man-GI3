bg=parent.bg,LPPlatform=parent.LPPlatform,goTo=function(e,t){if(0===e.indexOf(bg.get("base_url"))){var a=document.createElement("iframe");a.src=e,document.body.appendChild(a),LPPlatform.addEventListener(a,"load",function(){a.setAttribute("class","loaded"),t&&t()})}},LPPlatform.addEventListener(window,"message",function(e){0===(e.origin+"/").indexOf(bg.get("base_url"))&&processAcctsIframeMessage(e)});
//# sourceMappingURL=sourcemaps/iframe.js.map