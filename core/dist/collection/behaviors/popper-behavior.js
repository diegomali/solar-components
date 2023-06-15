import Popper from 'popper.js';
import { ComponentBehavior } from '../utils/stencil/component-behavior';
/**
 * Implements the Popper.js logic in the component, useful to build tooltips and another floating elements.
 * @link https://popper.js.org/popper-documentation.html.
 */
export class PopperBehavior extends ComponentBehavior {
  attach() {
    let pivot = this.component.popperPivot;
    if (typeof pivot === 'string') {
      // Pivot is an element id.
      pivot = document.getElementById(pivot);
    }
    if (pivot) {
      this.popper = new Popper(pivot, this.component.popperTarget || this.component.host, this.component.popperOptions);
    }
  }
  detach() {
    if (this.popper) {
      this.popper.destroy();
    }
  }
}
//# sourceMappingURL=popper-behavior.js.map
