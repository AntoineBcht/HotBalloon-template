import {TypeCheck} from 'hotballoon'
import {assert} from 'flexio-jshelpers'
import {StoreTemplate} from '../stores/StoreTemplate/StoreTemplate'

/**
 */
export class StoreContainer {
  /**
   *
   * @param {StoreHandlerTemplate} templateStore
   */
  constructor(templateStore) {
    assert(
      templateStore.isTypeOf(StoreTemplate),
      'CounterContainerStoresParams: `templateStore ` should be a Store of StoreTemplate')

    this.__templateStore = TypeCheck.assertStoreBase(templateStore)
  }

  /**
   *
   * @return {PublicStoreHandler}
   */
  get templateStore() {
    return this.__templateStore
  }
}
