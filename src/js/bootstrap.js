import {App} from './app/App'
import {AppDispatcher} from './app/AppDispatcher'
import {InitComponentTemplate} from './modules/ComponentTemplate/component/InitComponentTemplate'


export const APP = new App('Documentation', new AppDispatcher())
const HTML_NODE = document.body
;(function(app) {
  (InitComponentTemplate.create(
    app,
    HTML_NODE
  ))
})(APP)
