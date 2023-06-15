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
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { h } from '@stencil/core';
import { FormFieldBehavior } from '../../../behaviors/form-behavior';
import { Bind } from '../../../utils/lang/bind';
import { AcFaIcon } from '../../utils/ac-fa-icon';
import { LazyAirDatePicker } from './assets/lazy-air-date-picker';
export class AirDatePicker {
  constructor() {
    /**
     * The FormFieldBehavior instance.
     */
    this.formFieldBehavior = new FormFieldBehavior(this);
    this.label = 'Date';
    this.classes = '';
    this.inline = false;
    this.language = 'en';
    this.startDate = new Date();
    this.firstDay = '';
    this.weekends = [6, 0];
    this.dateFormat = '';
    this.altField = '';
    this.altFieldDateFormat = '@';
    this.toggleSelected = true;
    this.keyboardNav = true;
    this.position = 'bottom left';
    this.offset = 12;
    this.view = 'days';
    this.minView = 'days';
    this.showOtherMonths = true;
    this.selectOtherMonths = true;
    this.moveToOtherMonthsOnSelect = true;
    this.showOtherYears = true;
    this.selectOtherYears = true;
    this.moveToOtherYearsOnSelect = true;
    this.minDate = '';
    this.maxDate = '';
    this.disableNavWhenOutOfRange = true;
    this.multipleDates = undefined;
    this.multipleDatesSeparator = ', ';
    this.range = false;
    this.todayButton = false;
    this.clearButton = false;
    this.showEvent = 'focus';
    this.autoClose = false;
    this.monthsField = 'monthsShort';
    this.timepicker = false;
    this.onlyTimepicker = false;
    this.dateTimeSeparator = ' ';
    this.timeFormat = '';
    this.minHours = 0;
    this.maxHours = 24;
    this.minMinutes = 0;
    this.maxMinutes = 59;
    this.hoursStep = 1;
    this.minutesStep = 1;
    this.name = undefined;
    this.disabled = undefined;
    this.required = undefined;
    this.validity = undefined;
    this.validator = undefined;
    this.value = undefined;
    this.isShowing = undefined;
    this.formattedValue = undefined;
  }
  componentDidLoad() {
    this._picker = new LazyAirDatePicker(this.acInputBase, {
      classes: this.classes,
      inline: this.inline,
      language: this.language,
      startDate: this.startDate,
      firstDay: this.firstDay,
      weekends: this.weekends,
      dateFormat: this.dateFormat,
      altField: this.altField,
      altFieldDateFormat: this.altFieldDateFormat,
      toggleSelected: this.toggleSelected,
      keyboardNav: this.keyboardNav,
      position: this.position,
      offset: this.offset,
      view: this.view,
      minView: this.minView,
      showOtherMonths: this.showOtherMonths,
      selectOtherMonths: this.selectOtherMonths,
      moveToOtherMonthsOnSelect: this.moveToOtherMonthsOnSelect,
      showOtherYears: this.showOtherYears,
      selectOtherYears: this.selectOtherYears,
      moveToOtherYearsOnSelect: this.moveToOtherYearsOnSelect,
      minDate: this.minDate,
      maxDate: this.maxDate,
      disableNavWhenOutOfRange: this.disableNavWhenOutOfRange,
      multipleDates: this.multipleDates,
      multipleDatesSeparator: this.multipleDatesSeparator,
      range: this.range,
      todayButton: this.todayButton,
      clearButton: this.clearButton,
      showEvent: this.showEvent,
      autoClose: this.autoClose,
      monthsField: this.monthsField,
      timepicker: this.timepicker,
      onlyTimepicker: this.onlyTimepicker,
      dateTimeSeparator: this.dateTimeSeparator,
      timeFormat: this.timeFormat,
      minHours: this.minHours,
      maxHours: this.maxHours,
      minMinutes: this.minMinutes,
      maxMinutes: this.maxMinutes,
      hoursStep: this.hoursStep,
      minutesStep: this.minutesStep,
      onSelect: this.handleSelect,
      onShow: this.handleShow,
      onHide: this.handleHide,
      onChangeMonth: (month, year) => this.onChangeMonth.emit({ month, year }),
      onChangeYear: (year) => this.onChangeYear.emit({ year }),
      onChangeDecade: (decade) => this.onChangeDecade.emit({ decade }),
      onChangeView: (view) => this.onChangeView.emit({ view }),
      onRenderCell: (date, cellType) => this.onRenderCell.emit({ date, cellType })
    });
  }
  disconnectedCallback() { }
  async show() {
    this._picker.show();
    this.isShowing = true;
  }
  async hide() {
    this._picker.hide();
    this.isShowing = false;
  }
  async destroy() {
    this._picker.destroy();
  }
  async next() {
    this._picker.next();
  }
  async prev() {
    this._picker.prev();
  }
  async selectDate(date) {
    this._picker.selectDate(date);
  }
  async removeDate(date) {
    this._picker.removeDate(date);
  }
  async clear() {
    this._picker.clear();
  }
  async update(field, value) {
    this._picker.show(field, value);
  }
  async setView(view) {
    this._picker.view = view;
  }
  async setDate(date) {
    this._picker.date = date;
  }
  async getElement() {
    return this._picker.$el;
  }
  async getSelectedDates() {
    return this._picker.selectedDates;
  }
  async getFormFieldBehavior() {
    return this.formFieldBehavior;
  }
  handleSelect(formattedDate, date, inst) {
    this.onSelect.emit({ formattedDate, date, inst });
    this.value = date;
    this.formattedValue = formattedDate;
  }
  handleShow(inst, animationCompleted) {
    this.onShow.emit({ inst, animationCompleted });
    this.isShowing = true;
  }
  handleHide(inst, animationCompleted) {
    this.onHide.emit({ inst, animationCompleted });
    this.isShowing = false;
  }
  toggleButton() {
    if (!this.isShowing) {
      this.show();
    }
  }
  render() {
    return (h("ac-input-base", { label: this.label, ref: acInputBase => this.acInputBase = acInputBase, value: this.formattedValue, name: this.name, disabled: this.disabled, required: this.required }, h("ac-button", { slot: "item-end", theme: this.isShowing ? 'primary' : 'light', fill: "flat", onClick: this.toggleButton, "icon-only": true }, h(AcFaIcon, { icon: faCalendarAlt, size: 14 }))));
  }
  static get is() { return "ac-date-picker"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-date-picker.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-date-picker.css"]
    };
  }
  static get properties() {
    return {
      "label": {
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
          "text": ""
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "'Date'"
      },
      "classes": {
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
          "text": ""
        },
        "attribute": "classes",
        "reflect": false,
        "defaultValue": "''"
      },
      "inline": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "inline",
        "reflect": false,
        "defaultValue": "false"
      },
      "language": {
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
          "text": ""
        },
        "attribute": "language",
        "reflect": false,
        "defaultValue": "'en'"
      },
      "startDate": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Date",
          "resolved": "Date",
          "references": {
            "Date": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "new Date()"
      },
      "firstDay": {
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
          "text": ""
        },
        "attribute": "first-day",
        "reflect": false,
        "defaultValue": "''"
      },
      "weekends": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "number[]",
          "resolved": "number[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "[6, 0]"
      },
      "dateFormat": {
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
          "text": ""
        },
        "attribute": "date-format",
        "reflect": false,
        "defaultValue": "''"
      },
      "altField": {
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
          "text": ""
        },
        "attribute": "alt-field",
        "reflect": false,
        "defaultValue": "''"
      },
      "altFieldDateFormat": {
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
          "text": ""
        },
        "attribute": "alt-field-date-format",
        "reflect": false,
        "defaultValue": "'@'"
      },
      "toggleSelected": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "toggle-selected",
        "reflect": false,
        "defaultValue": "true"
      },
      "keyboardNav": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "keyboard-nav",
        "reflect": false,
        "defaultValue": "true"
      },
      "position": {
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
          "text": ""
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'bottom left'"
      },
      "offset": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "offset",
        "reflect": false,
        "defaultValue": "12"
      },
      "view": {
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
          "text": ""
        },
        "attribute": "view",
        "reflect": false,
        "defaultValue": "'days'"
      },
      "minView": {
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
          "text": ""
        },
        "attribute": "min-view",
        "reflect": false,
        "defaultValue": "'days'"
      },
      "showOtherMonths": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "show-other-months",
        "reflect": false,
        "defaultValue": "true"
      },
      "selectOtherMonths": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "select-other-months",
        "reflect": false,
        "defaultValue": "true"
      },
      "moveToOtherMonthsOnSelect": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "move-to-other-months-on-select",
        "reflect": false,
        "defaultValue": "true"
      },
      "showOtherYears": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "show-other-years",
        "reflect": false,
        "defaultValue": "true"
      },
      "selectOtherYears": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "select-other-years",
        "reflect": false,
        "defaultValue": "true"
      },
      "moveToOtherYearsOnSelect": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "move-to-other-years-on-select",
        "reflect": false,
        "defaultValue": "true"
      },
      "minDate": {
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
          "text": ""
        },
        "attribute": "min-date",
        "reflect": false,
        "defaultValue": "''"
      },
      "maxDate": {
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
          "text": ""
        },
        "attribute": "max-date",
        "reflect": false,
        "defaultValue": "''"
      },
      "disableNavWhenOutOfRange": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "disable-nav-when-out-of-range",
        "reflect": false,
        "defaultValue": "true"
      },
      "multipleDates": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "boolean | number",
          "resolved": "boolean | number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "multiple-dates",
        "reflect": false
      },
      "multipleDatesSeparator": {
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
          "text": ""
        },
        "attribute": "multiple-dates-separator",
        "reflect": false,
        "defaultValue": "', '"
      },
      "range": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "range",
        "reflect": false,
        "defaultValue": "false"
      },
      "todayButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "today-button",
        "reflect": false,
        "defaultValue": "false"
      },
      "clearButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "clear-button",
        "reflect": false,
        "defaultValue": "false"
      },
      "showEvent": {
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
          "text": ""
        },
        "attribute": "show-event",
        "reflect": false,
        "defaultValue": "'focus'"
      },
      "autoClose": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "auto-close",
        "reflect": false,
        "defaultValue": "false"
      },
      "monthsField": {
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
          "text": ""
        },
        "attribute": "months-field",
        "reflect": false,
        "defaultValue": "'monthsShort'"
      },
      "timepicker": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "timepicker",
        "reflect": false,
        "defaultValue": "false"
      },
      "onlyTimepicker": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "only-timepicker",
        "reflect": false,
        "defaultValue": "false"
      },
      "dateTimeSeparator": {
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
          "text": ""
        },
        "attribute": "date-time-separator",
        "reflect": false,
        "defaultValue": "' '"
      },
      "timeFormat": {
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
          "text": ""
        },
        "attribute": "time-format",
        "reflect": false,
        "defaultValue": "''"
      },
      "minHours": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "min-hours",
        "reflect": false,
        "defaultValue": "0"
      },
      "maxHours": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "max-hours",
        "reflect": false,
        "defaultValue": "24"
      },
      "minMinutes": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "min-minutes",
        "reflect": false,
        "defaultValue": "0"
      },
      "maxMinutes": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "max-minutes",
        "reflect": false,
        "defaultValue": "59"
      },
      "hoursStep": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "hours-step",
        "reflect": false,
        "defaultValue": "1"
      },
      "minutesStep": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "minutes-step",
        "reflect": false,
        "defaultValue": "1"
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
          "text": "The form field name."
        },
        "attribute": "name",
        "reflect": true
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If this field is in the disabled state."
        },
        "attribute": "disabled",
        "reflect": true
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If this field component is required."
        },
        "attribute": "required",
        "reflect": true
      },
      "validity": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "CustomValidityState",
          "resolved": "{ [x: string]: boolean | { message?: string; }; }",
          "references": {
            "CustomValidityState": {
              "location": "import",
              "path": "../../../utils/validations/validations"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The validity state of the FormField."
        }
      },
      "validator": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "ValidatorFn | ValidatorFn[]",
          "resolved": "((value: any, field: FormFieldBehavior, form: FormBehavior) => CustomValidityState | Promise<CustomValidityState>) | ValidatorFn[]",
          "references": {
            "ValidatorFn": {
              "location": "import",
              "path": "../../../utils/validations/validations"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The validators that ensure the field validity."
        }
      },
      "value": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Date | Date[]",
          "resolved": "Date | Date[]",
          "references": {
            "Date": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The field value of the component."
        }
      },
      "isShowing": {
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
          "text": ""
        },
        "attribute": "is-showing",
        "reflect": false
      },
      "formattedValue": {
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
          "text": ""
        },
        "attribute": "formatted-value",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "onSelect",
        "name": "onSelect",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "onShow",
        "name": "onShow",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "onHide",
        "name": "onHide",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "onChangeMonth",
        "name": "onChangeMonth",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "onChangeYear",
        "name": "onChangeYear",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "onChangeDecade",
        "name": "onChangeDecade",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "onChangeView",
        "name": "onChangeView",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "onRenderCell",
        "name": "onRenderCell",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "hide": {
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
      "destroy": {
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
      "next": {
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
      "prev": {
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
      "selectDate": {
        "complexType": {
          "signature": "(date: Date) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "Date": {
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
      "removeDate": {
        "complexType": {
          "signature": "(date: Date) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "Date": {
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
      "clear": {
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
      "update": {
        "complexType": {
          "signature": "(field: string, value: any) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }, {
              "tags": [],
              "text": ""
            }],
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
      "setView": {
        "complexType": {
          "signature": "(view: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
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
      "setDate": {
        "complexType": {
          "signature": "(date: Date) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "Date": {
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
      "getElement": {
        "complexType": {
          "signature": "() => Promise<HTMLElement>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLElement": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLElement>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "getSelectedDates": {
        "complexType": {
          "signature": "() => Promise<Date[]>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "Date": {
              "location": "global"
            }
          },
          "return": "Promise<Date[]>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "getFormFieldBehavior": {
        "complexType": {
          "signature": "() => Promise<any>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<any>"
        },
        "docs": {
          "text": "Used to provide access to the FormField instance.",
          "tags": [{
              "name": "Method",
              "text": undefined
            }]
        }
      }
    };
  }
  static get elementRef() { return "host"; }
}
__decorate([
  Bind
], AirDatePicker.prototype, "show", null);
__decorate([
  Bind
], AirDatePicker.prototype, "hide", null);
__decorate([
  Bind
], AirDatePicker.prototype, "selectDate", null);
__decorate([
  Bind
], AirDatePicker.prototype, "handleSelect", null);
__decorate([
  Bind
], AirDatePicker.prototype, "handleShow", null);
__decorate([
  Bind
], AirDatePicker.prototype, "handleHide", null);
__decorate([
  Bind
], AirDatePicker.prototype, "toggleButton", null);
//# sourceMappingURL=ac-date-picker.js.map
