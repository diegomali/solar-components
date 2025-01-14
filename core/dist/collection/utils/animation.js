function cssDurationToMilis(duration) {
  // Prevent errors with .xxx values
  const time = duration.startsWith('.') ? '0' + duration : duration;
  if (time.endsWith('ms')) {
    return parseInt(time);
  }
  else {
    return parseFloat(time) * 1000;
  }
}
/**
 * Start an element animation pipeline.
 */
export function animate(element) {
  /* @TODO: returns null in firefox even for elements with transition. */
  const declaredTransition = window.getComputedStyle(element).transition.match(/\.?\d[ms]/g);
  if (!declaredTransition) {
    return new Promise(resolve => resolve({ element, duration: 0 }));
  }
  let duration = 0;
  declaredTransition.forEach(t => {
    const dur = cssDurationToMilis(t);
    duration = duration < dur ? dur : duration;
  });
  return new Promise(res => res({ element, duration }));
}
/**
 * Set transition properties to the animation.
 * @param timing The CSS transition timing function.
 * @param transitionDur The duration in milliseconds.
 * @param property The specific property that this transition rule is applied.
 */
export function transition(timing, transitionDur, property) {
  return ({ element, duration }) => {
    element.style.transition = `${property || ''} ${timing} ${transitionDur}ms`;
    const newDuration = duration < transitionDur ? transitionDur : duration;
    return new Promise(res => res({ element, duration: newDuration }));
  };
}
/**
 * Apply CSS classes to this element.
 * @param classList A list of CSS classes to apply.
 */
export function addClass(...classList) {
  return ({ element, duration }) => {
    element.classList.add(...classList);
    return new Promise(res => res({ element, duration }));
  };
}
/**
 * Remove CSS classes from this element.
 * @param classList A list of CSS classes to remove.
 */
export function removeClass(...classList) {
  return ({ element, duration }) => {
    element.classList.remove(...classList);
    return new Promise(res => res({ element, duration }));
  };
}
/**
 * Add inline style to this element.
 * @param style A style object to set in the element.
 */
export function addStyle(style) {
  return ({ element, duration }) => {
    Object.assign(element.style, style);
    return new Promise(res => res({ element, duration }));
  };
}
/**
 * Wait the end of the transition.
 * @param delay An optional delay to add to the animation execution.
 */
export function wait(delay = 0) {
  return ({ element, duration }) => {
    return new Promise(res => setTimeout(() => res({ element, duration }), duration + delay));
  };
}
//# sourceMappingURL=animation.js.map
