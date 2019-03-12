'use strict'
import {ViewContainer, ViewParameters, ViewEventListenerBuilder} from 'hotballoon'
import {default as ViewTemplate, INPUT_BUTTON_EVENT} from './views/ViewCalculator'

import '../../assets/css/style.css'
import {ActionTemplate} from '../../actions/ActionTemplate/ActionTemplate'
import {StoreContainer} from '../StoreContainer'

const TEMPLATE_VIEW = Symbol('TEMPLATE_VIEW')

export class ContainerTemplate extends ViewContainer {
  /**
   *
   * @param {ViewContainerParameters} viewContainerParameters
   * @param {StoreContainer} storeContainer
   * @param {ActionContainer} actionContainer
   */
  constructor(viewContainerParameters, storeContainer, actionContainer) {
    super(viewContainerParameters)
    this.__stores = storeContainer
    this.__actions = actionContainer
    this.__registerViews()
  }

  /**
   *
   * @private
   */
  __registerViews() {
    this.addView(
      new ViewTemplate(
        new ViewParameters(TEMPLATE_VIEW, this),
        new StoreContainer(this.__stores.templateStore)
      )
    )
    this.__handleEvents()
  }

  __handleEvents() {
    this.view(TEMPLATE_VIEW).on(
      ViewEventListenerBuilder
        .listen(INPUT_BUTTON_EVENT)
        .callback((payload) => {
          this.__actions.actionTemplate.dispatch(
            new ActionTemplate(payload.message)
          )
        }).build()
    )
  }
}
