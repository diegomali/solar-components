function e(e){const n=e.startsWith(".")?"0"+e:e;if(n.endsWith("ms")){return parseInt(n)}else{return parseFloat(n)*1e3}}function n(n){const t=window.getComputedStyle(n).transition.match(/\.?\d[ms]/g);if(!t){return new Promise((e=>e({element:n,duration:0})))}let r=0;t.forEach((n=>{const t=e(n);r=r<t?t:r}));return new Promise((e=>e({element:n,duration:r})))}function t(e){return({element:n,duration:t})=>{Object.assign(n.style,e);return new Promise((e=>e({element:n,duration:t})))}}function r(e=0){return({element:n,duration:t})=>new Promise((r=>setTimeout((()=>r({element:n,duration:t})),t+e)))}export{n as a,t as b,r as w};
//# sourceMappingURL=p-2622165a.js.map