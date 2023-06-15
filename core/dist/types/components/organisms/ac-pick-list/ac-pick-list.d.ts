import { AcOrderList } from '../../molecules/ac-order-list/ac-order-list';
import { AcOption } from '../../../utils/types/ac-option';
import { AcOrderListCustomEvent } from '../../../components';
export declare class AcPickList {
  private acListAvalibles;
  private acListSelectedOptions;
  /**
   * Reference to the component
   */
  host: HTMLAcPickListElement;
  /**
   * Number of available options to select.
   */
  numberAvailableOptionsSelected: number;
  /**
   * Number of selected options.
   */
  numberOfSelectedOptions: number;
  /**
   * List of all options available.
   */
  options: AcOption[];
  /**
   * Text to be search.
   */
  searchLabel: string;
  /**
   * Label to be show when no results is fouond.
   */
  noResultsLabel: string;
  /**
   * Label for ac-list of avalible options
   */
  availableLabel: string;
  /**
   * Label for ac-list of selected options
   */
  selectedLabel: string;
  /**
   * Label of the button that add options on the  selected ac-list.
   */
  addLabel: string;
  /**
   * Label of the button that add all options on the selected ac-list.
   */
  addAllLabel: string;
  /**
   * Label of the button that remove options on the on selected ac-list.
   */
  removeLabel: string;
  /**
   * Label of the button that remove all options on the  selected ac-list.
   */
  removeAllLabel: string;
  /**
   * Return the selected items.
   */
  getSelectedOptions(): Promise<AcOption<{}>[]>;
  /**
   * Method that add all options on the selected ac-list
   */
  addAllOptions(): void;
  /**
   * Method that add options on the selected ac-list
   */
  addSelectedOptions(): void;
  /**
   * Method that remove all options on the selected ac-list
   */
  removeAllOptions(): void;
  /**
   * Method that remove options on the selected ac-list
   */
  removeOptions(): void;
  /**
   * Method that handle selected options.
   */
  handleChangeAclistSelectedOptions(event: AcOrderListCustomEvent<AcOrderList>): void;
  /**
   * Method that handle changes on ac-list of avalibles options.
   */
  handleChangeAclistAvailableOptionsSelected(event: AcOrderListCustomEvent<AcOrderList>): void;
  componentDidRender(): void;
  render(): any;
}
