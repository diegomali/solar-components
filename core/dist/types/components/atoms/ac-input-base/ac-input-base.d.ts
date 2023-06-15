import { ComponentInterface } from '../../../stencil-public-runtime';
/**
 * Accera's full-featured Input web-component.
 */
export declare class AcInputBase implements ComponentInterface {
  private nativeInput?;
  host: HTMLAcInputBaseElement;
  /**
   * The native HTMLInputElement name attribute.
   */
  name: string;
  /**
   * The label text of the this input group.
   */
  label: string;
  /**
   * Error mode.
   */
  error: boolean;
  /**
   * The theme color defined in the color palette.
   */
  theme: string;
  /**
   * The input's size.
   */
  size?: 'small' | 'large';
  /**
   * The value of the internal input.
   */
  value: any;
  /**
   * The type of the internal input.
   */
  type: string;
  /**
   * The native HTMLInputElement pattern attribute.
   */
  pattern: string;
  /**
   * Enable readonly.
   */
  readonly: boolean;
  /**
   * The HTMLInputElement disabled attribute.
   */
  disabled: boolean;
  /**
   * The native HTMLInputElement required attribute.
   */
  required: boolean;
  /**
   * The native HTMLInputElement max attribute.
   */
  max: number;
  /**
   * The native HTMLInputElement maxlength attribute.
   */
  maxlength: number;
  /**
   * The native HTMLInputElement min attribute.
   */
  min: number;
  /**
   * The native HTMLInputElement min attribute.
   */
  minlength: number;
  /**
   * The native HTMLInputElement autofocus attribute.
   */
  autofocus: boolean;
  /**
   * The native HTMLInputElement autocomplete attribute.
   */
  autocomplete: string;
  /**
   * The native HTMLInputElement autocapitalize attribute.
   */
  autocapitalize: string;
  /**
   * The native HTMLInputElement placeholder attribute.
   */
  placeholder: string;
  /**
   * The native HTMLInputElement step attribute.
   */
  step: number;
  hasFocus: boolean;
  getNativeInput(): Promise<HTMLInputElement>;
  /**
   * Set focus state in the native input.
   */
  setFocus(): Promise<void>;
  private handleFocus;
  private handleBlur;
  private handleChange;
  render(): any;
}
