/// <reference types="cypress" />
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error TS(6142): Module './TodoList' was resolved to '/Users/kwamea... Remove this comment to see the full error message
import TodoList from './TodoList'
// an alternative to boilerplate code
// re-use app's store creation method
// @ts-expect-error TS(6142): Module '../store' was resolved to '/Users/kwameamo... Remove this comment to see the full error message
import { StoreProvider } from '../store'
import {mount} from 'cypress-react-unit-test'

const setup = () => {
  const props = {
    filteredTodos: [
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }, {
        text: 'Run the tests',
        completed: true,
        id: 1
      }
    ],
    // we need to create stubs
    // because the component runs validation on props
    actions: {
      editTodo: cy.stub(),
      deleteTodo: cy.stub(),
      completeTodo: cy.stub(),
      completeAll: cy.stub(),
      clearCompleted: cy.stub()
    }
  }

  mount(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <StoreProvider>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TodoList {...props} />
    </StoreProvider>,
    { cssFile: 'node_modules/todomvc-app-css/index.css' }
  )
}

describe('components', () => {
  describe('TodoList', () => {
    it('should render container', () => {
      setup()
      cy.get('ul').should('have.class', 'todo-list')
    })

    it('should render todos', () => {
      setup()
      cy.get('li').should('have.length', 2)
        .first().should('have.class', 'todo').and('have.text', 'Use Redux')
        .find('input[type=checkbox]').should('not.be.checked')

      cy.get('li')
        .eq(1).should('have.class', 'todo').and('have.text', 'Run the tests')
        .find('input[type=checkbox]').should('be.checked')
    })
  })
})
