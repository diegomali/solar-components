import { EventEmitter } from '../../../stencil-public-runtime';
import { AcOption } from '../../../utils/types/ac-option';
export declare class AcOrderList {
  /**
   * Reference to the component
   */
  host: HTMLAcOrderListElement;
  filterText: string;
  /**
   * List of all options available.
   */
  options: AcOption[];
  /**
   * Used to customize the searchbar's label
   */
  searchLabel: string;
  /**
   * Used to customize the field label
   */
  label: string;
  /**
   * Message that will be rendered with the search results in zero items
   */
  noResultsLabel: string;
  /**
   * If true, the component will handle multiple selected items.
   */
  multiple: boolean;
  /**
   * Event trigger on state change
   * @param {AcList} acList - Component.
   */
  listChange: EventEmitter<AcOrderList>;
  handleOptionsChange(): void;
  private updateSelectedOptions;
  handleSelect(e: any, option: any): void;
  handleChecked(e: any, option: any): void;
  getSelectedOptions(): Promise<AcOption<{}>[]>;
  componentDidLoad(): void;
  loadOptionsFromHTML(): void;
  render(): any[];
  private renderList;
  private setFilterText;
}
