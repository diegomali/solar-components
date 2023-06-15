export interface Viewport {
  height: number;
  width: number;
}
export interface ViewBounding extends Viewport {
  x: number;
  y: number;
}
/**
 * Calculates the amount of space left in a viewport, assuming a box.
 * @param bounding The box that will be positioned on the viewport.
 * @param viewport The viewport definitions.
 */
export declare function leftSpaceOnViewport(bounding: ViewBounding | DOMRect, viewport: Viewport): {
  top: number;
  left: number;
  right: number;
  bottom: number;
};
/**
 * Calculates the amount of space left in the window's viewport, assuming a box.
 * @param bounding The box that will be positioned on the window.
 */
export declare function leftSpaceOnWindow(bounding: ViewBounding | DOMRect): {
  top: number;
  left: number;
  right: number;
  bottom: number;
};
