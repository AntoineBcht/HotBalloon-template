import {ContainerTemplate} from './ContainerTemplate'
import {ViewContainerParameters} from 'hotballoon'
import {StoreContainer} from '../StoreContainer'
import {ActionContainer} from '../ActionContainer'

export const addViewContainerTemplate = (component) => {
  const VIEW_CONTAINER_ID = component.__componentContext.nextID()
  let VIEW_CONTAINER_INST = component.__componentContext.addViewContainer(
    new ContainerTemplate(
      new ViewContainerParameters(
        component.__componentContext,
        VIEW_CONTAINER_ID,
        component.__parentNode
      ),
      new StoreContainer(component.__templateStoreHandler),
      new ActionContainer(component.__actionTemplate)
    )
  )

  component.__componentContext.debug.log('VIEW_CONTAINER_INST')
  component.__componentContext.debug.object(VIEW_CONTAINER_INST)
  component.__componentContext.debug.print()

  return VIEW_CONTAINER_INST
}
