import{r as e,h as t,H as o,g as a}from"./p-bfc2338d.js";import{F as l}from"./p-09dd3509.js";import{B as c}from"./p-05671e06.js";import"./p-fe5b2c7a.js";import"./p-112455b1.js";import"./p-bfa157e3.js";const g='ac-toggle{display:inline-block}ac-toggle .ac-toggle__container{display:flex;align-items:center}ac-toggle .ac-toggle__container .ac-toggle__label{margin:0;padding:0 0 0 8px;color:var(--color-neutral-darker, #646464);font-size:16px;line-height:1;cursor:pointer;user-select:none}ac-toggle .ac-toggle__native{display:none}ac-toggle .ac-toggle__custom{display:flex;position:relative;align-items:center;min-width:40px;max-width:40px;height:20px;transition:ease-in-out 0.05s;border-radius:10px;background-color:var(--color-neutral-light, #E6E6E6);cursor:pointer}ac-toggle .ac-toggle__custom:before{content:"";position:absolute;width:12px;height:12px;margin:0 4px;transition:ease-in-out 0.05s;border-radius:100%;background-color:var(--color-neutral-contrast, #FFFFFF)}ac-toggle .ac-toggle__native:checked+.ac-toggle__custom{background-color:var(--color-primary-normal, #00466F)}ac-toggle .ac-toggle__native:checked+.ac-toggle__custom:before{transform:translateX(20px)}ac-toggle .ac-toggle__native:checked+.ac-toggle__custom+.ac-toggle__label{color:var(--color-primary-normal, #00466F)}ac-toggle.ac-toggle--disabled{cursor:not-allowed}ac-toggle.ac-toggle--disabled .ac-toggle__container{pointer-events:none}ac-toggle.ac-toggle--disabled .ac-toggle__label{color:var(--color-neutral-normal, #C8C8C8)}ac-toggle.ac-toggle--disabled .ac-toggle__custom{border-color:var(--color-neutral-light, #E6E6E6);background:var(--color-neutral-lighter, #F5F5F5)}ac-toggle.ac-toggle--disabled .ac-toggle__native:checked+.ac-toggle__custom{border-color:var(--color-neutral-normal, #C8C8C8);background:var(--color-neutral-normal, #C8C8C8)}ac-toggle.ac-toggle--disabled .ac-toggle__native:checked+.ac-toggle__custom+.ac-toggle__label{color:var(--color-neutral-dark, #A0A0A0)}ac-toggle.ac-toggle--label-left .ac-toggle__container{flex-direction:row-reverse}ac-toggle.ac-toggle--label-left .ac-toggle__label{padding-right:8px}ac-toggle.ac-toggle--label-left .ac-toggle__helper-text{padding-right:24px;padding-left:0;text-align:right}';var r=undefined&&undefined.__decorate||function(e,t,o,a){var l=arguments.length,c=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,g;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")c=Reflect.decorate(e,t,o,a);else for(var r=e.length-1;r>=0;r--)if(g=e[r])c=(l<3?g(c):l>3?g(t,o,c):g(t,o))||c;return l>3&&c&&Object.defineProperty(t,o,c),c};const i=class{constructor(t){e(this,t);this.formFieldBehavior=new l(this);this.label=undefined;this.name=undefined;this.error=undefined;this.direction="right";this.validity=undefined;this.checked=false;this.validator=undefined;this.value=undefined;this.disabled=undefined;this.required=undefined}handleChange(){this.checked=!this.checked}componentDidLoad(){}disconnectedCallback(){}componentWillLoad(){}async getFormFieldBehavior(){return this.formFieldBehavior}render(){return t(o,{class:{[`ac-toggle--label-${this.direction}`]:this.direction!==undefined,"ac-toggle--disabled":this.disabled}},t("label",{class:"ac-toggle__container"},t("input",{ref:e=>this.nativeInput=e,class:"ac-toggle__native",type:"checkbox",name:this.name,value:this.value,disabled:this.disabled,onChange:this.handleChange,checked:this.checked}),t("div",{class:"ac-toggle__custom"}),this.label&&t("div",{class:"ac-toggle__label"},this.label)))}get host(){return a(this)}};r([c],i.prototype,"handleChange",null);i.style=g;export{i as ac_toggle};
//# sourceMappingURL=p-e4515d88.entry.js.map