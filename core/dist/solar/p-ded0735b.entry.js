import{r as e,c as a,h as s,H as t,g as c}from"./p-bfc2338d.js";import{a as l,b as o}from"./p-8fff0704.js";import{B as n}from"./p-05671e06.js";import{A as i}from"./p-d7dbca0e.js";function r(){const e=a=>{e.nativeElement=a};return e}const p="ac-collapse .ac-collapse__header{display:flex;align-items:center;justify-content:space-between;min-width:100%}ac-collapse .ac-collapse__header .ac-collapse__header-wrapper{padding:0 24px}ac-collapse .ac-collapse__header .ac-collapse__toggle-button{margin:4px}ac-collapse .ac-collapse__content{overflow:hidden;transition:height ease-in-out 0.25s}";var d=undefined&&undefined.__decorate||function(e,a,s,t){var c=arguments.length,l=c<3?a:t===null?t=Object.getOwnPropertyDescriptor(a,s):t,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,a,s,t);else for(var n=e.length-1;n>=0;n--)if(o=e[n])l=(c<3?o(l):c>3?o(a,s,l):o(a,s))||l;return c>3&&l&&Object.defineProperty(a,s,l),l};const h=class{constructor(s){e(this,s);this.toggle=a(this,"toggle",7);this.collapseContent=r();this.expanded=undefined}async handleToggle(){this.expanded=!this.expanded;this.toggle.emit({expanded:this.expanded})}render(){const e=this.expanded?l:o;const a=(this.expanded?this.collapseContent.nativeElement.children[0].clientHeight:0)+"px";return s(t,{class:{"ac-collapse--expanded":this.expanded}},s("ac-card",{class:"ac-collapse__card"},s("div",{class:"ac-collapse__header"},s("div",{class:"ac-collapse__header-wrapper"},s("slot",{name:"header"})),s("ac-button",{class:"ac-collapse__toggle-button",shape:"round",fill:"clear",theme:"primary",onClick:this.handleToggle,"icon-only":true},s(i,{icon:e}))),s("div",{class:"ac-collapse__content",ref:this.collapseContent,style:{height:a}},s("slot",{name:"content"}))))}get host(){return c(this)}};d([n],h.prototype,"handleToggle",null);h.style=p;export{h as ac_collapse};
//# sourceMappingURL=p-ded0735b.entry.js.map