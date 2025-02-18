import { ComponentBase, ComponentBehavior } from '../utils/stencil/component-behavior';
/**
 * Implements the Data fetching logic.
 * @param P Type of params.
 * @param T Type of data.
 */
export declare class AsyncDataBehavior<P, T> extends ComponentBehavior<AsyncDataComponent<P, T>> {
  /**
   * Call the fetch method with params, controlling the loading state.
   */
  executeFetch(): Promise<void>;
}
/**
 * Represents a Component that implements the data fetching logic.
 * @param P Type of params.
 * @param T Type of data.
 */
export interface AsyncDataComponent<P, T> extends ComponentBase {
  asyncDataBehavior: AsyncDataBehavior<P, T>;
  /**
   * The function that fetch data.
   * @param params The params used to fetch data.
   */
  fetch: (params: P) => Promise<AsyncMetadata<T>>;
  /**
   * Callback called when receive the fetched data.
   */
  whenReceiveData: (metaData: AsyncMetadata<T>) => Promise<void> | void;
  /**
   * Used to build the fetch params.
   */
  getFetchParams: () => P;
  /**
   * The loading state.
   * @Prop
   */
  loading?: boolean;
}
export interface AsyncMetadata<T> {
  links?: any;
  meta?: any;
  data: T;
}
