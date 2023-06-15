import{r as a,c as r,h as e,H as t,g as n}from"./p-bfc2338d.js";import{h as o,i as c,j as i}from"./p-8fff0704.js";import{T as d}from"./p-037d1e9c.js";import{B as s}from"./p-05671e06.js";import{A as l}from"./p-d7dbca0e.js";import{A as v}from"./p-79cbfcec.js";import{i as w}from"./p-5fa792ab.js";import"./p-2622165a.js";import"./p-bfa157e3.js";import"./p-5d5098fe.js";const h="ac-navdrawer{display:flex;position:relative;flex-direction:column;height:100%;width:260px;transition:width ease-in-out 0.1s;background:var(--color-neutral-contrast, #FFFFFF);box-shadow:0 0 16px rgba(0, 0, 0, 0.08);color:var(--color-neutral-inverted, #111111)}ac-navdrawer .ac-navdrawer__header{display:flex;box-sizing:border-box;align-items:center;justify-content:space-between;width:100%;min-height:64px;padding:0;overflow:hidden;font-weight:bold}ac-navdrawer .ac-navdrawer__header .ac-navdrawer__drop-down-menu{margin:0 8px 0}ac-navdrawer .ac-navdrawer__header .ac-navdrawer__title{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;margin:16px 24px 0}ac-navdrawer .ac-navdrawer__header .ac-navdrawer__title .ac-navdrawer__title-content{height:24px;width:100%;font-size:16px}ac-navdrawer .ac-navdrawer__header .ac-navdrawer__title .ac-navdrawer__close-button{width:32px;height:32px}ac-navdrawer .ac-navdrawer__header .ac-navdrawer__title .ac-navdrawer__close-button .ac-button__native{min-height:100%;min-width:100%;height:100%;width:100%}ac-navdrawer .ac-navdrawer__content{display:flex;box-sizing:border-box;justify-content:center;height:100%;max-height:100%;overflow-x:hidden;overflow-y:auto}ac-navdrawer .ac-navdrawer__toggle-button{display:flex;position:absolute;z-index:2;top:28px;left:calc(100% - 4px);align-items:center;justify-content:center;cursor:pointer}ac-navdrawer .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-bg{position:absolute;width:24px;height:24px;stroke-width:50px;stroke:var(--color-neutral-lighter, #F5F5F5)}ac-navdrawer .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-icon{z-index:1}@media (max-width: 768px){ac-navdrawer .ac-navdrawer__toggle-button{display:none}}ac-navdrawer.ac-navdrawer--over{transition:transform ease-in-out 0.1s}ac-navdrawer.ac-navdrawer--over .ac-navdrawer__header{align-items:baseline}ac-navdrawer.ac-navdrawer--over .ac-navdrawer__drop-down-menu{margin-top:8px !important}ac-navdrawer.transition--before-enter,ac-navdrawer.transition--before-leave{transform:translate(300px)}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){ac-navdrawer .ac-navdrawer__toggle-button{left:calc(100% - 10px)}ac-navdrawer .ac-navdrawer__toggle-button-icon{position:absolute;top:6px;left:6px;height:12px}ac-navdrawer.transition--before-enter,ac-navdrawer.transition--before-leave{transform:none !important}}ac-navdrawer.ac-navdrawer--compact{width:64px;border-radius:0}ac-navdrawer.ac-navdrawer--primary{--color-theme-contrast:var(--color-primary-contrast, #FFFFFF);--color-theme-contrast-rgb:var(--color-primary-contrast-rgb,\n    255, 255, 255);background:var(--color-primary-dark, #00263c);color:var(--color-primary-contrast, #FFFFFF)}ac-navdrawer.ac-navdrawer--primary .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-bg{fill:var(--color-primary-dark, #00263c)}ac-navdrawer.ac-navdrawer--primary .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-icon{fill:var(--color-primary-contrast, #FFFFFF)}ac-navdrawer.ac-navdrawer--secondary{--color-theme-contrast:var(--color-secondary-contrast, #FFFFFF);--color-theme-contrast-rgb:var(--color-secondary-contrast-rgb,\n    255, 255, 255);background:var(--color-secondary-dark, #bd0008);color:var(--color-secondary-contrast, #FFFFFF)}ac-navdrawer.ac-navdrawer--secondary .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-bg{fill:var(--color-secondary-dark, #bd0008)}ac-navdrawer.ac-navdrawer--secondary .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-icon{fill:var(--color-secondary-contrast, #FFFFFF)}ac-navdrawer .ac-navdrawer__content::-webkit-scrollbar{width:8px;height:8px}ac-navdrawer .ac-navdrawer__content::-webkit-scrollbar-track{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.2)}ac-navdrawer .ac-navdrawer__content::-webkit-scrollbar-thumb{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.3)}ac-navdrawer .ac-navdrawer__content::-webkit-scrollbar-thumb:hover{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.4)}";var p=undefined&&undefined.__decorate||function(a,r,e,t){var n=arguments.length,o=n<3?r:t===null?t=Object.getOwnPropertyDescriptor(r,e):t,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(a,r,e,t);else for(var i=a.length-1;i>=0;i--)if(c=a[i])o=(n<3?c(o):n>3?c(r,e,o):c(r,e))||o;return n>3&&o&&Object.defineProperty(r,e,o),o};const _=class{constructor(e){a(this,e);this.closeEv=r(this,"close",7);this.transitionBehavior=new d(this);this.showToggle=true;this.title=undefined;this.theme=undefined;this.mode="push";this.compact=undefined;this.options=undefined}compactDidUpdate(){for(const a of this.childMenus){a.iconOnly=this.compact}}componentDidLoad(){this.loadItemsFromHTML()}componentWillLoad(){}disconnectedCallback(){this.closeEv.emit()}loadItemsFromHTML(){this.childMenus=Array.from(this.host.querySelectorAll("ac-menu"))}toggleMode(){this.compact=!this.compact}close(){this.host.remove()}renderHeader(){if(this.options){return e("ac-drop-down-menu",{compact:this.compact,options:this.options,class:"ac-navdrawer__drop-down-menu"})}else if(!w(this.title)){return e("div",{class:"ac-navdrawer__title"},e("span",{class:"ac-navdrawer__title-content"},this.title),e("ac-button",{class:"ac-navdrawer__close-button",fill:"clear",theme:"primary",shape:"round","icon-only":true,onClick:this.close},e(l,{icon:o,size:14})))}else{return e("slot",{name:"header"})}}render(){return e(t,{class:{[`ac-navdrawer--${this.theme}`]:!!this.theme,"ac-navdrawer--compact":this.compact,"ac-navdrawer--over":this.mode==="over"}},e("div",{class:"ac-navdrawer__header"},this.renderHeader()),e("nav",{class:"ac-navdrawer__content"},e("slot",{name:"content"})),this.showToggle&&e("div",{class:"ac-navdrawer__toggle-button",onClick:this.toggleMode},e(v,{class:"ac-navdrawer__toggle-button-bg"}),e(l,{class:"ac-navdrawer__toggle-button-icon",icon:this.compact?c:i,size:12})))}get host(){return n(this)}static get watchers(){return{compact:["compactDidUpdate"]}}};p([s],_.prototype,"toggleMode",null);p([s],_.prototype,"close",null);_.style=h;export{_ as ac_navdrawer};
//# sourceMappingURL=p-22e8b1af.entry.js.map