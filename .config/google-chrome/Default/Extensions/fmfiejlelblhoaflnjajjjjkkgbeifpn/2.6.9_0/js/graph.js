var graph=function(){var r,g,m,u,d,h,k,c,v=function(b){var a=g[0].values,d=g[1].values,p=a.length;if(0===p){var f=parseInt(Date.now()/1E3)-r;a.push({time:f,pos:0});d.push({time:f,pos:0})}var l=0;p>m&&(l=p-m);f=a.slice(-1)[0].time;for(var h=f-m,n=0,e,k=0,c;c=g[k];k++){for(var t=l,q;q=c.values[t];t++)q.time<h?e=t:n<q.pos&&(n=q.pos);void 0!==e&&c.values[e].pos>n&&(n=c.values[e].pos)}void 0===e&&l>m&&(e=l);l=!1;void 0!==e&&(b||p>2*m)&&(a.splice(0,e),d.splice(0,e),l=1);return{x:[h,f],y:[0,n],trim:l}},
w=function(){var b=v();h.domain(b.y);d.domain(b.x);b.trim&&c.selectAll("path").attr("d",function(a){return k(a.values.slice(0,-1))});c.selectAll("path").transition().ease("quad").attr("d",function(a){return k(a.values)})},x=function(){var b=v(1);d.domain(b.x);h.domain(b.y);c.selectAll(".city").data(g).enter().append("g").attr("class","city").append("path").attr("class","line").attr("d",function(a){return k(a.values)}).style("stroke",function(a){return"download"===a.name?"#3687ED":"#41B541"});u=1},
y=function(){var b=document.querySelector("li.graph").clientWidth;m=parseInt(b/10);d=d3.time.scale().range([0,b]);h=d3.scale.linear().range([30,0]);k=d3.svg.line().interpolate("basis").x(function(a){return d(a.time)}).y(function(a){return h(a.pos)});c=d3.select("li.graph").append("svg").attr({width:b,height:30}).append("g");x()};mono.sendMessage({action:"getTraffic"},function(b){r=b.startTime;g=b.trafficList;y();"undefined"!==typeof define&&define.amd&&define("graph")});return{move:function(b,a){if(1===
u){var c=g[0].values,d=g[1].values,f=parseInt(Date.now()/1E3)-r;c.push({time:f,pos:b});d.push({time:f,pos:a});w()}}}}();
