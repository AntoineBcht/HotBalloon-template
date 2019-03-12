import {assert, isString} from 'flexio-jshelpers'

export class ActionTemplate {
  /**
   *
   * @param {String} number
   */
  constructor(message = '') {
    assert(isString(message), 'hotballoon:ActionTemplate:constructor: `message` argument should be a string')
    this.message = message
  }
}
