'use strict';

const browser = require('./browser-9c45fd25.js');
const componentBehavior = require('./component-behavior-ab8d7c53.js');

const log = browser.browser('solar:FocusBehavior');
/**
 * Implements a Focus logic in a component, providing a control for blur clicks.
 */
class FocusBehavior extends componentBehavior.ComponentBehavior {
  constructor() {
    super(...arguments);
    /**
     * Filter all the clicks in the body and calls the `whenBlur` from the component if match an outside click.
     * @param ev A Click Event.
     */
    this.handleBodyClick = (ev) => {
      if (this.component.hasFocus) {
        const focusElt = this.component.focusTarget || this.component.host;
        const isClickingOutsideTheTarget = ev.target.closest(focusElt.tagName.toLowerCase()) !== focusElt;
        if (isClickingOutsideTheTarget && !FocusBehavior.checkBypassNode(focusElt, ev.target)) {
          log('Clicked outside', focusElt);
          this.component.whenBlur(ev.target);
        }
      }
    };
  }
  /**
   * Check if a target node branch has a data-toggle that match the host id.
   */
  static checkBypassNode(focusElt, target) {
    let isBypassNode = false;
    if (focusElt.id) {
      const bypassNode = document.body
        .querySelector(`[data-toggle="${focusElt.id}"]`);
      isBypassNode = bypassNode ? bypassNode.contains(target) : false;
    }
    return isBypassNode;
  }
  /**
   * Setup the event listener to the body.
   */
  attach() {
    document.body.addEventListener('click', this.handleBodyClick);
  }
  /**
   * Remove the event listener to the body.
   */
  detach() {
    document.body.removeEventListener('click', this.handleBodyClick);
  }
}

exports.FocusBehavior = FocusBehavior;

//# sourceMappingURL=focus-behavior-041097ad.js.map