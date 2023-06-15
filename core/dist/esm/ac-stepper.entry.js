import { r as registerInstance, c as createEvent, h } from './index-253b3ca9.js';
import { m as faCheck } from './index.es-9ca36090.js';
import { c as count } from './count-9bfcf4a6.js';
import { A as AcFaIcon } from './ac-fa-icon-8b19be0a.js';

const acStepperCss = "ac-stepper{display:flex}ac-stepper .ac-stepper__step{display:flex;box-sizing:border-box;align-items:center;justify-content:center;width:44px;height:44px;margin-left:44px;border:2px solid var(--color-secondary-normal, #F0000A);border-radius:100%;fill:var(--color-secondary-normal, #F0000A);color:var(--color-secondary-normal, #F0000A);font-weight:bold;user-select:none}ac-stepper .ac-stepper__step:after{content:\"\";position:absolute;width:44px;height:1px;margin-left:-44px;background:var(--color-secondary-normal, #F0000A)}ac-stepper .ac-stepper__step.ac-stepper__step--active{border-color:var(--color-primary-normal, #00466F);background-color:var(--color-primary-normal, #00466F);fill:var(--color-neutral-contrast, #FFFFFF);color:var(--color-neutral-contrast, #FFFFFF)}ac-stepper .ac-stepper__step.ac-stepper__step--active:after{height:2px;background:var(--color-primary-normal, #00466F)}ac-stepper .ac-stepper__step:first-of-type{margin-left:0}ac-stepper .ac-stepper__step:first-of-type:after{display:none}";

const AcStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.stepperChange = createEvent(this, "stepperChange", 7);
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
      ...count(this.steps).map(i => h("li", { class: 'ac-stepper__step ' + (this.done >= i ? 'ac-stepper__step--active' : '') }, i + 1)),
      h("li", { class: 'ac-stepper__step ' + (this.done === this.steps ? 'ac-stepper__step--active' : '') }, h(AcFaIcon, { icon: faCheck }))
    ];
  }
};
AcStepper.style = acStepperCss;

export { AcStepper as ac_stepper };

//# sourceMappingURL=ac-stepper.entry.js.map