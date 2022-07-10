import React from 'react'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'

const App = () => (
  // @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div>
    {/* @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Header />
    {/* @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <MainSection />
  </div>
)

export default App
