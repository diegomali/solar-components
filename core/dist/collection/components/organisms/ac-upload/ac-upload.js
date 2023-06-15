var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Host, h } from '@stencil/core';
import { Bind } from '../../../utils/lang/bind';
export class AcUpload {
  constructor() {
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
  static get is() { return "ac-upload"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-upload.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-upload.css"]
    };
  }
  static get properties() {
    return {
      "theme": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The theme color defined in the color palette. The default is primary."
        },
        "attribute": "theme",
        "reflect": true,
        "defaultValue": "'primary'"
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The name to native input."
        },
        "attribute": "name",
        "reflect": false
      },
      "uploadButtonText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Text introduced in Button upload."
        },
        "attribute": "upload-button-text",
        "reflect": false
      },
      "value": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "FileList",
          "resolved": "FileList",
          "references": {
            "FileList": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      },
      "disabled": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Disabled upload files."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "focus": {}
    };
  }
  static get events() {
    return [{
        "method": "change",
        "name": "uploadFile",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event when a file is dropped."
        },
        "complexType": {
          "original": "FileList",
          "resolved": "FileList",
          "references": {
            "FileList": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "handleClick": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "removeFiles": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get listeners() {
    return [{
        "name": "dragover",
        "method": "onHighLight",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "drop",
        "method": "onDrop",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "dragleave",
        "method": "onLeave",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}
__decorate([
  Bind
], AcUpload.prototype, "handleClick", null);
__decorate([
  Bind
], AcUpload.prototype, "handleChange", null);
//# sourceMappingURL=ac-upload.js.map
