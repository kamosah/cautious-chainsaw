// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'

const App = () => (
  // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  <div>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Header />
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <MainSection />
  {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
  </div>
)

export default App
