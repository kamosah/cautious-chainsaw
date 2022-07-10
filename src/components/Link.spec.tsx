// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error TS(2307): Cannot find module 'react-test-renderer/shallow' o... Remove this comment to see the full error message
import { createRenderer } from 'react-test-renderer/shallow';
// @ts-expect-error TS(6142): Module './Link' was resolved to '/Users/kwameamosa... Remove this comment to see the full error message
import Link from './Link'

const setup = (propOverrides: any) => {
  const props = Object.assign({
    active: false,
    children: 'All',
    // @ts-expect-error TS(2304): Cannot find name 'jest'.
    setFilter: jest.fn()
  }, propOverrides)

  const renderer = createRenderer();
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  renderer.render(<Link {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
  }
}

describe('component', () => {
  describe('Link', () => {
    it('should render correctly', () => {
      // @ts-expect-error TS(7022): 'output' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const { output } = setup()
      // @ts-expect-error TS(2448): Block-scoped variable 'output' used before its dec... Remove this comment to see the full error message
      (expect(output.type) as any).toBe('a');
      (expect(output.props.style.cursor) as any).toBe('pointer');
      (expect(output.props.children) as any).toBe('All');
    })

    it('should have class selected if active', () => {
      // @ts-expect-error TS(7022): 'output' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const { output } = setup({ active: true })
      // @ts-expect-error TS(2448): Block-scoped variable 'output' used before its dec... Remove this comment to see the full error message
      (expect(output.props.className) as any).toBe('selected');
    })

    it('should call setFilter on click', () => {
      // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
      const { output, props } = setup()
      output.props.onClick()
      (expect(props.setFilter) as any).toBeCalled();
    })
  })
})
