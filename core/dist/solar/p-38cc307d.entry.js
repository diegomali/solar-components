import{r as e,c as a,h as t,H as o,g as r}from"./p-bfc2338d.js";import{P as i}from"./p-bc600a5e.js";import{T as s}from"./p-037d1e9c.js";import{B as c}from"./p-05671e06.js";import"./p-bfa157e3.js";import"./p-2622165a.js";const l="ac-overlay{display:flex;position:fixed;z-index:7;top:0;left:0;width:100%;height:100%}ac-overlay .ac-overlay--layer{position:absolute;top:0;left:0;width:100%;height:100%}ac-overlay.ac-overlay--backdrop-dark .ac-overlay--layer{transition:opacity ease-in-out 0.1s;background-color:rgba(0, 0, 0, 0.5)}ac-overlay.ac-overlay--backdrop-dark.transition--before-enter .ac-overlay--layer{opacity:0}ac-overlay.ac-overlay--backdrop-dark.transition--before-leave .ac-overlay--layer{opacity:0}ac-overlay.ac-overlay--no-layer{pointer-events:none}ac-overlay.ac-overlay--no-layer>*{pointer-events:auto}";var n=undefined&&undefined.__decorate||function(e,a,t,o){var r=arguments.length,i=r<3?a:o===null?o=Object.getOwnPropertyDescriptor(a,t):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,a,t,o);else for(var c=e.length-1;c>=0;c--)if(s=e[c])i=(r<3?s(i):r>3?s(a,t,i):s(a,t))||i;return r>3&&i&&Object.defineProperty(a,t,i),i};const y=class{constructor(t){e(this,t);this.backDropClick=a(this,"backDropClick",7);this.portalBehavior=new i(this);this.transitionBehavior=new s(this);this.vchildren=undefined;this.backdrop="dark";this.noLayer=undefined;this.position="center center";this.disableClose=undefined}componentWillLoad(){}disconnectedCallback(){}async handleBackDropClick(){this.backDropClick.emit()}render(){return t(o,{class:{[`ac-overlay--backdrop-${this.backdrop}`]:!!this.backdrop,"ac-overlay--no-layer":this.noLayer},style:{justifyContent:this.position.split(" ")[0],alignItems:this.position.split(" ")[1]}},!this.noLayer&&t("div",{class:"ac-overlay--layer",onClick:this.handleBackDropClick}),t("slot",null))}get host(){return r(this)}};n([c],y.prototype,"handleBackDropClick",null);y.style=l;export{y as ac_overlay};
//# sourceMappingURL=p-38cc307d.entry.js.map