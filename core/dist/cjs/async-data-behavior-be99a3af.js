'use strict';

const componentBehavior = require('./component-behavior-ab8d7c53.js');

/**
 * Implements the Data fetching logic.
 * @param P Type of params.
 * @param T Type of data.
 */
class AsyncDataBehavior extends componentBehavior.ComponentBehavior {
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

exports.AsyncDataBehavior = AsyncDataBehavior;

//# sourceMappingURL=async-data-behavior-be99a3af.js.map