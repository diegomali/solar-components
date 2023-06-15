import { C as ComponentBehavior } from './component-behavior-12d14453.js';

/**
 * Implements the Data fetching logic.
 * @param P Type of params.
 * @param T Type of data.
 */
class AsyncDataBehavior extends ComponentBehavior {
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

export { AsyncDataBehavior as A };

//# sourceMappingURL=async-data-behavior-22d8af83.js.map