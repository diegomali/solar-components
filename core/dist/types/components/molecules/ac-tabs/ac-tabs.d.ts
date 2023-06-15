import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * Accera's full-featured tabs webcomponent.
 */
export declare class AcTabs {
  host: any;
  bulletElt: HTMLElement;
  wrapperElt: HTMLElement;
  currentTab: HTMLAcTabElement;
  childTabs: HTMLAcTabElement[];
  /**
   * The theme color defined in the color palette. The default is primary.
   */
  theme: string;
  compact: boolean;
  selected: string | number;
  tabChange: EventEmitter<string>;
  onDidSelectedUpdate(): void;
  onDidCompactUpdate(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  /**
   * Load the tabs from the children.
   */
  private loadTabsFromHTML;
  /**
   * Mark a tab as selected.
   */
  private select;
  /**
   * Animate the bullet element to a tab on the screen.
   */
  private moveBulletToCurrentTab;
  /**
   * Update the bullet element position when occurs a scroll, preventing breaks on the layout.
   */
  private handleWrapperScroll;
  render(): any;
}
