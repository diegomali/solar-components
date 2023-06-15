import { EventEmitter } from '../../../stencil-public-runtime';
export declare class AcMenu {
  menuContentElt: HTMLElement;
  searchInput: HTMLAcInputBaseElement;
  activeItem: HTMLAcMenuItemElement;
  childItems: HTMLAcMenuItemElement[];
  menuItems: any;
  host: HTMLAcMenuElement;
  iconOnly: boolean;
  searchable: boolean;
  searchLabel: string;
  noResultsLabel: string;
  selected: string | number;
  searchFilter: string;
  filteredItems: any;
  menuChange: EventEmitter<string>;
  iconOnlyDidUpdate(): void;
  searchFilterDidUpdate(): void;
  componentDidLoad(): void;
  private updateChildItems;
  private loadItemsFromHTML;
  onDidSelectedUpdate(): void;
  /**
   * Mark a menu item as selected.
   */
  private select;
  private handleDebouncedKeyUp;
  hostData(): {
    class: {
      'ac-menu--icon-only': boolean;
      'ac-menu--filtered': string;
    };
  };
  render(): any[];
}
