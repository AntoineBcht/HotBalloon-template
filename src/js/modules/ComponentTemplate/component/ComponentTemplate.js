'use strict'
import {TypeCheck} from 'hotballoon'
import {initStoreTemplate} from '../stores/StoreTemplate/InitStoreTemplate'
import {StoreHandlerTemplate} from '../stores/StoreTemplate/StoreHandlerTemplate'
import {initActionTemplate} from '../actions/ActionTemplate/InitActionTemplate'
import {addViewContainerTemplate} from '../views/calculator/addCalculatorViewContainer'
import {isNode, assert} from 'flexio-jshelpers'
import {listenActionTemplate} from '../actions/ActionTemplate/ListenActionTemplate'

export class ComponentTemplate {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Node} parentNode
   */
  constructor(componentContext, parentNode) {
    assert(!!isNode(parentNode),
      'ComponentTemplate:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)
    assert(
      TypeCheck.isComponentContext(componentContext),
      'ComponentTemplate:constructor: `componentContext` argument should be ComponentContext, %s given',
      typeof componentContext
    )

    this.__parentNode = parentNode
    this.__componentContext = componentContext
  }

  mountView() {
    addViewContainerTemplate(this)
      .renderAndMount(this.__parentNode)
    return this
  }

  setEventTempate() {
    this.__templateStore = initStoreTemplate(this)
    this.__templateStoreHandler = new StoreHandlerTemplate(this.__templateStore)
    this.__actionTemplate = initActionTemplate(this)
    listenActionTemplate(this)
    return this
  }

  /**
   *
   * @return {ComponentContext}
   */
  get componentContext() {
    return this.__componentContext
  }

  /**
   *
   * @returns {Store}
   */
  get templateStore() {
    return this.__templateStore
  }

  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Node} parentNode
   * @return {ComponentTemplate}
   * @constructor
   * @static
   */
  static create(componentContext, parentNode) {
    return new this(componentContext, parentNode)
  }
}
