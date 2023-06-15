'use strict';

const reactivity = require('./reactivity-29a6561d.js');

function isIE() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');
  return msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
}

const platform = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isIE: isIE
});

(global => {
  class Solar {
  }
  Solar.utils = {
    reactivity: reactivity.reactivity,
    platform,
  };
  global.Solar = Solar;
})(window);

//# sourceMappingURL=solar-global-5d93373a.js.map