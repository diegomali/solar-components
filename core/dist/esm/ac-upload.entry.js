import { r as registerInstance, c as createEvent, h, H as Host } from './index-253b3ca9.js';
import { n as faUpload } from './index.es-9ca36090.js';
import { B as Bind } from './bind-952a1624.js';

const acUploadCss = "ac-upload{display:block;width:100%}ac-upload .ac-upload--drop-area{display:block;height:100%;border:2px dashed #E6E6E6;border-radius:4px;background:#F5F5F5}ac-upload .ac-upload--drop-area .ac-upload--wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}ac-upload .ac-upload--drop-area .ac-upload--wrapper .ac-upload--button{padding:16px 0px 16px}ac-upload .ac-upload--drop-area .ac-upload--wrapper .ac-upload--content{width:100%;padding:0px 16px 0px;text-align:center}ac-upload .ac-upload--native-input{display:none}ac-upload.ac-upload--focus .ac-upload--drop-area{transition:border-color ease-in-out 0.2s, background ease-in-out 0.2s;border-color:var(--color-primary-normal, #00466F);background:rgba(var(--color-primary-normal-rgb, 0, 70, 111), 0.1)}ac-upload.ac-upload--disabled.ac-upload--focus .ac-upload--drop-area{border-color:var(--color-alert-normal, #F0000A);cursor:not-allowed}ac-upload.ac-upload--disabled .ac-upload--drop-area{cursor:not-allowed;pointer-events:none}";

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
const AcUpload = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.change = createEvent(this, "uploadFile", 7);
    this.theme = 'primary';
    this.name = undefined;
    this.uploadButtonText = undefined;
    this.value = undefined;
    this.disabled = false;
    this.focus = undefined;
  }
  onHighLight(e) {
    e.preventDefault();
    e.stopPropagation();
    this.focus = true;
  }
  onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.disabled) {
      this.nativeInput.files = e.dataTransfer.files;
      this.handleChange();
    }
    this.focus = false;
  }
  onLeave() {
    this.focus = false;
  }
  async handleClick() {
    this.nativeInput.click();
  }
  async removeFiles() {
    this.nativeInput.value = '';
  }
  async handleChange() {
    this.value = this.nativeInput.files;
    this.change.emit(this.nativeInput.files);
  }
  render() {
    return (h(Host, { class: {
        [`ac-upload--${this.theme}`]: this.theme !== undefined,
        'ac-upload--focus': this.focus,
        'ac-upload--disabled': this.disabled
      } }, h("label", { class: "ac-upload--drop-area" }, h("input", { onChange: this.handleChange, name: this.name, class: "ac-upload--native-input", type: "file", ref: nativeInput => this.nativeInput = nativeInput }), h("div", { class: "ac-upload--wrapper" }, h("div", { class: "ac-upload--content" }, h("slot", { name: "content" })), h("ac-button", { class: "ac-upload--button", theme: this.theme, disabled: this.disabled, onClick: this.handleClick }, h("ac-fa-icon", { slot: "icon-start", icon: faUpload, size: 14 }), this.uploadButtonText)))));
  }
};
__decorate([
  Bind
], AcUpload.prototype, "handleClick", null);
__decorate([
  Bind
], AcUpload.prototype, "handleChange", null);
AcUpload.style = acUploadCss;

export { AcUpload as ac_upload };

//# sourceMappingURL=ac-upload.entry.js.map