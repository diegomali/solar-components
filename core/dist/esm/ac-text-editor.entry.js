import { r as registerInstance, h, H as Host, g as getElement } from './index-253b3ca9.js';
import { F as FormFieldBehavior } from './form-field-behavior-a15dc06a.js';
import { B as Bind } from './bind-952a1624.js';
import './browser-0c2448ad.js';
import './_commonjsHelpers-9943807e.js';
import './component-behavior-12d14453.js';

/**
 * Link referring to the javascript Medium-Editor plugin cnd.
 */
const MEDIUM_EDITOR_CDN = 'https://cdn.jsdelivr.net/npm/medium-editor@5.23.3/dist/js/medium-editor.min.js';

const acTextEditorCss = "@-webkit-keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(0.97, 0, 0, 1, 0, 12);transform:matrix(0.97, 0, 0, 1, 0, 12)}20%{opacity:0.7;-webkit-transform:matrix(0.99, 0, 0, 1, 0, 2);transform:matrix(0.99, 0, 0, 1, 0, 2)}40%{opacity:1;-webkit-transform:matrix(1, 0, 0, 1, 0, -1);transform:matrix(1, 0, 0, 1, 0, -1)}100%{-webkit-transform:matrix(1, 0, 0, 1, 0, 0);transform:matrix(1, 0, 0, 1, 0, 0)}}@keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(0.97, 0, 0, 1, 0, 12);transform:matrix(0.97, 0, 0, 1, 0, 12)}20%{opacity:0.7;-webkit-transform:matrix(0.99, 0, 0, 1, 0, 2);transform:matrix(0.99, 0, 0, 1, 0, 2)}40%{opacity:1;-webkit-transform:matrix(1, 0, 0, 1, 0, -1);transform:matrix(1, 0, 0, 1, 0, -1)}100%{-webkit-transform:matrix(1, 0, 0, 1, 0, 0);transform:matrix(1, 0, 0, 1, 0, 0)}}.medium-editor-anchor-preview{font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:16px;left:0;line-height:1.4;max-width:280px;position:absolute;text-align:center;top:0;word-break:break-all;word-wrap:break-word;visibility:hidden;z-index:2000}.medium-editor-anchor-preview a{color:#fff;display:inline-block;margin:5px 5px 10px}.medium-editor-anchor-preview-active{visibility:visible}.medium-editor-dragover{background:#ddd}.medium-editor-image-loading{-webkit-animation:medium-editor-image-loading 1s infinite ease-in-out;animation:medium-editor-image-loading 1s infinite ease-in-out;background-color:#333;border-radius:100%;display:inline-block;height:40px;width:40px}.medium-editor-placeholder{position:relative}.medium-editor-placeholder:after{content:attr(data-placeholder) !important;font-style:italic;position:absolute;left:0;top:0;white-space:pre;padding:inherit;margin:inherit}.medium-editor-placeholder-relative{position:relative}.medium-editor-placeholder-relative:after{content:attr(data-placeholder) !important;font-style:italic;position:relative;white-space:pre;padding:inherit;margin:inherit}.medium-toolbar-arrow-under:after,.medium-toolbar-arrow-over:before{border-style:solid;content:\"\";display:block;height:0;left:50%;margin-left:-8px;position:absolute;width:0}.medium-toolbar-arrow-under:after{border-width:8px 8px 0 8px}.medium-toolbar-arrow-over:before{border-width:0 8px 8px 8px;top:-8px}.medium-editor-toolbar{font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:16px;left:0;position:absolute;top:0;visibility:hidden;z-index:2000}.medium-editor-toolbar ul{margin:0;padding:0}.medium-editor-toolbar li{float:left;list-style:none;margin:0;padding:0}.medium-editor-toolbar li button{box-sizing:border-box;cursor:pointer;display:block;font-size:14px;line-height:1.33;margin:0;padding:15px;text-decoration:none}.medium-editor-toolbar li button:focus{outline:none}.medium-editor-toolbar li .medium-editor-action-underline{text-decoration:underline}.medium-editor-toolbar li .medium-editor-action-pre{font-family:Consolas, \"Liberation Mono\", Menlo, Courier, monospace;font-size:12px;font-weight:100;padding:15px 0}.medium-editor-toolbar-active{visibility:visible}.medium-editor-sticky-toolbar{position:fixed;top:1px}.medium-editor-relative-toolbar{position:relative}.medium-editor-toolbar-active.medium-editor-stalker-toolbar{-webkit-animation:medium-editor-pop-upwards 160ms forwards linear;animation:medium-editor-pop-upwards 160ms forwards linear}.medium-editor-action-bold{font-weight:bolder}.medium-editor-action-italic{font-style:italic}.medium-editor-toolbar-form{display:none}.medium-editor-toolbar-form input,.medium-editor-toolbar-form a{font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif}.medium-editor-toolbar-form .medium-editor-toolbar-form-row{line-height:14px;margin-left:5px;padding-bottom:5px}.medium-editor-toolbar-form .medium-editor-toolbar-input,.medium-editor-toolbar-form label{border:none;box-sizing:border-box;font-size:14px;margin:0;padding:6px;width:316px;display:inline-block}.medium-editor-toolbar-form .medium-editor-toolbar-input:focus,.medium-editor-toolbar-form label:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;outline:0}.medium-editor-toolbar-form a{display:inline-block;font-size:24px;font-weight:bolder;margin:0 10px;text-decoration:none}.medium-editor-toolbar-form-active{display:block}.medium-editor-toolbar-actions:after{clear:both;content:\"\";display:table}.medium-editor-element{word-wrap:break-word;min-height:30px}.medium-editor-element img{max-width:100%}.medium-editor-element sub{vertical-align:sub}.medium-editor-element sup{vertical-align:super}.medium-editor-hidden{display:none}.medium-toolbar-arrow-under:after{border-color:#000 transparent transparent transparent;top:40px}.medium-toolbar-arrow-over:before{border-color:transparent transparent #000 transparent}.medium-editor-toolbar{background-color:#000;border:none;border-radius:50px}.medium-editor-toolbar li button{background-color:transparent;border:none;box-sizing:border-box;color:#ccc;height:40px;min-width:40px;padding:5px 12px;-webkit-transition:background-color 0.2s ease-in, color 0.2s ease-in;transition:background-color 0.2s ease-in, color 0.2s ease-in}.medium-editor-toolbar li button:hover{background-color:#000;color:#a2d7c7}.medium-editor-toolbar li .medium-editor-button-first{border-bottom-left-radius:50px;border-top-left-radius:50px;padding-left:24px}.medium-editor-toolbar li .medium-editor-button-last{border-bottom-right-radius:50px;border-right:none;border-top-right-radius:50px;padding-right:24px}.medium-editor-toolbar li .medium-editor-button-active{background-color:#000;color:#a2d7c7}.medium-editor-toolbar-form{background:#000;border-radius:50px;color:#ccc;overflow:hidden}.medium-editor-toolbar-form .medium-editor-toolbar-input{background:#000;box-sizing:border-box;color:#ccc;height:40px;padding-left:16px;width:220px}.medium-editor-toolbar-form .medium-editor-toolbar-input::-webkit-input-placeholder{color:#f8f5f3;color:rgba(248, 245, 243, 0.8)}.medium-editor-toolbar-form .medium-editor-toolbar-input:-moz-placeholder{color:#f8f5f3;color:rgba(248, 245, 243, 0.8)}.medium-editor-toolbar-form .medium-editor-toolbar-input::-moz-placeholder{color:#f8f5f3;color:rgba(248, 245, 243, 0.8)}.medium-editor-toolbar-form .medium-editor-toolbar-input:-ms-input-placeholder{color:#f8f5f3;color:rgba(248, 245, 243, 0.8)}.medium-editor-toolbar-form a{color:#ccc;-webkit-transform:translateY(2px);transform:translateY(2px)}.medium-editor-toolbar-form .medium-editor-toolbar-close{margin-right:16px}.medium-editor-toolbar-anchor-preview{background:#000;border-radius:50px;padding:5px 12px}.medium-editor-anchor-preview a{color:#ccc;text-decoration:none}.medium-editor-toolbar-actions li,.medium-editor-toolbar-actions button{border-radius:50px}.medium-editor-toolbar{background-color:var(--color-primary-normal, #00466F);border-radius:4px}.medium-toolbar-arrow-under:after{border-color:var(--color-primary-normal, #00466F) transparent transparent transparent}.medium-editor-toolbar li button{border-radius:0}.medium-editor-toolbar li button:hover{background-color:var(--color-primary-dark, #00263c) !important}.medium-editor-toolbar li button.medium-editor-button-active{background-color:var(--color-primary-dark, #00263c) !important}.medium-editor-toolbar li button.medium-editor-button-first{border-bottom-left-radius:4px;border-top-left-radius:4px}.medium-editor-toolbar li button.medium-editor-button-last{border-bottom-right-radius:4px;border-top-right-radius:4px}.medium-editor-toolbar-form{background:var(--color-primary-normal, #00466F);border-radius:4px}.medium-editor-toolbar-form .medium-editor-toolbar-input{background:var(--color-primary-normal, #00466F) !important}.medium-editor-placeholder:after{font-style:normal;color:var(--color-neutral-dark, #A0A0A0)}ac-text-editor{display:block;max-height:300px;min-height:300px;width:100%;border:2px solid var(--color-neutral-light, #E6E6E6);border-radius:4px;background-color:var(--color-neutral-contrast, #FFFFFF)}ac-text-editor:focus{outline:none;border-color:var(--color-primary-normal, #00466F)}ac-text-editor .ac-text-editor__editable{width:100%;max-height:300px;min-height:300px;padding:8px}ac-text-editor .ac-text-editor__editable p{margin-block-start:0}ac-text-editor .ac-text-editor__editable:focus{outline:none}ac-text-editor.ac-text-editor--focus{border-color:var(--color-primary-normal, #00466F)}";

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
const AcTextEditor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The FormFieldBehavior instance.
     */
    this.formFieldBehavior = new FormFieldBehavior(this);
    this.validity = undefined;
    this.validator = undefined;
    this.required = undefined;
    this.disabled = undefined;
    this.name = undefined;
    this.value = '';
    this.placeholder = '';
    this.hasFocus = undefined;
  }
  componentDidLoad() {
    this.loadMedium().then(res => {
      // @ts-ignore
      this.mediumEditor = new res('.ac-text-editor__editable', {
        toolbar: {
          buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3']
        },
        placeholder: {
          text: this.placeholder
        },
        anchor: {
          placeholderText: 'Link',
        }
      });
      this.mediumEditor.subscribe('editableInput', () => {
        this.handleChange();
      });
    });
    this.mediumRef.innerHTML = this.value;
  }
  disconnectedCallback() {
  }
  loadMedium() {
    return new Promise(res => {
      const element = document.createElement('script');
      element.setAttribute('type', 'text/javascript');
      element.setAttribute('src', MEDIUM_EDITOR_CDN);
      element.onload = () => res(window.MediumEditor);
      element.onreadystatechange = () => res(window.MediumEditor);
      document.head.appendChild(element);
    });
  }
  handleFocus() {
    this.hasFocus = true;
  }
  handleBlur() {
    this.hasFocus = false;
  }
  handleChange() {
    this.value = this.mediumRef.innerHTML;
  }
  render() {
    return (h(Host, { class: {
        'ac-text-editor--focus': this.hasFocus
      } }, h("div", { ref: mediumRef => this.mediumRef = mediumRef, class: "ac-text-editor__editable", onFocus: this.handleFocus, onBlur: this.handleBlur, onChange: this.handleChange }), h("input", { name: this.name, value: this.value, type: "hidden" })));
  }
  get host() { return getElement(this); }
};
__decorate([
  Bind
], AcTextEditor.prototype, "handleFocus", null);
__decorate([
  Bind
], AcTextEditor.prototype, "handleBlur", null);
__decorate([
  Bind
], AcTextEditor.prototype, "handleChange", null);
AcTextEditor.style = acTextEditorCss;

export { AcTextEditor as ac_text_editor };

//# sourceMappingURL=ac-text-editor.entry.js.map