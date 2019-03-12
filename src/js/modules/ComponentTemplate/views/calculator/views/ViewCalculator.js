import {View, ElementEventListenerBuilder, e} from 'hotballoon'


export const INPUT_BUTTON_EVENT = 'INPUT_BUTTON_EVENT'


export default class ViewCalculator extends View {
  /**
   *
   * @param {ViewParameters} viewParameters
   * @param {StoreContainer} storeContainer
   */
  constructor(viewParameters, storeContainer) {
    super(viewParameters)
    this.__stores = storeContainer
    this.subscribeToStore(this.__stores.templateStore)
  }

  /**
   *
   * @returns {Element}
   */
  template() {
    return this.html(
      e('div#divTemplate.divTemplate')
        .childNodes(

          this.html(
            e('input#sum')
              .listenEvent(ElementEventListenerBuilder.listen('keydown')
                .callback((e) => {
                  if (e.key === 'Enter') {
                    this.dispatch(INPUT_BUTTON_EVENT, { message: e.target.value })
                  }
                })
                .build()
              )
          ),

          this.html(
            e('span#views.counter')
              .text(this.__stores.templateStore.message)
          ),

        )
    )
  }
}
