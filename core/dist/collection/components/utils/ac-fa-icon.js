var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import { h } from '@stencil/core';
export const AcFaIcon = props => {
  const { icon, anim, size, class: classList, style } = props, restProps = __rest(props, ["icon", "anim", "size", "class", "style"]);
  const fixedSize = size || 16;
  const parentClasses = anim ? `icon--anim-${anim} ` + classList : classList;
  return (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg" }, restProps, { class: parentClasses, viewBox: `0 0 ${icon.icon[0]} ${icon.icon[1]}`, height: fixedSize, style: Object.assign(Object.assign({}, style), { width: fixedSize + 'px' }) }), h("path", { d: icon.icon[4] })));
};
//# sourceMappingURL=ac-fa-icon.js.map
