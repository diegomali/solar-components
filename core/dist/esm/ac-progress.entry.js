import { r as registerInstance, h, H as Host } from './index-253b3ca9.js';

const acProgressCss = "ac-progress{display:block;position:relative;width:100%;height:8px;border-radius:8px}ac-progress .ac-progress__meter{display:block;position:absolute;height:100%;transition:width ease-in-out 0.25s;border-radius:inherit}ac-progress.ac-progress--primary{background:var(--color-primary-lighter, #0086d5)}ac-progress.ac-progress--primary .ac-progress__meter{background:var(--color-primary-normal, #00466F)}ac-progress.ac-progress--secondary{background:var(--color-secondary-lighter, #ff575e)}ac-progress.ac-progress--secondary .ac-progress__meter{background:var(--color-secondary-normal, #F0000A)}ac-progress.ac-progress--neutral{background:var(--color-neutral-lighter, #F5F5F5)}ac-progress.ac-progress--neutral .ac-progress__meter{background:var(--color-neutral-normal, #C8C8C8)}";

const AcProgress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.theme = 'primary';
    this.percent = undefined;
  }
  render() {
    return (h(Host, { class: {
        [`ac-progress--${this.theme}`]: !!this.theme
      } }, h("div", { class: "ac-progress__meter", style: {
        width: this.percent + '%',
      } })));
  }
};
AcProgress.style = acProgressCss;

export { AcProgress as ac_progress };

//# sourceMappingURL=ac-progress.entry.js.map