import { r as reactivity } from './reactivity-1f85cfd2.js';

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
    reactivity,
    platform,
  };
  global.Solar = Solar;
})(window);

//# sourceMappingURL=solar-global-1cf7e413.js.map