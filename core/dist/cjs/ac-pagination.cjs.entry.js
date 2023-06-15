'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const _commonjsHelpers = require('./_commonjsHelpers-537d719a.js');
const bind = require('./bind-c359decd.js');
const count = require('./count-65ba8c15.js');
const acFaIcon = require('./ac-fa-icon-fc0da5da.js');

var faAngleLeft = _commonjsHelpers.createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'angle-left';
var width = 256;
var height = 512;
var ligatures = [];
var unicode = 'f104';
var svgPathData = 'M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faAngleLeft = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faAngleRight = _commonjsHelpers.createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'angle-right';
var width = 256;
var height = 512;
var ligatures = [];
var unicode = 'f105';
var svgPathData = 'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faAngleRight = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

const acPaginationCss = "ac-pagination{display:flex}ac-pagination ac-tabs>*{align-items:center}ac-pagination .skip-pages{display:flex;align-items:center;padding:0 8px;color:var(--color-primary-normal, #00466F);cursor:pointer}ac-pagination .skip-pages .skip-pages--icon{padding:0 8px;fill:var(--color-primary-normal, #00466F)}ac-pagination .skip-pages__disable{color:var(--color-neutral-light, #E6E6E6);cursor:default}ac-pagination .skip-pages__disable .skip-pages--icon{fill:var(--color-neutral-light, #E6E6E6)}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AcPagination = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.paginationChange = index.createEvent(this, "paginationChange", 7);
    this.totalPages = undefined;
    this.selected = 1;
    this.nextLabel = 'Next';
    this.previousLabel = 'Previous';
  }
  handleChangePage(ev) {
    this.selected = parseInt(ev.detail);
    this.paginationChange.emit(this.selected);
  }
  handleNextPage() {
    if (this.selected < this.totalPages) {
      this.selected = this.selected + 1;
    }
  }
  handleAfterPage() {
    if (this.selected > 1) {
      this.selected = this.selected - 1;
    }
  }
  definePages() {
    if (this.selected === 1 && this.skipPagesPrevious) {
      this.skipPagesPrevious.classList.add('skip-pages__disable');
    }
    else if (this.skipPagesPrevious) {
      this.skipPagesPrevious.classList.remove('skip-pages__disable');
    }
    if (this.selected === this.totalPages && this.skipPagesNext) {
      this.skipPagesNext.classList.add('skip-pages__disable');
    }
    else if (this.skipPagesNext) {
      this.skipPagesNext.classList.remove('skip-pages__disable');
    }
  }
  render() {
    return [
      this.totalPages > 0 &&
        index.h("ac-tabs", { selected: this.selected, compact: true }, index.h("div", { class: "skip-pages skip-pages__disable", onClick: this.handleAfterPage, ref: skipPagesPrevious => this.skipPagesPrevious = skipPagesPrevious }, index.h(acFaIcon.AcFaIcon, { class: "skip-pages--icon", icon: faAngleLeft.faAngleLeft, size: 12 }), index.h("span", null, this.previousLabel)), ...count.count(this.totalPages).map(i => index.h("ac-tab", { id: i + 1, compact: true }, i + 1)), index.h("div", { class: "skip-pages", ref: skipPagesNext => this.skipPagesNext = skipPagesNext }, index.h("span", { onClick: this.handleNextPage }, this.nextLabel), index.h(acFaIcon.AcFaIcon, { class: "skip-pages--icon", icon: faAngleRight.faAngleRight, size: 12 })))
    ];
  }
  static get watchers() { return {
    "totalPages": ["definePages"],
    "selected": ["definePages"]
  }; }
};
__decorate([
  bind.Bind
], AcPagination.prototype, "handleNextPage", null);
__decorate([
  bind.Bind
], AcPagination.prototype, "handleAfterPage", null);
AcPagination.style = acPaginationCss;

exports.ac_pagination = AcPagination;

//# sourceMappingURL=ac-pagination.cjs.entry.js.map