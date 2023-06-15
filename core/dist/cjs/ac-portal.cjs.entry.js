'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const portalBehavior = require('./portal-behavior-3b04ce21.js');
const transitionBehavior = require('./transition-behavior-4d199749.js');
require('./component-behavior-ab8d7c53.js');
require('./animation-2589982c.js');

const AcPortal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.portalBehavior = new portalBehavior.PortalBehavior(this);
    this.transitionBehavior = new transitionBehavior.TransitionBehavior(this);
    this.vchildren = undefined;
  }
  componentWillLoad() { }
  disconnectedCallback() { }
  get host() { return index.getElement(this); }
};

exports.ac_portal = AcPortal;

//# sourceMappingURL=ac-portal.cjs.entry.js.map