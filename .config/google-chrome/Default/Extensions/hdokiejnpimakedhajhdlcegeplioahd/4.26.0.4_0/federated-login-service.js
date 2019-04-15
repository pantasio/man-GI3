var FederatedLoginService=function(){var e=this;e.isFederated=function(e,t,n){r(e,function(e){t(e.type>0)},n)},e._handleError=function(e,t){e&&e(t?t.toString():""),t&&setTimeout(function(){throw t},0)},e._getAuthInfo=function(t,a,o,i){r(t,function(t){e._ajax({type:"GET",dataType:"json",url:t.IdentityProviderURL+"/auth/saml2/getauthinfo/"+a,success:o,error:n(i)})},i)},e._initiate=function(t,n,o){r(t,function(r){switch(r.type){case 2:a(t,r,function(e){n(r,e)},o);break;case 1:n(r);break;default:e._handleError(o,new Error("User is not provisioned for federated login"))}},o)},e._decryptK1WithPrivateKey=function(e,t){return t.decrypt(e,"RSA-OAEP",{md:forge.md.sha384.create()})},e._assemblePassword=function(t,r,a,u,c){var s=atob(a.k1),l=atob(a.k2);r&&(s=e._decryptK1WithPrivateKey(s,r.privateKey));var y=i(s,l);e._ajax({type:"POST",dataType:"json",contentType:"application/json",url:"lmiapi/login/getLocalKeyPart",data:{username:t,keyHash:o(y),authSessionId:a.authSessionId},success:function(t){t&&t.localKey?u(o(i(y,atob(t.localKey)))):e._handleError(c,new Error("Could not retrieve local key"))},error:n(c)})},e._keypairSaved=function(){};var t,r=(t={},function(r,a,o){t[r]?a(t[r]):e._ajax({type:"GET",dataType:"json",url:"lmiapi/login/type",data:{username:r},success:function(n){n?(t[r]=n,a(n)):e._handleError(o,new Error("Could not retrieve login data: "+n))},error:n(o)})}),n=function(t){return function(r,n,a){e._handleError(t,new Error(a))}},a=function(t,r,a,o){var i;i=function(i,u){i?o(i):e._ajax({type:"POST",dataType:"json",contentType:"application/json",url:"lmiapi/federatedPublicKey/savePublicKey",data:{email:t,publickey:c(u).publicKey},success:function(){e._keypairSaved(u,r),a(u)},error:n(o)})},forge.rsa.generateKeyPair({bits:2048,workers:2},function(e,t){i(e,t)})},o=function(e){var t=forge.md.sha256.create();return t.update(e),btoa(t.digest().bytes())},i=function(e,t){var r=e.length<t.length?e.length:t.length;return forge.util.xorBytes(e,t,r)},u=function(e){return btoa(forge.asn1.toDer(e).getBytes())},c=function(e){return e?{privateKey:u(forge.pki.privateKeyToAsn1(e.privateKey)),publicKey:u(forge.pki.publicKeyToAsn1(e.publicKey))}:e}};
//# sourceMappingURL=sourcemaps/federated-login-service.js.map