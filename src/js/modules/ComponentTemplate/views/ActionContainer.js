import {TypeCheck} from 'hotballoon'

/**
 */
export class ActionContainer {
  /**
   *
   * @param {Action.<ActionTemplate>} actionTemplate
   */
  constructor(actionTemplate) {
    this.__actionTemplate = TypeCheck.assertIsAction(actionTemplate)
  }

  /**
   *
   * @return {Action.<ActionTemplate>}
   */
  get actionTemplate() {
    return this.__actionTemplate
  }
}
