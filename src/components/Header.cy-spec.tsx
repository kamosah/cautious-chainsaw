/// <reference types="cypress" />
import React from 'react'
// @ts-expect-error TS(6142) FIXME: Module './Header' was resolved to '/Users/kwameamo... Remove this comment to see the full error message
import Header from './Header'
import {mount} from 'cypress-react-unit-test'
// we are making mini application - thus we need a store!
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
const store = createStore(reducer)

describe('components', () => {
  describe('Header', () => {
    beforeEach(() => {
      const props = {
        addTodo: cy.stub().as('addTodo')
      }
      mount(
        // @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Provider store={store}>
          {/* @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Header {...props} />
        </Provider>
      )
    })

    it('should render correctly', () => {
      cy.get('header').should('have.class', 'header')
        .contains('h1', 'todos')
      cy.get('header input').should('have.attr', 'placeholder', 'What needs to be done?')
    })

    it('should call addTodo if length of text is greater than 0', () => {
      cy.get('header input').type('{enter}')
      cy.get('@addTodo').should('not.have.been.called')

      cy.get('header input').type('Use Redux{enter}')
      cy.get('@addTodo').should('have.been.called')
    })
  })
})
