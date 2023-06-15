import { EventEmitter } from '../../../stencil-public-runtime';
export declare class AcTable {
  change: EventEmitter;
  tableChange: EventEmitter;
  options: Options;
  fetch: any;
  selectRow: any;
  loading: boolean;
  noResultsLabel: string;
  params: {
    ordering: string;
    property: string;
    selected: number;
    filters: {
      limitRows: string;
      totalRows: string;
      search: string;
    };
  };
  onParamsDidUpdate(): void;
  changeOrder(ev: any): void;
  update(): Promise<void>;
  onAddFetch(): void;
  componentDidLoad(): void;
  render(): any[];
}
export interface Options {
  header: [object];
  rows: [object];
}
