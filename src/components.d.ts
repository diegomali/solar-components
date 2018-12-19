/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  AcPanelItem,
} from './components/atoms/ac-panel/ac-panel';
import {
  FormFieldLogic,
  ValidatorFunction,
} from './helpers/form-field-logic';
import {
  AcPanelItem as AcPanelItem2,
} from './components/atoms/ac-panel/ac-panel';


export namespace Components {

  interface AcButton {
    /**
    * The HTML5 native disable prop.
    */
    'disabled'?: boolean;
    /**
    * Fill mode: * flat - No borders and no raising * solid - Raised button, default * clear - No background and no borders
    */
    'fill': 'clear' | 'solid' | 'flat';
    /**
    * An optional link to open when click on it. Turns the button into a anchor element.
    */
    'href'?: string;
    /**
    * Icon only mode, with a square button, centered icon.
    */
    'iconOnly': boolean;
    /**
    * The size of the button: * small - height: 36px * big - height: 50px * default - 44px
    */
    'size'?: 'small' | 'big';
    /**
    * The HTML5 native anchor target to handle the href property.
    */
    'target'?: '_blank' | '_self' | '_parent' | '_top' | string;
    /**
    * The theme color defined in the color palette. The default is white.
    */
    'theme'?: string;
    /**
    * When hover this button, present a tootip text.
    */
    'tooltip'?: string;
    /**
    * The HTML5 button type. See https://mdn.io/button
    */
    'type': 'button' | 'submit' | 'reset';
  }
  interface AcButtonAttributes extends StencilHTMLAttributes {
    /**
    * The HTML5 native disable prop.
    */
    'disabled'?: boolean;
    /**
    * Fill mode: * flat - No borders and no raising * solid - Raised button, default * clear - No background and no borders
    */
    'fill'?: 'clear' | 'solid' | 'flat';
    /**
    * An optional link to open when click on it. Turns the button into a anchor element.
    */
    'href'?: string;
    /**
    * Icon only mode, with a square button, centered icon.
    */
    'iconOnly'?: boolean;
    /**
    * The size of the button: * small - height: 36px * big - height: 50px * default - 44px
    */
    'size'?: 'small' | 'big';
    /**
    * The HTML5 native anchor target to handle the href property.
    */
    'target'?: '_blank' | '_self' | '_parent' | '_top' | string;
    /**
    * The theme color defined in the color palette. The default is white.
    */
    'theme'?: string;
    /**
    * When hover this button, present a tootip text.
    */
    'tooltip'?: string;
    /**
    * The HTML5 button type. See https://mdn.io/button
    */
    'type'?: 'button' | 'submit' | 'reset';
  }

  interface AcCheck {
    /**
    * The actual checked state.
    */
    'checked': boolean;
    /**
    * The native disabled mode.
    */
    'disabled': boolean;
    /**
    * The helper text to guide the user.
    */
    'helperText': string;
    /**
    * The textual label of this field.
    */
    'label': string;
    /**
    * Set the label to the left of checkbox.
    */
    'labelLeft': boolean;
    /**
    * The HTML field name.
    */
    'name': string;
  }
  interface AcCheckAttributes extends StencilHTMLAttributes {
    /**
    * The actual checked state.
    */
    'checked'?: boolean;
    /**
    * The native disabled mode.
    */
    'disabled'?: boolean;
    /**
    * The helper text to guide the user.
    */
    'helperText'?: string;
    /**
    * The textual label of this field.
    */
    'label'?: string;
    /**
    * Set the label to the left of checkbox.
    */
    'labelLeft'?: boolean;
    /**
    * The HTML field name.
    */
    'name'?: string;
  }

  interface AcFaIcon {
    /**
    * The icon imported from @fortawesome/free-solid-svg-icons.
    */
    'icon': IconDefinition;
    /**
    * The size of the icon in px.
    */
    'size': number;
  }
  interface AcFaIconAttributes extends StencilHTMLAttributes {
    /**
    * The icon imported from @fortawesome/free-solid-svg-icons.
    */
    'icon'?: IconDefinition;
    /**
    * The size of the icon in px.
    */
    'size'?: number;
  }

  interface AcInputBase {
    /**
    * The HTML disabled mode.
    */
    'disabled': boolean;
    /**
    * The label text of the this input group.
    */
    'label': string;
    /**
    * The native HTML field name.
    */
    'name': string;
    /**
    * Enable readonly.
    */
    'readonly': boolean;
    /**
    * The native HTML required mode.
    */
    'required': boolean;
    /**
    * The type of the internal input.
    */
    'type': string;
    /**
    * The value of the internal input.
    */
    'value': any;
  }
  interface AcInputBaseAttributes extends StencilHTMLAttributes {
    /**
    * The HTML disabled mode.
    */
    'disabled'?: boolean;
    /**
    * The label text of the this input group.
    */
    'label'?: string;
    /**
    * The native HTML field name.
    */
    'name'?: string;
    /**
    * Fired when the value of the internal input changes.
    */
    'onChange'?: (event: CustomEvent<any>) => void;
    /**
    * Enable readonly.
    */
    'readonly'?: boolean;
    /**
    * The native HTML required mode.
    */
    'required'?: boolean;
    /**
    * The type of the internal input.
    */
    'type'?: string;
    /**
    * The value of the internal input.
    */
    'value'?: any;
  }

  interface AcPanel {
    /**
    * An array of items to display in this panel.
    */
    'items'?: AcPanelItem[];
  }
  interface AcPanelAttributes extends StencilHTMLAttributes {
    /**
    * An array of items to display in this panel.
    */
    'items'?: AcPanelItem[];
    /**
    * Fired when the user clicks over a item.
    */
    'onSelect'?: (event: CustomEvent<{ index: number, item: AcPanelItem }>) => void;
  }

  interface AcInput {
    /**
    * The disabled mode
    */
    'disabled': boolean;
    /**
    * The actual error message.
    */
    'error': string;
    /**
    * The form field logic.
    */
    'formField': FormFieldLogic;
    /**
    * The helper text to guide the user.
    */
    'helperText': string;
    /**
    * The label text of the this input group.
    */
    'label': string;
    /**
    * The HTML input field's name.
    */
    'name': string;
    /**
    * Set this field as required
    */
    'required': boolean;
    /**
    * The type of the internal input.
    */
    'type': string;
    /**
    * The validators that ensure the field validity.
    */
    'validateFn': ValidatorFunction | ValidatorFunction[];
    /**
    * The value of the internal input.
    */
    'value': any;
  }
  interface AcInputAttributes extends StencilHTMLAttributes {
    /**
    * The disabled mode
    */
    'disabled'?: boolean;
    /**
    * The actual error message.
    */
    'error'?: string;
    /**
    * The form field logic.
    */
    'formField'?: FormFieldLogic;
    /**
    * The helper text to guide the user.
    */
    'helperText'?: string;
    /**
    * The label text of the this input group.
    */
    'label'?: string;
    /**
    * The HTML input field's name.
    */
    'name'?: string;
    /**
    * Fired when the value of the internal input changes.
    */
    'onChange'?: (event: CustomEvent<any>) => void;
    /**
    * Set this field as required
    */
    'required'?: boolean;
    /**
    * The type of the internal input.
    */
    'type'?: string;
    /**
    * The validators that ensure the field validity.
    */
    'validateFn'?: ValidatorFunction | ValidatorFunction[];
    /**
    * The value of the internal input.
    */
    'value'?: any;
  }

  interface AcSelect {
    /**
    * Set the disabled mode.
    */
    'disabled': boolean;
    /**
    * The helper text to guide the user.
    */
    'helperText': string;
    /**
    * The label text of the this input group.
    */
    'label': string;
    /**
    * If true, the component will handle multiple selected items.
    */
    'multiple': boolean;
    /**
    * The options that will be displayed in the panel.
    */
    'options': AcPanelItem[];
    /**
    * The value of the internal input.
    */
    'value': any;
  }
  interface AcSelectAttributes extends StencilHTMLAttributes {
    /**
    * Set the disabled mode.
    */
    'disabled'?: boolean;
    /**
    * The helper text to guide the user.
    */
    'helperText'?: string;
    /**
    * The label text of the this input group.
    */
    'label'?: string;
    /**
    * If true, the component will handle multiple selected items.
    */
    'multiple'?: boolean;
    /**
    * Fired when the user select/deselect an option.
    */
    'onChange'?: (event: CustomEvent<any>) => void;
    /**
    * The options that will be displayed in the panel.
    */
    'options'?: AcPanelItem[];
    /**
    * The value of the internal input.
    */
    'value'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AcButton': Components.AcButton;
    'AcCheck': Components.AcCheck;
    'AcFaIcon': Components.AcFaIcon;
    'AcInputBase': Components.AcInputBase;
    'AcPanel': Components.AcPanel;
    'AcInput': Components.AcInput;
    'AcSelect': Components.AcSelect;
  }

  interface StencilIntrinsicElements {
    'ac-button': Components.AcButtonAttributes;
    'ac-check': Components.AcCheckAttributes;
    'ac-fa-icon': Components.AcFaIconAttributes;
    'ac-input-base': Components.AcInputBaseAttributes;
    'ac-panel': Components.AcPanelAttributes;
    'ac-input': Components.AcInputAttributes;
    'ac-select': Components.AcSelectAttributes;
  }


  interface HTMLAcButtonElement extends Components.AcButton, HTMLStencilElement {}
  var HTMLAcButtonElement: {
    prototype: HTMLAcButtonElement;
    new (): HTMLAcButtonElement;
  };

  interface HTMLAcCheckElement extends Components.AcCheck, HTMLStencilElement {}
  var HTMLAcCheckElement: {
    prototype: HTMLAcCheckElement;
    new (): HTMLAcCheckElement;
  };

  interface HTMLAcFaIconElement extends Components.AcFaIcon, HTMLStencilElement {}
  var HTMLAcFaIconElement: {
    prototype: HTMLAcFaIconElement;
    new (): HTMLAcFaIconElement;
  };

  interface HTMLAcInputBaseElement extends Components.AcInputBase, HTMLStencilElement {}
  var HTMLAcInputBaseElement: {
    prototype: HTMLAcInputBaseElement;
    new (): HTMLAcInputBaseElement;
  };

  interface HTMLAcPanelElement extends Components.AcPanel, HTMLStencilElement {}
  var HTMLAcPanelElement: {
    prototype: HTMLAcPanelElement;
    new (): HTMLAcPanelElement;
  };

  interface HTMLAcInputElement extends Components.AcInput, HTMLStencilElement {}
  var HTMLAcInputElement: {
    prototype: HTMLAcInputElement;
    new (): HTMLAcInputElement;
  };

  interface HTMLAcSelectElement extends Components.AcSelect, HTMLStencilElement {}
  var HTMLAcSelectElement: {
    prototype: HTMLAcSelectElement;
    new (): HTMLAcSelectElement;
  };

  interface HTMLElementTagNameMap {
    'ac-button': HTMLAcButtonElement
    'ac-check': HTMLAcCheckElement
    'ac-fa-icon': HTMLAcFaIconElement
    'ac-input-base': HTMLAcInputBaseElement
    'ac-panel': HTMLAcPanelElement
    'ac-input': HTMLAcInputElement
    'ac-select': HTMLAcSelectElement
  }

  interface ElementTagNameMap {
    'ac-button': HTMLAcButtonElement;
    'ac-check': HTMLAcCheckElement;
    'ac-fa-icon': HTMLAcFaIconElement;
    'ac-input-base': HTMLAcInputBaseElement;
    'ac-panel': HTMLAcPanelElement;
    'ac-input': HTMLAcInputElement;
    'ac-select': HTMLAcSelectElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
