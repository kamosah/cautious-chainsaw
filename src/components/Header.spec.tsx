import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module 'react-test-renderer/shallow' o... Remove this comment to see the full error message
import { createRenderer } from 'react-test-renderer/shallow';
// @ts-expect-error TS(6142) FIXME: Module './Header' was resolved to '/Users/kwameamo... Remove this comment to see the full error message
import Header from './Header'
// @ts-expect-error TS(6142) FIXME: Module '../components/TodoTextInput' was resolved ... Remove this comment to see the full error message
import TodoTextInput from '../components/TodoTextInput'

const setup = () => {
  const props = {
    // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
    addTodo: jest.fn()
  }

  const renderer = createRenderer();
  // @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  renderer.render(<Header {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render correctly', () => {
      // @ts-expect-error TS(7022) FIXME: 'output' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const { output } = setup()
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'output' used before its dec... Remove this comment to see the full error message
      (expect(output.type) as any).toBe('header');
      (expect(output.props.className) as any).toBe('header');

      // @ts-expect-error TS(7022) FIXME: 'h1' implicitly has type 'any' because it does not... Remove this comment to see the full error message
      const [ h1, input ] = output.props.children
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'h1' used before its declara... Remove this comment to see the full error message
      (expect(h1.type) as any).toBe('h1');
      (expect(h1.props.children) as any).toBe('todos');
      (expect(input.type) as any).toBe(TodoTextInput);
      (expect(input.props.newTodo) as any).toBe(true);
      (expect(input.props.placeholder) as any).toBe('What needs to be done?');
    })

    it('should call addTodo if length of text is greater than 0', () => {
      const { output, props } = setup()
      const input = output.props.children[1]
      input.props.onSave('')
      (expect(props.addTodo).not as any).toBeCalled();
      input.props.onSave('Use Redux')
      (expect(props.addTodo) as any).toBeCalled();
    })
  })
})
