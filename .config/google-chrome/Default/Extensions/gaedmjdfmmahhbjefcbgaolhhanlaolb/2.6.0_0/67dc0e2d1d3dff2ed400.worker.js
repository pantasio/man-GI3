!function(e){function s(t){if(r[t])return r[t].exports;var d=r[t]={exports:{},id:t,loaded:!1};return e[t].call(d.exports,d,d.exports,s),d.loaded=!0,d.exports}this.webpackChunk=function(s,r){for(var d in r)e[d]=r[d];for(;s.length;)t[s.pop()]=1};var r={},t={0:1};return s.e=function(e,r){t[e]||importScripts(""+e+".67dc0e2d1d3dff2ed400.worker.js"),r.call(null,s)},s.m=e,s.c=r,s.p="",s(0)}([function(e,s,r){r.e(1,function(e){var s=[e(1),e(11)];(function(e,s){return self.addEventListener("message",function(r){var t,d,n,a;return a=r.data,"password"===a.cmd?self.password=a.password:"apps"===a.cmd?(t=a.apps,n=!1,d=t.map(function(r){var t,d,a;return d=r.encryptedSeed.replace(/[\r\n]/g,""),t=e.decryptAES(r.salt,self.password,d),a=null!=t&&s.isBase32(t),a?{decryptedSeed:t,id:r.id}:(n=!0,null)}),n?self.postMessage({cmd:"decryption-failed",result:{message:"Failed to decrypt apps"}}):self.postMessage({cmd:"decryption-successful",result:d}),self.close()):void 0},!1),self.postMessage({cmd:"ready"})}).apply(null,s)})}]);