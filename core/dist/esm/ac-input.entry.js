import { r as registerInstance, h, g as getElement } from './index-253b3ca9.js';
import { d as faEyeSlash, e as faEye } from './index.es-9ca36090.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-9943807e.js';
import { F as FormFieldBehavior } from './form-field-behavior-a15dc06a.js';
import { B as Bind } from './bind-952a1624.js';
import { A as AcFaIcon } from './ac-fa-icon-8b19be0a.js';
import './browser-0c2448ad.js';
import './component-behavior-12d14453.js';

var vanillaMasker = createCommonjsModule(function (module, exports) {
(function(root, factory) {
  {
    module.exports = factory();
  }
}(commonjsGlobal, function() {
  var DIGIT = "9",
      ALPHA = "A",
      ALPHANUM = "S",
      BY_PASS_KEYS = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93],
      isAllowedKeyCode = function(keyCode) {
        for (var i = 0, len = BY_PASS_KEYS.length; i < len; i++) {
          if (keyCode == BY_PASS_KEYS[i]) {
            return false;
          }
        }
        return true;
      },
      mergeMoneyOptions = function(opts) {
        opts = opts || {};
        opts = {
          delimiter: opts.delimiter || ".",
          lastOutput: opts.lastOutput,
          precision: opts.hasOwnProperty("precision") ? opts.precision : 2,
          separator: opts.separator || ",",
          showSignal: opts.showSignal,
          suffixUnit: opts.suffixUnit && (" " + opts.suffixUnit.replace(/[\s]/g,'')) || "",
          unit: opts.unit && (opts.unit.replace(/[\s]/g,'') + " ") || "",
          zeroCents: opts.zeroCents
        };
        opts.moneyPrecision = opts.zeroCents ? 0 : opts.precision;
        return opts;
      },
      // Fill wildcards past index in output with placeholder
      addPlaceholdersToOutput = function(output, index, placeholder) {
        for (; index < output.length; index++) {
          if(output[index] === DIGIT || output[index] === ALPHA || output[index] === ALPHANUM) {
            output[index] = placeholder;
          }
        }
        return output;
      }
  ;

  var VanillaMasker = function(elements) {
    this.elements = elements;
  };

  VanillaMasker.prototype.unbindElementToMask = function() {
    for (var i = 0, len = this.elements.length; i < len; i++) {
      this.elements[i].lastOutput = "";
      this.elements[i].onkeyup = false;
      this.elements[i].onkeydown = false;

      if (this.elements[i].value.length) {
        this.elements[i].value = this.elements[i].value.replace(/\D/g, '');
      }
    }
  };

  VanillaMasker.prototype.bindElementToMask = function(maskFunction) {
    var that = this,
        onType = function(e) {
          e = e || window.event;
          var source = e.target || e.srcElement;

          if (isAllowedKeyCode(e.keyCode)) {
            setTimeout(function() {
              that.opts.lastOutput = source.lastOutput;
              source.value = VMasker[maskFunction](source.value, that.opts);
              source.lastOutput = source.value;
              if (source.setSelectionRange && that.opts.suffixUnit) {
                source.setSelectionRange(source.value.length, (source.value.length - that.opts.suffixUnit.length));
              }
            }, 0);
          }
        }
    ;
    for (var i = 0, len = this.elements.length; i < len; i++) {
      this.elements[i].lastOutput = "";
      this.elements[i].onkeyup = onType;
      if (this.elements[i].value.length) {
        this.elements[i].value = VMasker[maskFunction](this.elements[i].value, this.opts);
      }
    }
  };

  VanillaMasker.prototype.maskMoney = function(opts) {
    this.opts = mergeMoneyOptions(opts);
    this.bindElementToMask("toMoney");
  };

  VanillaMasker.prototype.maskNumber = function() {
    this.opts = {};
    this.bindElementToMask("toNumber");
  };
  
  VanillaMasker.prototype.maskAlphaNum = function() {
    this.opts = {};
    this.bindElementToMask("toAlphaNumeric");
  };

  VanillaMasker.prototype.maskPattern = function(pattern) {
    this.opts = {pattern: pattern};
    this.bindElementToMask("toPattern");
  };

  VanillaMasker.prototype.unMask = function() {
    this.unbindElementToMask();
  };

  var VMasker = function(el) {
    if (!el) {
      throw new Error("VanillaMasker: There is no element to bind.");
    }
    var elements = ("length" in el) ? (el.length ? el : []) : [el];
    return new VanillaMasker(elements);
  };

  VMasker.toMoney = function(value, opts) {
    opts = mergeMoneyOptions(opts);
    if (opts.zeroCents) {
      opts.lastOutput = opts.lastOutput || "";
      var zeroMatcher = ("("+ opts.separator +"[0]{0,"+ opts.precision +"})"),
          zeroRegExp = new RegExp(zeroMatcher, "g"),
          digitsLength = value.toString().replace(/[\D]/g, "").length || 0,
          lastDigitLength = opts.lastOutput.toString().replace(/[\D]/g, "").length || 0
      ;
      value = value.toString().replace(zeroRegExp, "");
      if (digitsLength < lastDigitLength) {
        value = value.slice(0, value.length - 1);
      }
    }
    var number = value.toString().replace(/[\D]/g, ""),
        clearDelimiter = new RegExp("^(0|\\"+ opts.delimiter +")"),
        clearSeparator = new RegExp("(\\"+ opts.separator +")$"),
        money = number.substr(0, number.length - opts.moneyPrecision),
        masked = money.substr(0, money.length % 3),
        cents = new Array(opts.precision + 1).join("0")
    ;
    money = money.substr(money.length % 3, money.length);
    for (var i = 0, len = money.length; i < len; i++) {
      if (i % 3 === 0) {
        masked += opts.delimiter;
      }
      masked += money[i];
    }
    masked = masked.replace(clearDelimiter, "");
    masked = masked.length ? masked : "0";
    var signal = "";
    if(opts.showSignal === true) {
      signal = value < 0 || (value.startsWith && value.startsWith('-')) ? "-" :  "";
    }
    if (!opts.zeroCents) {
      var beginCents = number.length - opts.precision,
          centsValue = number.substr(beginCents, opts.precision),
          centsLength = centsValue.length,
          centsSliced = (opts.precision > centsLength) ? opts.precision : centsLength
      ;
      cents = (cents + centsValue).slice(-centsSliced);
    }
    var output = opts.unit + signal + masked + opts.separator + cents;
    return output.replace(clearSeparator, "") + opts.suffixUnit;
  };

  VMasker.toPattern = function(value, opts) {
    var pattern = (typeof opts === 'object' ? opts.pattern : opts),
        patternChars = pattern.replace(/\W/g, ''),
        output = pattern.split(""),
        values = value.toString().replace(/\W/g, ""),
        charsValues = values.replace(/\W/g, ''),
        index = 0,
        i,
        outputLength = output.length,
        placeholder = (typeof opts === 'object' ? opts.placeholder : undefined)
    ;
    
    for (i = 0; i < outputLength; i++) {
      // Reached the end of input
      if (index >= values.length) {
        if (patternChars.length == charsValues.length) {
          return output.join("");
        }
        else if ((placeholder !== undefined) && (patternChars.length > charsValues.length)) {
          return addPlaceholdersToOutput(output, i, placeholder).join("");
        }
        else {
          break;
        }
      }
      // Remaining chars in input
      else {
        if ((output[i] === DIGIT && values[index].match(/[0-9]/)) ||
            (output[i] === ALPHA && values[index].match(/[a-zA-Z]/)) ||
            (output[i] === ALPHANUM && values[index].match(/[0-9a-zA-Z]/))) {
          output[i] = values[index++];
        } else if (output[i] === DIGIT || output[i] === ALPHA || output[i] === ALPHANUM) {
          if(placeholder !== undefined){
            return addPlaceholdersToOutput(output, i, placeholder).join("");
          }
          else {
            return output.slice(0, i).join("");
          }
        }
      }
    }
    return output.join("").substr(0, i);
  };

  VMasker.toNumber = function(value) {
    return value.toString().replace(/(?!^-)[^0-9]/g, "");
  };
  
  VMasker.toAlphaNumeric = function(value) {
    return value.toString().replace(/[^a-z0-9 ]+/i, "");
  };

  return VMasker;
}));
});

const acInputCss = "ac-input{display:flex;flex-direction:column}ac-input .ac-input__helper-text{display:block;margin-top:8px;color:var(--color-neutral-dark, #A0A0A0);font-size:12px}ac-input.form-field--invalid .ac-input__helper-text{color:var(--color-alert-normal, #F0000A)}";

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
const AcInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The FormFieldBehavior instance.
     */
    this.formFieldBehavior = new FormFieldBehavior(this);
    this.label = undefined;
    this.type = undefined;
    this.helperText = undefined;
    this.validateOnKeyup = undefined;
    this.value = undefined;
    this.error = undefined;
    this.validity = undefined;
    this.validator = undefined;
    this.mask = undefined;
    this.name = undefined;
    this.disabled = undefined;
    this.required = undefined;
    this.pattern = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.autofocus = undefined;
    this.autocomplete = undefined;
    this.autocapitalize = undefined;
    this.placeholder = undefined;
    this.step = undefined;
    this.isShowingPassword = undefined;
  }
  /**
   * Set the error state based on the error prop.
   * @param error An error message.
   */
  errorDidUpdate(error) {
    if (error) {
      if (error === 'true') {
        this.error = true;
      }
      this.acInputBase.error = true;
      this.formFieldBehavior.setInvalid();
    }
    else {
      this.acInputBase.error = false;
      this.formFieldBehavior.setValid();
    }
  }
  /**
   * Applies transformations when the value update.
   */
  valueDidUpdate() {
    // Masking when value update programmatically
    if (this.value && this.mask) {
      this.value = vanillaMasker.toPattern(this.value, this.mask);
    }
  }
  /**
   * Applies transformations when the mask update.
   */
  async maskDidUpdate() {
    // Masking when value update programmatically
    if (this.value) {
      this.value = this.mask ? vanillaMasker.toPattern(this.value, this.mask) : await this.getRawValue(this.type);
    }
  }
  async handleKeyup() {
    if (this.validateOnKeyup) {
      this.formFieldBehavior.checkValidity((await this.getNativeFormField()).value);
    }
  }
  /**
   * Update the value and run validations as if the user change it manually.
   * When to use each:
   * input.value will only update the value, useful to set the initial value of the input.
   * input.setValue is useful to use values that are automatically set by an user's action, setting the unchecked state
   * to the form.
   */
  async setValue(value) {
    this.value = value;
    // @TODO: Review how to set the dirty state in the form for programmatically value changes.
    this.formFieldBehavior.setDirty();
    this.formFieldBehavior.checkValidity();
  }
  /**
   * Get the unmasked value.
   */
  async getRawValue(type = 'text') {
    const value = (await this.acInputBase.getNativeInput()).value || this.value;
    if (!value) {
      return null;
    }
    if (type === 'text') {
      return value.toString().replace(/[^a-z0-9 ]+/ig, '');
    }
    else {
      return vanillaMasker.toNumber(value);
    }
  }
  /**
   * Set focus state in the native input.
   */
  async setFocus() {
    return this.acInputBase.setFocus();
  }
  async getNativeFormField() {
    return this.acInputBase.getNativeInput();
  }
  async getFormFieldBehavior() {
    return this.formFieldBehavior;
  }
  async componentDidLoad() {
    this.errorDidUpdate(this.error);
    if (this.mask) {
      vanillaMasker(await this.acInputBase.getNativeInput()).maskPattern(this.mask);
      // Masking the initial value
      if (this.value) {
        this.value = vanillaMasker.toPattern(this.value, this.mask);
      }
    }
  }
  disconnectedCallback() { }
  /**
   * Toggle the password view.
   */
  togglePassword() {
    this.isShowingPassword = !this.isShowingPassword;
  }
  /**
   * Used as a listener to the change event. Dispatch form field validations.
   */
  handleChange() {
    this.value = this.acInputBase.value;
    this.formFieldBehavior.setDirty();
    this.formFieldBehavior.checkValidity();
  }
  /**
   * Used as a listener to the blur event. Dispatch form field validations.
   */
  handleBlur() {
    this.formFieldBehavior.setTouched();
  }
  render() {
    const icon = this.isShowingPassword ? faEyeSlash : faEye;
    return [
      h("ac-input-base", { ref: acInputBase => {
          this.acInputBase = acInputBase;
        }, label: this.label, name: this.name, type: this.isShowingPassword ? 'text' : this.type, pattern: this.pattern, value: this.value, disabled: this.disabled, required: this.required, max: this.max, min: this.min, maxlength: this.maxlength, minlength: this.minlength, step: this.step, autofocus: this.autofocus, autocomplete: this.autocomplete, autocapitalize: this.autocapitalize, onChange: this.handleChange, onBlur: this.handleBlur, placeholder: this.placeholder }, h("slot", { name: "item-start", slot: "item-start" }), h("slot", { name: "input-label", slot: "input-label" }), this.type === 'password'
        ? h("ac-button", { slot: "item-end", onClick: this.togglePassword, "icon-only": true, fill: "flat" }, h(AcFaIcon, { icon: icon, size: 14 }))
        : h("slot", { name: "item-end", slot: "item-end" })),
      // Only present message if it is a string. Preventing unnecessary margin effect.
      (this.error && typeof this.error === 'string') || (this.helperText && typeof this.helperText === 'string')
        ? h("span", { class: "ac-input__helper-text" }, this.error || this.helperText)
        : null
    ];
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "error": ["errorDidUpdate"],
    "value": ["valueDidUpdate"],
    "mask": ["maskDidUpdate"]
  }; }
};
__decorate([
  Bind
], AcInput.prototype, "togglePassword", null);
__decorate([
  Bind
], AcInput.prototype, "handleChange", null);
__decorate([
  Bind
], AcInput.prototype, "handleBlur", null);
AcInput.style = acInputCss;

export { AcInput as ac_input };

//# sourceMappingURL=ac-input.entry.js.map