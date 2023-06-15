import { FunctionalComponent } from '../../stencil-public-runtime';
import { ControlledElementFields, ControllerComponentOptions } from './controller-behavior';
/**
 * Used to create a Component that dispatch a ControllerComponent#set directly from a render tree.
 * This will pass the vchildren as a render function to the controller to render it through the portal.
 * @param controllerRef The reference of the controller element to dispatch.
 */
export declare function createControllerPortal<C>(controllerRef: any): FunctionalComponent<ControllerComponentOptions<C> & ControlledElementFields>;
