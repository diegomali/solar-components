'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const animation = require('./animation-2589982c.js');
const bind = require('./bind-c359decd.js');

const acTabCss = "ac-tab{padding:16px 16px;color:var(--color-primary-normal, #00466F);font-size:14px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;cursor:pointer;user-select:none}ac-tab[active]{color:var(--color-secondary-normal, #F0000A)}ac-tab.ac-tab--compact{padding:16px 8px;font-weight:normal}ac-tab.ac-tab--secondary{color:var(--color-secondary-normal, #F0000A)}ac-tab.ac-tab--secondary[active]{color:var(--color-primary-normal, #00466F)}";

const AcTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = undefined;
    this.compact = undefined;
  }
  render() {
    return (index.h(index.Host, { class: {
        'ac-tab--compact': this.compact
      } }, index.h("slot", null)));
  }
};
AcTab.style = acTabCss;

const acTabsCss = "ac-tabs{display:flex;position:relative;box-sizing:border-box;width:100%;border-bottom:1px solid rgba(0, 0, 0, 0.08)}ac-tabs .ac-tabs__bullet{position:absolute;bottom:0px;width:24px;height:4px;margin-left:-11px;transition:left 0.4s ease-in-out, height 0.4s ease-in-out, width 0.4s ease-in-out, border-radius 0.4s ease-in-out, margin-bottom 0.4s ease-in-out;border-top-left-radius:4px;border-top-right-radius:4px;background-color:var(--color-secondary-normal, #F0000A)}ac-tabs .ac-tabs__bullet.ac-tabs__bullet--moving{width:72px;height:2px;margin-bottom:2px;border-radius:2px}ac-tabs .ac-tabs__wrapper{display:flex;width:100%;overflow-x:auto;overflow-y:hidden}ac-tabs.ac-tabs--secondary .ac-tabs__bullet{background-color:var(--color-primary-normal, #00466F)}ac-tabs.ac-tabs--compact{border-bottom:none}ac-tabs.ac-tabs--compact .ac-tabs__bullet{width:20px}";

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
const AcTabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.tabChange = index.createEvent(this, "tabChange", 7);
    this.theme = undefined;
    this.compact = undefined;
    this.selected = undefined;
  }
  onDidSelectedUpdate() {
    // tslint:disable-next-line:triple-equals
    const tab = this.childTabs.find(tab => tab.id == this.selected);
    this.select(tab);
  }
  onDidCompactUpdate() {
    this.childTabs.forEach(tab => {
      tab.compact = this.compact;
    });
  }
  componentDidLoad() {
    // @TODO: Change it to componentDidRender hook.
    this.loadTabsFromHTML();
  }
  componentDidUpdate() {
    this.loadTabsFromHTML();
  }
  /**
   * Load the tabs from the children.
   */
  loadTabsFromHTML(selected) {
    this.childTabs = Array.from(this.host.querySelectorAll('ac-tab'));
    if (!this.currentTab) {
      this.currentTab = this.childTabs[0];
    }
    this.childTabs.forEach(tab => {
      tab.addEventListener('click', () => this.select(tab));
    });
    this.childTabs.forEach(tab => {
      tab.compact = this.compact;
      // tslint:disable-next-line:triple-equals
      if (selected && selected == tab.id) {
        tab.active = true;
      }
    });
    this.selected = this.currentTab.id;
    setTimeout(() => this.moveBulletToCurrentTab(), 100);
  }
  /**
   * Mark a tab as selected.
   */
  async select(tab) {
    if (this.currentTab.id !== tab.id) {
      this.currentTab.active = false;
      tab.active = true;
      this.currentTab = tab;
      await this.moveBulletToCurrentTab();
      this.selected = this.currentTab.id;
      this.tabChange.emit(this.currentTab.id);
    }
  }
  /**
   * Animate the bullet element to a tab on the screen.
   */
  moveBulletToCurrentTab() {
    const bulletBounding = this.currentTab.getBoundingClientRect();
    const hostBounding = this.host.getBoundingClientRect();
    const bulletLeft = ((bulletBounding.left - hostBounding.left) + bulletBounding.width / 2);
    const bulletLeftWithScroll = bulletLeft + this.wrapperElt.scrollLeft;
    return animation.animate(this.bulletElt)
      .then(animation.addStyle({ left: bulletLeftWithScroll + 'px' }));
  }
  /**
   * Update the bullet element position when occurs a scroll, preventing breaks on the layout.
   */
  handleWrapperScroll() {
    this.bulletElt.style.transform = `translateX(-${this.wrapperElt.scrollLeft}px)`;
  }
  render() {
    return (index.h(index.Host, { class: {
        [`ac-tabs--${this.theme}`]: this.theme !== undefined,
        'ac-tabs--compact': this.compact
      } }, index.h("span", { class: "ac-tabs__wrapper", ref: wrapper => this.wrapperElt = wrapper, onScroll: this.handleWrapperScroll }, index.h("slot", null)), index.h("span", { class: "ac-tabs__bullet", style: { left: '0px' }, ref: bullet => this.bulletElt = bullet })));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "selected": ["onDidSelectedUpdate"],
    "compact": ["onDidCompactUpdate"]
  }; }
};
__decorate([
  bind.Bind
], AcTabs.prototype, "handleWrapperScroll", null);
AcTabs.style = acTabsCss;

exports.ac_tab = AcTab;
exports.ac_tabs = AcTabs;

//# sourceMappingURL=ac-tab_2.cjs.entry.js.map