/**
 * Controls the state of scroll actions.
 * Thanks to @galambalazs.
 */
export declare class ScrollManager {
  static isDisabled: boolean;
  static isDisabledForAll: boolean;
  /**
   * A map object that list, enable/disable each keys that manipulate the scroll into the window.
   * left: 37, up: 38, right: 39, down: 40,
   * spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
   */
  static keys: {
    37: number;
    38: number;
    39: number;
    40: number;
    32: number;
    33: number;
    34: number;
  };
  static preventDefault(e: any): void;
  static preventDefaultForScrollKeys(e: any): boolean;
  /**
   * Override the main listeners, disabling the scroll for each enabled key in `keys` object.
   * Also, set `height: 100vh` and `overflow: hidden` in the `html` element, forcing the content size to match
   * with the window.
   * @param all Disable the scroll for the browser.
   */
  static disable(all?: boolean): void;
  /**
   * Reset the main listeners, enabling the scroll.
   * Also reset the html element styles assigned before in `disable` function.
   */
  static enable(): void;
}
