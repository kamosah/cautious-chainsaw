import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export const store = createStore(reducer)
export const StoreProvider = ({
  children
}: any) => (<Provider store={store}>{children}</Provider>)

// expose store during tests
/* istanbul ignore else */
if ((window as any).Cypress) {
  (window as any).store = store;
}
