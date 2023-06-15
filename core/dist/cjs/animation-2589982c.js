'use strict';

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
function animate(element) {
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
 * Add inline style to this element.
 * @param style A style object to set in the element.
 */
function addStyle(style) {
  return ({ element, duration }) => {
    Object.assign(element.style, style);
    return new Promise(res => res({ element, duration }));
  };
}
/**
 * Wait the end of the transition.
 * @param delay An optional delay to add to the animation execution.
 */
function wait(delay = 0) {
  return ({ element, duration }) => {
    return new Promise(res => setTimeout(() => res({ element, duration }), duration + delay));
  };
}

exports.addStyle = addStyle;
exports.animate = animate;
exports.wait = wait;

//# sourceMappingURL=animation-2589982c.js.map