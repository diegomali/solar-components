'use strict';

const _curry1 = require('./_curry1-b59ebfd7.js');

/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
var isNil = /*#__PURE__*/_curry1._curry1(function isNil(x) {
  return x == null;
});

exports.isNil = isNil;

//# sourceMappingURL=isNil-7855ac09.js.map