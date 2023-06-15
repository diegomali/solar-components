import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-253b3ca9.js';
import { P as PortalBehavior } from './portal-behavior-bfd4b8fa.js';
import { T as TransitionBehavior } from './transition-behavior-4856978d.js';
import { B as Bind } from './bind-952a1624.js';
import './component-behavior-12d14453.js';
import './animation-ab8aa382.js';

const acOverlayCss = "ac-overlay{display:flex;position:fixed;z-index:7;top:0;left:0;width:100%;height:100%}ac-overlay .ac-overlay--layer{position:absolute;top:0;left:0;width:100%;height:100%}ac-overlay.ac-overlay--backdrop-dark .ac-overlay--layer{transition:opacity ease-in-out 0.1s;background-color:rgba(0, 0, 0, 0.5)}ac-overlay.ac-overlay--backdrop-dark.transition--before-enter .ac-overlay--layer{opacity:0}ac-overlay.ac-overlay--backdrop-dark.transition--before-leave .ac-overlay--layer{opacity:0}ac-overlay.ac-overlay--no-layer{pointer-events:none}ac-overlay.ac-overlay--no-layer>*{pointer-events:auto}";

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
const AcOverlay = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.backDropClick = createEvent(this, "backDropClick", 7);
    this.portalBehavior = new PortalBehavior(this);
    this.transitionBehavior = new TransitionBehavior(this);
    this.vchildren = undefined;
    this.backdrop = 'dark';
    this.noLayer = undefined;
    this.position = 'center center';
    this.disableClose = undefined;
  }
  componentWillLoad() {
  }
  disconnectedCallback() {
  }
  async handleBackDropClick() {
    this.backDropClick.emit();
  }
  render() {
    return (h(Host, { class: {
        [`ac-overlay--backdrop-${this.backdrop}`]: !!this.backdrop,
        'ac-overlay--no-layer': this.noLayer,
      }, style: {
        justifyContent: this.position.split(' ')[0],
        alignItems: this.position.split(' ')[1],
      } }, !this.noLayer && h("div", { class: "ac-overlay--layer", onClick: this.handleBackDropClick }), h("slot", null)));
  }
  get host() { return getElement(this); }
};
__decorate([
  Bind
], AcOverlay.prototype, "handleBackDropClick", null);
AcOverlay.style = acOverlayCss;

export { AcOverlay as ac_overlay };

//# sourceMappingURL=ac-overlay.entry.js.map