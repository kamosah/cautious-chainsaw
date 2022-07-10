/// <reference types="cypress" />
// compare to tests in "Footer.spec.js"
import React from 'react'
// @ts-expect-error TS(6142) FIXME: Module './Footer' was resolved to '/Users/kwameamo... Remove this comment to see the full error message
import Footer from './Footer'
import { mount } from 'cypress-react-unit-test'

// we are making mini application - thus we need a store!
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
const store = createStore(reducer)

const setup = (propOverrides: any) => {
  const props = Object.assign({
    completedCount: 0,
    activeCount: 0,
    onClearCompleted: cy.stub().as('clear'),
  }, propOverrides)

  mount(
    // @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Provider store={store}>
      {/* @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Footer {...props} />
    </Provider>
  )
}

describe('components', () => {
  describe('Footer', () => {
    it('should render container', () => {
      // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
      setup()
      cy.contains('footer', 'No items left').should('have.class', 'footer')
    })

    it('should display active count when above 0', () => {
      setup({ activeCount: 1 })
      cy.contains('1 item left')
    })

    it('should render filters', () => {
      // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
      setup()
      cy.get('footer li').should('have.length', 3)
        .should((li) => {
          expect(li[0]).to.have.text('All')
          expect(li[1]).to.have.text('Active')
          expect(li[2]).to.have.text('Completed')
        })
    })

    it('shouldnt show clear button when no completed todos', () => {
      setup({ completedCount: 0 })
      cy.contains('button', 'Clear completed').should('not.exist')
    })

    it('should render clear button when completed todos', () => {
      setup({ completedCount: 1 })
      cy.contains('button', 'Clear completed').should('have.class', 'clear-completed')
    })

    it('should call onClearCompleted on clear button click', () => {
      setup({ completedCount: 1 })
      cy.contains('button', 'Clear completed').click()
      cy.get('@clear').should('have.been.called')
    })
  })
})
