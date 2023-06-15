import * as reactivity from '../utils/lang/reactivity';
import * as platform from '../utils/platform';
(global => {
  class Solar {
  }
  Solar.utils = {
    reactivity,
    platform,
  };
  global.Solar = Solar;
})(window);
//# sourceMappingURL=solar-global.js.map
