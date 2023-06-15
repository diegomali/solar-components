import { ComponentBehavior } from '../utils/stencil/component-behavior';
/**
 * Implements the Data fetching logic.
 * @param P Type of params.
 * @param T Type of data.
 */
export class AsyncDataBehavior extends ComponentBehavior {
  /**
   * Call the fetch method with params, controlling the loading state.
   */
  async executeFetch() {
    this.component.loading = true;
    const result = this.component.whenReceiveData(await this.component.fetch(this.component.getFetchParams()));
    if (result instanceof Promise) {
      await result;
    }
    this.component.loading = false;
  }
}
//# sourceMappingURL=async-data-behavior.js.map
