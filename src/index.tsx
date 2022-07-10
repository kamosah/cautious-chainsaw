import React from 'react'
// @ts-expect-error TS(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { render } from 'react-dom'
// @ts-expect-error TS(6142) FIXME: Module './store' was resolved to '/Users/kwameamos... Remove this comment to see the full error message
import {StoreProvider} from './store'
import 'todomvc-app-css/index.css'
// @ts-expect-error TS(6142) FIXME: Module './components/App' was resolved to '/Users/... Remove this comment to see the full error message
import App from './components/App'

render(
  // @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <StoreProvider>
    {/* @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <App />
  </StoreProvider>,
  document.getElementById('root')
)
