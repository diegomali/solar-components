import{r as s,g as t}from"./p-bfc2338d.js";import{C as r}from"./p-604dcd14.js";import{S as e}from"./p-48e4759b.js";import"./p-bfa157e3.js";const a=class{constructor(t){s(this,t);this.controllerBehavior=new r(this);this.target="ac-navdrawer";this.bound=undefined}async create(s){const t=document.createElement("ac-overlay");t.backdrop="light";t.position=s.position;s.wrapper=t;s.mode="over";const r=await this.controllerBehavior.create(Object.assign(Object.assign({},s),{showToggle:false}));t.addEventListener("backDropClick",(()=>{r.remove()}));r.addEventListener("close",(()=>{t.remove();e.enable()}));e.disable();return r}async dismiss(){return}disconnectedCallback(){}get host(){return t(this)}};export{a as ac_navdrawer_controller};
//# sourceMappingURL=p-ee3a5d94.entry.js.map