import {PublicStoreHandler} from 'hotballoon'

/**
 * @extends PublicStoreHandler
 */
export class StoreHandlerTemplate extends PublicStoreHandler {
  /**
   *
   * @param {StoreInterface} store
   */
  constructor(store) {
    super(store)
  }

  get message() {
    return this.data().message
  }
}
