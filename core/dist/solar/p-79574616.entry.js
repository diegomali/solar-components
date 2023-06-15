import{r as t,c as e,h as n,g as i,H as s}from"./p-bfc2338d.js";import{g as a}from"./p-8fff0704.js";import{B as r}from"./p-05671e06.js";import{D as c}from"./p-da0ddaf0.js";import{A as o}from"./p-d7dbca0e.js";function u(t){return(e,n)=>{(e[n[t]]=e[n[t]]||[]).push(n);return e}}const h="ac-menu{display:flex;flex-direction:column;width:100%;padding:0 8px}ac-menu ac-menu-item{margin-bottom:8px}ac-menu .ac-menu__group{padding-bottom:16px}ac-menu .ac-menu__group .ac-menu__group-title{color:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.32);font-size:10px;font-weight:bold;text-transform:uppercase}ac-menu .ac-menu__search-bar{margin-bottom:24px;transition:opacity ease-in-out 0.1s, background ease-in-out 0.1s;border:0px;background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.08);fill:var(--color-theme-contrast, #111111) !important}ac-menu .ac-menu__search-bar:hover,ac-menu .ac-menu__search-bar.ac-input--focus{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.16)}ac-menu .ac-menu__search-bar .ac-input__native{color:var(--color-theme-contrast, #111111) !important}ac-menu.ac-menu--icon-only ac-input-base.ac-menu__search-bar{opacity:0}ac-menu.ac-menu--filtered .ac-menu__content{display:none}";var l=undefined&&undefined.__decorate||function(t,e,n,i){var s=arguments.length,a=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)if(r=t[c])a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a;return s>3&&a&&Object.defineProperty(e,n,a),a};const m=class{constructor(n){t(this,n);this.menuChange=e(this,"menuChange",7);this.iconOnly=undefined;this.searchable=undefined;this.searchLabel=undefined;this.noResultsLabel=undefined;this.selected=undefined;this.searchFilter=undefined;this.filteredItems=undefined}iconOnlyDidUpdate(){this.filteredItems=null;this.searchFilter=null;this.updateChildItems()}searchFilterDidUpdate(){if(this.searchFilter){this.filteredItems=[];Object.keys(this.menuItems).forEach((t=>{const e=this.menuItems[t].filter((t=>t.fuzzyDescription.indexOf(this.searchFilter.toLowerCase())>0&&!t.elt.disabled));if(e.length>0){this.filteredItems.push({groupTitle:t!=="null"?t:null,items:e})}}))}else{this.filteredItems=null}}componentDidLoad(){this.loadItemsFromHTML()}updateChildItems(){for(const t of this.childItems){t.iconOnly=this.iconOnly}}loadItemsFromHTML(){this.childItems=Array.from(this.menuContentElt.children).filter((t=>t.tagName==="AC-MENU-ITEM"));setTimeout((()=>this.menuItems=Array.from(this.menuContentElt.querySelectorAll("ac-menu-item")).filter((t=>!t.submenu&&!t.disabled)).map(d).reduce(u("breadcrumbs"),{})),0);this.childItems.forEach((t=>{if(!t.submenu){t.addEventListener("click",(()=>this.selected=t.id))}}));const t=this.childItems.find((t=>t.id==this.selected));if(t){this.select(t)}this.updateChildItems()}onDidSelectedUpdate(){console.log(this.selected);const t=this.childItems.find((t=>t.id==this.selected));this.select(t)}select(t){if(!this.activeItem){this.activeItem=t}if(this.activeItem.id!==t.id){this.activeItem.active=false;this.menuChange.emit(t.id)}t.active=true;this.activeItem=t}async handleDebouncedKeyUp(){const t=await this.searchInput.getNativeInput();this.searchFilter=t.value}hostData(){return{class:{"ac-menu--icon-only":this.iconOnly,"ac-menu--filtered":this.searchFilter}}}__stencil_render(){return[this.searchable&&n("ac-input-base",{class:"ac-menu__search-bar",size:"small",placeholder:this.searchLabel||"Search",onKeyUp:this.handleDebouncedKeyUp,ref:t=>this.searchInput=t},n(o,{slot:"item-start",icon:a,size:12})),n("div",{class:"ac-menu__content",ref:t=>this.menuContentElt=t},n("slot",null)),this.filteredItems&&this.filteredItems.length>0&&n("div",{class:"ac-menu__search-results"},this.filteredItems.map(p))]}get host(){return i(this)}static get watchers(){return{iconOnly:["iconOnlyDidUpdate"],searchFilter:["searchFilterDidUpdate"],selected:["onDidSelectedUpdate"]}}render(){return n(s,this.hostData(),this.__stencil_render())}};l([r,c(200)],m.prototype,"handleDebouncedKeyUp",null);function d(t){const e=f(t,[]).reverse();return{elt:t,parents:e,breadcrumbs:e.length>0?e.join(" > "):null,title:t.innerText,href:t.href,onClick:()=>t.click(),fuzzyDescription:(e.join("; ")+"; "+t.innerText+"; "+t.href).toLowerCase()}}function f(t,e){if(t.parentElement.slot!=="submenu"){return e}const n=t.parentElement.parentElement.parentElement;e.push(n.querySelector(".ac-menu-item__native > .ac-menu-item__text").innerText);return f(n,e)}function p(t){return n("div",{class:"ac-menu__group"},n("span",{class:"ac-menu__group-title"},t.groupTitle),t.items.map((t=>n("ac-menu-item",{href:t.href,onClick:t.onClick},t.title))))}m.style=h;export{m as ac_menu};
//# sourceMappingURL=p-79574616.entry.js.map