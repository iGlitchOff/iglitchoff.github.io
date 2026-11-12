(function(){
var T=Date.parse("2026-11-21T17:30:00-05:00"),cd=document.getElementById("cd");
function tick(){if(!cd)return;var s=Math.floor((T-Date.now())/1e3);
if(s<=0){cd.innerHTML="El face reveal ya pasó. Los clips están en YouTube.";return}
var v=[[Math.floor(s/86400),"días"],[Math.floor(s%86400/3600),"horas"],[Math.floor(s%3600/60),"min"],[s%60,"seg"]];
cd.innerHTML=v.map(function(x){return"<div>"+x[0]+"<small>"+x[1]+"</small></div>"}).join("");setTimeout(tick,1e3)}
tick();
function ap(n){var st=n<1000?50:n<10000?100:1000;return"~"+(Math.round(n/st)*st).toLocaleString("es-CO")}
var f=document.getElementById("sf"),m=document.getElementById("sm");
if(m){m.textContent=Math.floor((Date.now()-Date.parse("2024-12-12"))/2629800000)}
if(f){fetch("/stats.json").then(function(r){return r.json()}).then(function(d){f.textContent=ap(d.followers)}).catch(function(){f.textContent="1.300+"})}
})();
