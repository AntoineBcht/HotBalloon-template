import {ComponentTemplate} from './ComponentTemplate'

export class InitComponentTemplate {
  /**
   *
   * @param {HotBalloonApplication} APP
   * @param {Node} parentNode
   */
  constructor(APP, parentNode) {
    console.log(APP)
    ComponentTemplate.create(
      APP.addComponentContext(),
      parentNode
    ).setEventTempate().mountView()
  }

  /**
   *
   * @param {HotBalloonApplication} APP
   * @param {Node} parentNode
   * @return {InitComponentTemplate}
   * @constructor
   * @static
   */
  static create(payload, APP, parentNode) {
    return new this(payload, APP, parentNode)
  }
}
