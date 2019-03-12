import {InMemoryStoreParams, StoreBuilder} from 'hotballoon'
import {StoreTemplate} from './StoreTemplate'

/**
 *
 * @param {ComponentTemplate} component
 * @returns {Store}
 */
export const initStoreTemplate = (component) => {
  /**
   *
   * @type {Store<StoreTemplate>}
   */
  const resultStore = StoreBuilder.InMemory(
    new InMemoryStoreParams(
      StoreTemplate,
      (data) => {
        return data instanceof StoreTemplate
      },
      new StoreTemplate()
    )
  )

  component.__componentContext.addStore(resultStore)
  return resultStore
}
