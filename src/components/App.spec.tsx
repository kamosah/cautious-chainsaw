import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module 'react-test-renderer/shallow' o... Remove this comment to see the full error message
import { createRenderer } from 'react-test-renderer/shallow'
import App from './App'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'


const setup = (propOverrides: any) => {
  const renderer = createRenderer()
  renderer.render(<App />)
  const output = renderer.getRenderOutput()
  return output
}

describe('components', () => {
  describe('Header', () => {
    it('should render', () => {
      // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
      const output = setup()
      // @ts-expect-error TS(7022) FIXME: 'header' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const [ header ] = output.props.children
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'header' used before its dec... Remove this comment to see the full error message
      (expect(header.type) as any).toBe(Header);
    })
  })
  
  describe('Mainsection', () => {
    it('should render', () => {
      // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
      const output = setup()
      // @ts-expect-error TS(7022) FIXME: 'mainSection' implicitly has type 'any' because it... Remove this comment to see the full error message
      const [ , mainSection ] = output.props.children
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'mainSection' used before it... Remove this comment to see the full error message
      (expect(mainSection.type) as any).toBe(MainSection);
    })
  })
})