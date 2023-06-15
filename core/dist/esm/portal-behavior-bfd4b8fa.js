import { C as ComponentBehavior, e as extendMethod } from './component-behavior-12d14453.js';

/**
 * Implements a Portal logic, used to transfer VNode to a custom element by property.
 * This behavior will extend the default component's render function, rendering the VNode passed by the vchildren prop.
 */
class PortalBehavior extends ComponentBehavior {
  constructor(component) {
    super(component);
    extendMethod(component, 'render', original => {
      return component.customRender ? component.customRender(component.vchildren) : component.vchildren || original();
    });
  }
}

export { PortalBehavior as P };

//# sourceMappingURL=portal-behavior-bfd4b8fa.js.map