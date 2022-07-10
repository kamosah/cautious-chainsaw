import React from 'react'
// @ts-expect-error TS(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { render } from 'react-dom'
import {StoreProvider} from './store'
import 'todomvc-app-css/index.css'
import App from './components/App'

render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
)
