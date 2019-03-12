import {StoreTemplate} from '../../stores/StoreTemplate/StoreTemplate'

/**
 *
 * @param {ComponentTemplate} component
 */
export const listenActionTemplate = (component) => {
  component.__actionTemplate.listenWithCallback((payload) => {
    component.__templateStore.set(
      new StoreTemplate(payload.message)
    )
  })
}
