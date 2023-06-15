/**
 * The options that can be passed to the serializeForm function.
 */
export interface SerializeFormOptions {
  /**
   * The function will ignore fields that has the disabled property.
   */
  ignoreDisabled?: boolean;
}
/**
 * Serialize a Form element to JSON.
 * @param form The target form element.
 * @param options A set of custom options.
 */
export declare function serializeForm(form: HTMLFormElement, options?: SerializeFormOptions): {};
