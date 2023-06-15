'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const portalBehavior = require('./portal-behavior-3b04ce21.js');
const transitionBehavior = require('./transition-behavior-4d199749.js');
const bind = require('./bind-c359decd.js');
require('./component-behavior-ab8d7c53.js');
require('./animation-2589982c.js');

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
    index.registerInstance(this, hostRef);
    this.backDropClick = index.createEvent(this, "backDropClick", 7);
    this.portalBehavior = new portalBehavior.PortalBehavior(this);
    this.transitionBehavior = new transitionBehavior.TransitionBehavior(this);
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
    return (index.h(index.Host, { class: {
        [`ac-overlay--backdrop-${this.backdrop}`]: !!this.backdrop,
        'ac-overlay--no-layer': this.noLayer,
      }, style: {
        justifyContent: this.position.split(' ')[0],
        alignItems: this.position.split(' ')[1],
      } }, !this.noLayer && index.h("div", { class: "ac-overlay--layer", onClick: this.handleBackDropClick }), index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
__decorate([
  bind.Bind
], AcOverlay.prototype, "handleBackDropClick", null);
AcOverlay.style = acOverlayCss;

exports.ac_overlay = AcOverlay;

//# sourceMappingURL=ac-overlay.cjs.entry.js.map