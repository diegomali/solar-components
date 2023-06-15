import { h } from '@stencil/core';
/**
 * Used to render hyperscript in a domPortal component.
 * @param domPortal A component that implements the portal behavior.
 * @param ComponentTag The target component that will be rendered.
 */
export function createPortal(domPortal, ComponentTag) {
  return (props, children) => {
    domPortal.vchildren = h(ComponentTag, Object.assign({}, props), children);
    return null;
  };
}
//# sourceMappingURL=create-portal.js.map
