import{c as e}from"./p-112455b1.js";var n=1e3;var t=n*60;var r=t*60;var s=r*24;var i=s*7;var o=s*365.25;var a=function(e,n){n=n||{};var t=typeof e;if(t==="string"&&e.length>0){return c(e)}else if(t==="number"&&isFinite(e)){return n.long?C(e):u(e)}throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function c(e){e=String(e);if(e.length>100){return}var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!a){return}var c=parseFloat(a[1]);var u=(a[2]||"ms").toLowerCase();switch(u){case"years":case"year":case"yrs":case"yr":case"y":return c*o;case"weeks":case"week":case"w":return c*i;case"days":case"day":case"d":return c*s;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*t;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return undefined}}function u(e){var i=Math.abs(e);if(i>=s){return Math.round(e/s)+"d"}if(i>=r){return Math.round(e/r)+"h"}if(i>=t){return Math.round(e/t)+"m"}if(i>=n){return Math.round(e/n)+"s"}return e+"ms"}function C(e){var i=Math.abs(e);if(i>=s){return f(e,i,s,"day")}if(i>=r){return f(e,i,r,"hour")}if(i>=t){return f(e,i,t,"minute")}if(i>=n){return f(e,i,n,"second")}return e+" ms"}function f(e,n,t,r){var s=n>=t*1.5;return Math.round(e/t)+" "+r+(s?"s":"")}function d(e){t.debug=t;t.default=t;t.coerce=u;t.disable=i;t.enable=s;t.enabled=o;t.humanize=a;t.destroy=C;Object.keys(e).forEach((n=>{t[n]=e[n]}));t.names=[];t.skips=[];t.formatters={};function n(e){let n=0;for(let t=0;t<e.length;t++){n=(n<<5)-n+e.charCodeAt(t);n|=0}return t.colors[Math.abs(n)%t.colors.length]}t.selectColor=n;function t(e){let n;let s=null;let i;let o;function a(...e){if(!a.enabled){return}const r=a;const s=Number(new Date);const i=s-(n||s);r.diff=i;r.prev=n;r.curr=s;n=s;e[0]=t.coerce(e[0]);if(typeof e[0]!=="string"){e.unshift("%O")}let o=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,s)=>{if(n==="%%"){return"%"}o++;const i=t.formatters[s];if(typeof i==="function"){const t=e[o];n=i.call(r,t);e.splice(o,1);o--}return n}));t.formatArgs.call(r,e);const c=r.log||t.log;c.apply(r,e)}a.namespace=e;a.useColors=t.useColors();a.color=t.selectColor(e);a.extend=r;a.destroy=t.destroy;Object.defineProperty(a,"enabled",{enumerable:true,configurable:false,get:()=>{if(s!==null){return s}if(i!==t.namespaces){i=t.namespaces;o=t.enabled(e)}return o},set:e=>{s=e}});if(typeof t.init==="function"){t.init(a)}return a}function r(e,n){const r=t(this.namespace+(typeof n==="undefined"?":":n)+e);r.log=this.log;return r}function s(e){t.save(e);t.namespaces=e;t.names=[];t.skips=[];let n;const r=(typeof e==="string"?e:"").split(/[\s,]+/);const s=r.length;for(n=0;n<s;n++){if(!r[n]){continue}e=r[n].replace(/\*/g,".*?");if(e[0]==="-"){t.skips.push(new RegExp("^"+e.slice(1)+"$"))}else{t.names.push(new RegExp("^"+e+"$"))}}}function i(){const e=[...t.names.map(c),...t.skips.map(c).map((e=>"-"+e))].join(",");t.enable("");return e}function o(e){if(e[e.length-1]==="*"){return true}let n;let r;for(n=0,r=t.skips.length;n<r;n++){if(t.skips[n].test(e)){return false}}for(n=0,r=t.names.length;n<r;n++){if(t.names[n].test(e)){return true}}return false}function c(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}function u(e){if(e instanceof Error){return e.stack||e.message}return e}function C(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}t.enable(t.load());return t}var F=d;var l=e((function(e,n){n.formatArgs=r;n.save=s;n.load=i;n.useColors=t;n.storage=o();n.destroy=(()=>{let e=false;return()=>{if(!e){e=true;console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}}})();n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function t(){if(typeof window!=="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)){return true}if(typeof navigator!=="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)){return false}return typeof document!=="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!=="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!=="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!=="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function r(n){n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff);if(!this.useColors){return}const t="color: "+this.color;n.splice(1,0,t,"color: inherit");let r=0;let s=0;n[0].replace(/%[a-zA-Z%]/g,(e=>{if(e==="%%"){return}r++;if(e==="%c"){s=r}}));n.splice(s,0,t)}n.log=console.debug||console.log||(()=>{});function s(e){try{if(e){n.storage.setItem("debug",e)}else{n.storage.removeItem("debug")}}catch(e){}}function i(){let e;try{e=n.storage.getItem("debug")}catch(e){}if(!e&&typeof process!=="undefined"&&"env"in process){e=process.env.DEBUG}return e}function o(){try{return localStorage}catch(e){}}e.exports=F(n);const{formatters:a}=e.exports;a.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}));export{l as b};
//# sourceMappingURL=p-fe5b2c7a.js.map