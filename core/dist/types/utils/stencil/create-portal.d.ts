import { FunctionalComponent } from '../../stencil-public-runtime';
/**
 * Used to render hyperscript in a domPortal component.
 * @param domPortal A component that implements the portal behavior.
 * @param ComponentTag The target component that will be rendered.
 */
export declare function createPortal<C>(domPortal: any, ComponentTag: any): FunctionalComponent<C>;
