var utils={create:function(a,b){var c;a="object"!==typeof a?document.createElement(a):a;for(var e in b){var d=b[e];(c=utils.create.hook[e])?c(a,d):a[e]=d}return a}};
utils.create.hook={text:function(a,b){a.textContent=b},data:function(a,b){for(var c in b)a.dataset[c]=b[c]},class:function(a,b){if(Array.isArray(b))for(var c=0,e=b.length;c<e;c++)a.classList.add(b[c]);else a.setAttribute("class",b)},style:function(a,b){if("object"===typeof b)for(var c in b){var e=c;"float"===e&&(e="cssFloat");var d=b[c];if(Array.isArray(d))for(var f=0,g=d.length;f<g;f++)a.style[e]=d[f];else a.style[e]=d}else a.setAttribute("style",b)},append:function(a,b){Array.isArray(b)||(b=[b]);
for(var c=0,e=b.length;c<e;c++){var d=b[c];if(d||0===d)"object"!==typeof d&&(d=document.createTextNode(d)),a.appendChild(d)}},on:function(a,b){"object"!==typeof b[0]&&(b=[b]);for(var c=0,e=b.length;c<e;c++){var d=b[c];Array.isArray(d)&&a.addEventListener(d[0],d[1],d[2])}},onCreate:function(a,b){b.call(a,a)}};utils.debounce=function(a,b){var c=null;return function(){var e=this,d=arguments;clearTimeout(c);c=setTimeout(function(){a.apply(e,d)},b)}};
utils.isVisibleElement=function(a){return 0<a.offsetWidth&&0<a.offsetHeight};utils.base64ToUrl=function(a,b){b=b||"";a=atob(a);for(var c=a.length,e=Array(Math.ceil(c/256)),d=0,f=0;f<c;f+=256){for(var g=a.slice(f,f+256),k=g.length,l=Array(k),h=0;h<k;h++)l[h]=g.charCodeAt(h)&255;e[d]=new Uint8Array(l);d++}b=new Blob(e,{type:b});return URL.createObjectURL(b)};utils.cloneObj=function(a){return JSON.parse(JSON.stringify({w:a})).w};
utils.joinMessages=function(a){return Promise.all(a.map(function(b){return(new Promise(function(a){mono.sendMessage(b,a)})).then(function(a){var c={};c[b.action]=a;return c})})).then(function(b){var a={};b.forEach(function(b){Object.assign(a,b)});return a})};