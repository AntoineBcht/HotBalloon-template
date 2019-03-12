import {ActionBuilder, ActionParams} from 'hotballoon'
import {assert} from 'flexio-jshelpers'
import {ActionTemplate} from './ActionTemplate'

/**
 *
 * @param {ComponentTemplate} component
 * @return {Action.<ActionTemplate>}
 */
export const initActionTemplate = (component) => {
  return ActionBuilder.build(
    new ActionParams(
      ActionTemplate,
      (payload) => {
        assert(
          payload instanceof ActionTemplate,
          'ActionTemplate:validate: `payload` argument should be an instance of ActionTemplate'
        )
        return true
      },
      component.__componentContext.dispatcher()
    )
  )
}
