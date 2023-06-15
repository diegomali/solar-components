/**
 * Start an element animation pipeline.
 */
export declare function animate(element: HTMLElement): Promise<AnimationProperties>;
/**
 * Set transition properties to the animation.
 * @param timing The CSS transition timing function.
 * @param transitionDur The duration in milliseconds.
 * @param property The specific property that this transition rule is applied.
 */
export declare function transition(timing: string, transitionDur: number, property?: string): AnimationTransformFunction;
/**
 * Apply CSS classes to this element.
 * @param classList A list of CSS classes to apply.
 */
export declare function addClass(...classList: any[]): AnimationTransformFunction;
/**
 * Remove CSS classes from this element.
 * @param classList A list of CSS classes to remove.
 */
export declare function removeClass(...classList: any[]): AnimationTransformFunction;
/**
 * Add inline style to this element.
 * @param style A style object to set in the element.
 */
export declare function addStyle(style: ElementStyle): AnimationTransformFunction;
/**
 * Wait the end of the transition.
 * @param delay An optional delay to add to the animation execution.
 */
export declare function wait(delay?: number): AnimationTransformFunction;
/**
 * Represents a set of CSS properties.
 */
type ElementStyle = {
  [key in keyof CSSStyleDeclaration]?: string | null;
};
/**
 * Represents the current properties from an animation pipeline.
 */
export interface AnimationProperties {
  element: HTMLElement;
  duration: number;
}
/**
 * Represents a function that modifies the animation in a pipeline.
 */
type AnimationTransformFunction = (AnimationProperties: any) => Promise<AnimationProperties>;
export {};
