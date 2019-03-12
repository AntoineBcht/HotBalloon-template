/* global runTest */

import {TestCase} from 'code-altimeter-js'
import {HotBalloonApplication as App, ComponentContext, Dispatcher as AppDispatcher} from 'hotballoon'
import {ActionTemplate} from '../actions/ActionTemplate/ActionTemplate'
import {ActionOperatorInput} from '../actions/ActionOperatorInput/ActionOperatorInput'
import {OperatorPlus} from '../component/operator/OperatorPlus'
import {OperatorNull} from '../component/operator/OperatorNull'
import {ComponentTemplate} from '..'
import {OperatorDiv} from '../component/operator/OperatorDiv'
import {ExecutorInline} from '../component/Job/ExecutorInlineImpl'
import {StoreTemplate} from '../stores/StoreTemplate/StoreTemplate'
const assert = require('assert')

const APP = new App('Test', new AppDispatcher())
const HTML_NODE = {nodeType: 2}

class TestCounter extends TestCase {
  constructor() {
    super()
    this.calculatorComponent = null
  }

  setUp() {
    this.calculatorComponent = ComponentTemplate.create(APP.addComponentContext(new ComponentContext(APP)), HTML_NODE, new ExecutorInline())
  }

  testLeftExpression() {
    this.calculatorComponent.addStoreTemplate()
      .addActionNumberInput()

    this.calculatorComponent.__actionNumberInput.dispatch(
      new ActionTemplate('1')
    )
    let expectedStore = new StoreTemplate('1', new OperatorNull())
    assert.deepStrictEqual(this.calculatorComponent.templateStore.data(), expectedStore)
  }

  testOperator() {
    this.calculatorComponent.addStoreTemplate()
      .addActionNumberInput()
      .addActionOperatorInput()

    this.calculatorComponent.__actionNumberInput.dispatch(
      new ActionTemplate('1')
    )
    this.calculatorComponent.__actionOperatorInput.dispatch(
      new ActionOperatorInput(new OperatorPlus())
    )
    let expectedStore = new StoreTemplate('1', new OperatorPlus())
    assert.deepStrictEqual(this.calculatorComponent.templateStore.data(), expectedStore)
  }

  testRightExpression() {
    this.calculatorComponent.setEventLoop()

    this.calculatorComponent.__actionNumberInput.dispatch(
      new ActionTemplate('1')
    )
    this.calculatorComponent.__actionOperatorInput.dispatch(
      new ActionOperatorInput(new OperatorPlus())
    )
    this.calculatorComponent.__actionNumberInput.dispatch(
      new ActionTemplate('1')
    )
    let expectedStore = new StoreTemplate('1', new OperatorPlus(), '1')
    assert.deepStrictEqual(this.calculatorComponent.templateStore.data(), expectedStore)
  }

  testResult() {
    this.calculatorComponent.setEventLoop()

    this.calculatorComponent.__actionNumberInput.dispatch(
      new ActionTemplate('1')
    )
    this.calculatorComponent.__actionOperatorInput.dispatch(
      new ActionOperatorInput(new OperatorPlus())
    )
    this.calculatorComponent.__actionNumberInput.dispatch(
      new ActionTemplate('1')
    )
    this.calculatorComponent.__actionOperatorInput.dispatch(
      new ActionOperatorInput(new OperatorPlus())
    )
    let expectedStore = new StoreTemplate('2', new OperatorPlus())
    assert.deepStrictEqual(this.calculatorComponent.templateStore.data(), expectedStore)
  }

  testDivisionPerZero() {
    this.calculatorComponent.setEventLoop()

    this.calculatorComponent.__actionNumberInput.dispatch(
      new ActionTemplate('1')
    )
    this.calculatorComponent.__actionOperatorInput.dispatch(
      new ActionOperatorInput(new OperatorDiv())
    )
    this.calculatorComponent.__actionNumberInput.dispatch(
      new ActionTemplate('0')
    )
    this.calculatorComponent.__actionOperatorInput.dispatch(
      new ActionOperatorInput(new OperatorPlus())
    )
    let expectedStore = new StoreTemplate()
    assert.deepStrictEqual(this.calculatorComponent.templateStore.data(), expectedStore)
  }
}

runTest(TestCounter)
