/// <reference types="cypress" />
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error TS(6142): Module './MainSection' was resolved to '/Users/kwa... Remove this comment to see the full error message
import MainSection from './MainSection'
import { mount } from 'cypress-react-unit-test'

// we are making mini application - thus we need a store!
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
const store = createStore(reducer)

const setup = (propOverrides: any) => {
  const props = Object.assign({
    todosCount: 2,
    completedCount: 1,
    actions: {
      editTodo: cy.stub().as('edit'),
      deleteTodo: cy.stub().as('delete'),
      completeTodo: cy.stub().as('complete'),
      completeAllTodos: cy.stub().as('completeAll'),
      clearCompleted: cy.stub().as('clearCompleted')
    }
  }, propOverrides)

  mount(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Provider store={store}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <MainSection {...props} />
    </Provider>,
    { cssFile: 'node_modules/todomvc-app-css/index.css' }
  )
}

describe('components', () => {
  describe('MainSection', () => {
    it('should render container', () => {
      // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
      setup()
      cy.get('section').should('have.class', 'main')
    })

    describe('toggle all input', () => {
      it('should render', () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        setup()
        cy.get('input[type=checkbox]')
          .should('have.class', 'toggle-all')
          .and('not.be.checked')
      })

      it('should be checked if all todos completed', () => {
        setup({
          completedCount: 2
        })
        cy.get('input[type=checkbox]')
          .should('be.checked')
      })

      it('should call completeAllTodos on change', () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        setup()
        cy.get('input[type=checkbox]').click({ force: true })
        cy.get('@completeAll').should('be.called')
      })
    })

    describe('footer', () => {
      it('should render', () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        setup()
        cy.get('footer').contains('1 item left')
      })

      it('onClearCompleted should call clearCompleted', () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        setup()
        cy.contains('button', 'Clear completed').click()
        cy.get('@clearCompleted').should('have.been.called')
      })
    })

    describe('visible todo list', () => {
      it('should render', () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        setup()
        cy.get('li').should('have.length', 3)
      })
    })

    describe('toggle all input and footer', () => {
      it('should not render if there are no todos', () => {
        setup({
          todosCount: 0,
          completedCount: 0
        })
        cy.get('li').should('have.length', 0)
      })
    })
  })
})
