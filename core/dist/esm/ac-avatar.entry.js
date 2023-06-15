import { r as registerInstance, h, H as Host } from './index-253b3ca9.js';

const acAvatarCss = "ac-avatar{display:flex;align-items:center}ac-avatar .ac-avatar__native{display:flex;align-items:center}ac-avatar .ac-avatar__native .ac-avatar__image{min-width:36px;min-height:36px;border-radius:100%;background-size:contain;box-shadow:0 4px 8px rgba(0, 0, 0, 0.08)}ac-avatar .ac-avatar__native .ac-avatar__text{display:flex;flex-direction:column;padding-left:8px;white-space:nowrap}ac-avatar .ac-avatar__native .ac-avatar__text .ac-avatar__title{color:var(--color-theme-contrast, #111111);font-size:14px;font-weight:bold;text-transform:capitalize}ac-avatar .ac-avatar__native .ac-avatar__text .ac-avatar__subtitle{color:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.6);font-size:12px}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){ac-avatar .ac-avatar__title{color:inherit}ac-avatar .ac-avatar__subtitle{color:inherit}}";

const AcAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mode = undefined;
    this.image = undefined;
    this.title = undefined;
    this.subtitle = undefined;
    this.href = undefined;
    this.target = undefined;
  }
  render() {
    return (h(Host, { class: {
        [`ac-badge--${this.mode}`]: this.mode !== undefined,
      } }, h("a", { class: "ac-avatar__native", href: this.href, target: this.target }, h("div", { class: "ac-avatar__image", style: { backgroundImage: `url(${this.image})` } }), h("div", { class: "ac-avatar__text" }, h("span", { class: "ac-avatar__title" }, this.title), h("span", { class: "ac-avatar__subtitle" }, this.subtitle)))));
  }
};
AcAvatar.style = acAvatarCss;

export { AcAvatar as ac_avatar };

//# sourceMappingURL=ac-avatar.entry.js.map