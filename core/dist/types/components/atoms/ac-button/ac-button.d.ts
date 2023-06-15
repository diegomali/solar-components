import { ComponentInterface } from '../../../stencil-public-runtime';
/**
 * Accera's full-featured button web-component.
 */
export declare class AcButton implements ComponentInterface {
  host: HTMLAcButtonElement;
  /**
   * The HTML5 button type.
   * See https://mdn.io/button
   */
  type: 'button' | 'submit' | 'reset';
  /**
   * The theme color defined in the color palette. The default is white.
   */
  theme: any;
  /**
   * The size of the button.
   */
  size?: 'small' | 'large';
  /**
   * Fill mode:
   * * flat - No borders and no raising
   * * solid - Raised button, default
   * * clear - No background and borders
   */
  fill: 'clear' | 'solid' | 'flat';
  /**
   * Button width.
   */
  expand: 'block' | undefined;
  /**
   * Button shape.
   */
  shape: 'round' | undefined;
  /**
   * An optional link to open when click on it.
   * Turns the button into a anchor element.
   */
  href?: string;
  /**
   * The HTML5 native anchor target to handle the href property.
   */
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  /**
   * Icon only mode, with a square button, centered icon.
   */
  iconOnly: boolean;
  /**
   * Set the loading mode, showing a loading icon.
   */
  loading: boolean;
  /**
   * The HTML5 native disable prop.
   */
  disabled?: boolean;
  render(): any;
}
