'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const index_es = require('./index.es-323a182b.js');
const count = require('./count-65ba8c15.js');
const acFaIcon = require('./ac-fa-icon-fc0da5da.js');

const acStepperCss = "ac-stepper{display:flex}ac-stepper .ac-stepper__step{display:flex;box-sizing:border-box;align-items:center;justify-content:center;width:44px;height:44px;margin-left:44px;border:2px solid var(--color-secondary-normal, #F0000A);border-radius:100%;fill:var(--color-secondary-normal, #F0000A);color:var(--color-secondary-normal, #F0000A);font-weight:bold;user-select:none}ac-stepper .ac-stepper__step:after{content:\"\";position:absolute;width:44px;height:1px;margin-left:-44px;background:var(--color-secondary-normal, #F0000A)}ac-stepper .ac-stepper__step.ac-stepper__step--active{border-color:var(--color-primary-normal, #00466F);background-color:var(--color-primary-normal, #00466F);fill:var(--color-neutral-contrast, #FFFFFF);color:var(--color-neutral-contrast, #FFFFFF)}ac-stepper .ac-stepper__step.ac-stepper__step--active:after{height:2px;background:var(--color-primary-normal, #00466F)}ac-stepper .ac-stepper__step:first-of-type{margin-left:0}ac-stepper .ac-stepper__step:first-of-type:after{display:none}";

const AcStepper = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.stepperChange = index.createEvent(this, "stepperChange", 7);
    this.steps = undefined;
    this.done = undefined;
  }
  /**
   * Increments the count of concluded steps.
   */
  async next() {
    if (this.done < this.steps) {
      this.done++;
      this.stepperChange.emit({ index: this.done });
    }
  }
  /**
   * Decrement the count of concluded steps.
   */
  async previous() {
    if (this.done > 0) {
      this.done--;
      this.stepperChange.emit({ index: this.done });
    }
  }
  render() {
    return [
      ...count.count(this.steps).map(i => index.h("li", { class: 'ac-stepper__step ' + (this.done >= i ? 'ac-stepper__step--active' : '') }, i + 1)),
      index.h("li", { class: 'ac-stepper__step ' + (this.done === this.steps ? 'ac-stepper__step--active' : '') }, index.h(acFaIcon.AcFaIcon, { icon: index_es.faCheck }))
    ];
  }
};
AcStepper.style = acStepperCss;

exports.ac_stepper = AcStepper;

//# sourceMappingURL=ac-stepper.cjs.entry.js.map