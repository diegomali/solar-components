import { extendMethod } from '../utils/lang/extend-method';
import { ComponentBehavior } from '../utils/stencil/component-behavior';
/**
 * Implements a Portal logic, used to transfer VNode to a custom element by property.
 * This behavior will extend the default component's render function, rendering the VNode passed by the vchildren prop.
 */
export class PortalBehavior extends ComponentBehavior {
  constructor(component) {
    super(component);
    extendMethod(component, 'render', original => {
      return component.customRender ? component.customRender(component.vchildren) : component.vchildren || original();
    });
  }
}
//# sourceMappingURL=portal-behavior.js.map
