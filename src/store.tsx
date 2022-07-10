// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { createStore } from 'redux'
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux'
import reducer from './reducers'

export const store = createStore(reducer)
export const StoreProvider = ({
  children
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
}: any) => (<Provider store={store}>{children}</Provider>)

// expose store during tests
/* istanbul ignore else */
if ((window as any).Cypress) {
  (window as any).store = store;
}
