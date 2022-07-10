// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error TS(2307): Cannot find module 'react-test-renderer/shallow' o... Remove this comment to see the full error message
import { createRenderer } from 'react-test-renderer/shallow'
// @ts-expect-error TS(6142): Module './App' was resolved to '/Users/kwameamosah... Remove this comment to see the full error message
import App from './App'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'


const setup = (propOverrides: any) => {
  const renderer = createRenderer()
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  renderer.render(<App />)
  const output = renderer.getRenderOutput()
  return output
}

describe('components', () => {
  describe('Header', () => {
    it('should render', () => {
      // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
      const output = setup()
      // @ts-expect-error TS(7022): 'header' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const [ header ] = output.props.children
      // @ts-expect-error TS(2448): Block-scoped variable 'header' used before its dec... Remove this comment to see the full error message
      (expect(header.type) as any).toBe(Header);
    })
  })
  
  describe('Mainsection', () => {
    it('should render', () => {
      // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
      const output = setup()
      // @ts-expect-error TS(7022): 'mainSection' implicitly has type 'any' because it... Remove this comment to see the full error message
      const [ , mainSection ] = output.props.children
      // @ts-expect-error TS(2448): Block-scoped variable 'mainSection' used before it... Remove this comment to see the full error message
      (expect(mainSection.type) as any).toBe(MainSection);
    })
  })
})