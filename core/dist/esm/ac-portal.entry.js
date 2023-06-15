import { r as registerInstance, g as getElement } from './index-253b3ca9.js';
import { P as PortalBehavior } from './portal-behavior-bfd4b8fa.js';
import { T as TransitionBehavior } from './transition-behavior-4856978d.js';
import './component-behavior-12d14453.js';
import './animation-ab8aa382.js';

const AcPortal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.portalBehavior = new PortalBehavior(this);
    this.transitionBehavior = new TransitionBehavior(this);
    this.vchildren = undefined;
  }
  componentWillLoad() { }
  disconnectedCallback() { }
  get host() { return getElement(this); }
};

export { AcPortal as ac_portal };

//# sourceMappingURL=ac-portal.entry.js.map