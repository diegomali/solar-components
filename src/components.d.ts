/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AcButton {
    'text': string;
    'tooltip': string;
    'type': string;
  }
  interface AcButtonAttributes extends StencilHTMLAttributes {
    'text'?: string;
    'tooltip'?: string;
    'type'?: string;
  }

  interface AcInput {
    'label': string;
  }
  interface AcInputAttributes extends StencilHTMLAttributes {
    'label'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AcButton': Components.AcButton;
    'AcInput': Components.AcInput;
  }

  interface StencilIntrinsicElements {
    'ac-button': Components.AcButtonAttributes;
    'ac-input': Components.AcInputAttributes;
  }


  interface HTMLAcButtonElement extends Components.AcButton, HTMLStencilElement {}
  var HTMLAcButtonElement: {
    prototype: HTMLAcButtonElement;
    new (): HTMLAcButtonElement;
  };

  interface HTMLAcInputElement extends Components.AcInput, HTMLStencilElement {}
  var HTMLAcInputElement: {
    prototype: HTMLAcInputElement;
    new (): HTMLAcInputElement;
  };

  interface HTMLElementTagNameMap {
    'ac-button': HTMLAcButtonElement
    'ac-input': HTMLAcInputElement
  }

  interface ElementTagNameMap {
    'ac-button': HTMLAcButtonElement;
    'ac-input': HTMLAcInputElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}