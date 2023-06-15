'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const index_es = require('./index.es-323a182b.js');
const bind = require('./bind-c359decd.js');
const acFaIcon = require('./ac-fa-icon-fc0da5da.js');

const acMenuItemCss = "ac-menu-item{display:block}ac-menu-item .ac-menu-item__native{display:flex;position:relative;align-items:center;justify-content:space-between;height:36px;padding:0 16px;transition:background-color ease-in-out 0.25s, color ease-in-out 0.25s, fill ease-in-out 0.25s;border-radius:4px;background:transparent;fill:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.8);color:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.8);text-decoration:none;cursor:pointer}ac-menu-item .ac-menu-item__native:hover,ac-menu-item .ac-menu-item__native:focus{background-color:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.04);color:var(--color-theme-contrast, #111111)}ac-menu-item .ac-menu-item__native:active{background-color:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.08)}ac-menu-item .ac-menu-item__native .ac-menu-item__text{width:100%;font-size:14px;user-select:none}ac-menu-item .ac-menu-item__native .ac-menu-item__icon-start{margin-right:16px}ac-menu-item .ac-menu-item__native:before{content:\"\";position:absolute;top:50%;left:-8px;width:4px;height:0;transition:top 0.4s ease-in-out, width 0.4s ease-in-out, height 0.4s ease-in-out, border-radius 0.4s ease-in-out;border-top-right-radius:4px;border-bottom-right-radius:4px;background-color:var(--color-primary-normal, #00466F)}ac-menu-item .ac-menu-item__submenu{height:auto;max-height:0;overflow:hidden;transition:max-height ease-in-out 0.25s, opacity ease-in-out 0.25s;opacity:0}ac-menu-item .ac-menu-item__submenu ac-menu-item .ac-menu-item__text{margin-left:14px;color:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.6)}ac-menu-item .ac-menu-item__submenu ac-menu-item.ac-menu-item--active .ac-menu-item__text{color:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.8)}ac-menu-item .ac-menu-item__submenu ac-menu-item [slot=submenu] ac-menu-item .ac-menu-item__text{margin-left:30px}ac-menu-item .ac-menu-item__submenu-icon{transition:transform ease-in-out 0.25s}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){ac-menu-item .ac-menu-item__native{fill:currentColor !important;color:inherit !important}}ac-menu-item.ac-menu-item--icon-only>.ac-menu-item__native{justify-content:center;width:36px;height:36px;margin-left:6px;padding:0;border-radius:100%}ac-menu-item.ac-menu-item--icon-only>.ac-menu-item__native .ac-menu-item__icon-start{margin-right:0}ac-menu-item.ac-menu-item--icon-only>.ac-menu-item__native .ac-menu-item__text{display:none}ac-menu-item.ac-menu-item--icon-only>.ac-menu-item__native .ac-menu-item__submenu-icon{display:none !important}ac-menu-item.ac-menu-item--icon-only>.ac-menu-item__native:before{left:-14px}ac-menu-item.ac-menu-item--collapsed>.ac-menu-item__submenu{max-height:100vh;opacity:1}ac-menu-item.ac-menu-item--collapsed>.ac-menu-item__native .ac-menu-item__submenu-icon{transform:rotate(180deg)}ac-menu-item.ac-menu-item--collapsed.ac-menu-item--icon-only>.ac-menu-item__submenu{display:none}ac-menu-item.ac-menu-item--active>.ac-menu-item__native{fill:var(--color-primary-normal, #00466F);color:var(--color-primary-normal, #00466F);font-weight:bold}ac-menu-item.ac-menu-item--active>.ac-menu-item__native:before{top:calc(50% - 12px);height:24px}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AcMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.iconOnly = undefined;
    this.active = undefined;
    this.disabled = undefined;
    this.hidden = undefined;
    this.submenu = undefined;
    this.collapsed = undefined;
    this.href = undefined;
  }
  handleClick() {
    if (this.submenu) {
      this.collapsed = !this.collapsed;
    }
  }
  render() {
    return (index.h(index.Host, { class: {
        'ac-menu-item--active': this.active,
        'ac-menu-item--icon-only': this.iconOnly,
        'ac-menu-item--collapsed': this.collapsed,
        'ac-menu-item--hidden': this.hidden,
      } }, index.h("a", { class: "ac-menu-item__native", href: this.href, onClick: this.handleClick }, index.h("span", { class: "ac-menu-item__icon-start" }, index.h("slot", { name: "icon-start" })), index.h("span", { class: "ac-menu-item__text" }, index.h("slot", null)), this.submenu && index.h(acFaIcon.AcFaIcon, { icon: index_es.faCaretDown, class: "ac-menu-item__submenu-icon", size: 12 })), index.h("div", { class: "ac-menu-item__submenu" }, index.h("slot", { name: "submenu" }))));
  }
};
__decorate([
  bind.Bind
], AcMenu.prototype, "handleClick", null);
AcMenu.style = acMenuItemCss;

exports.ac_menu_item = AcMenu;

//# sourceMappingURL=ac-menu-item.cjs.entry.js.map