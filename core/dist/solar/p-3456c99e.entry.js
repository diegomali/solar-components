import{r as e,c as r,h as t}from"./p-bfc2338d.js";import{m as s}from"./p-8fff0704.js";import{c as p}from"./p-121c2d4b.js";import{A as a}from"./p-d7dbca0e.js";const o='ac-stepper{display:flex}ac-stepper .ac-stepper__step{display:flex;box-sizing:border-box;align-items:center;justify-content:center;width:44px;height:44px;margin-left:44px;border:2px solid var(--color-secondary-normal, #F0000A);border-radius:100%;fill:var(--color-secondary-normal, #F0000A);color:var(--color-secondary-normal, #F0000A);font-weight:bold;user-select:none}ac-stepper .ac-stepper__step:after{content:"";position:absolute;width:44px;height:1px;margin-left:-44px;background:var(--color-secondary-normal, #F0000A)}ac-stepper .ac-stepper__step.ac-stepper__step--active{border-color:var(--color-primary-normal, #00466F);background-color:var(--color-primary-normal, #00466F);fill:var(--color-neutral-contrast, #FFFFFF);color:var(--color-neutral-contrast, #FFFFFF)}ac-stepper .ac-stepper__step.ac-stepper__step--active:after{height:2px;background:var(--color-primary-normal, #00466F)}ac-stepper .ac-stepper__step:first-of-type{margin-left:0}ac-stepper .ac-stepper__step:first-of-type:after{display:none}';const c=class{constructor(t){e(this,t);this.stepperChange=r(this,"stepperChange",7);this.steps=undefined;this.done=undefined}async next(){if(this.done<this.steps){this.done++;this.stepperChange.emit({index:this.done})}}async previous(){if(this.done>0){this.done--;this.stepperChange.emit({index:this.done})}}render(){return[...p(this.steps).map((e=>t("li",{class:"ac-stepper__step "+(this.done>=e?"ac-stepper__step--active":"")},e+1))),t("li",{class:"ac-stepper__step "+(this.done===this.steps?"ac-stepper__step--active":"")},t(a,{icon:s}))]}};c.style=o;export{c as ac_stepper};
//# sourceMappingURL=p-3456c99e.entry.js.map