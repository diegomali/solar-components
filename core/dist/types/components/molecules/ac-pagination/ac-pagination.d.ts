import { EventEmitter } from '../../../stencil-public-runtime';
export declare class AcPagination {
  private skipPagesNext;
  private skipPagesPrevious;
  /**
   * The amount of pages.
   */
  totalPages: number;
  /**
   * The selected page.
   */
  selected: number;
  /**
   * Used to localize the Next button label.
   */
  nextLabel: string;
  /**
   * Used to localize the Previous button label.
   */
  previousLabel: string;
  /**
   *  Event emitted when changed tab
   */
  paginationChange: EventEmitter;
  handleChangePage(ev: any): void;
  handleNextPage(): void;
  handleAfterPage(): void;
  definePages(): void;
  render(): any[];
}
