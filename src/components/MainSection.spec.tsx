import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module 'react-test-renderer/shallow' o... Remove this comment to see the full error message
import { createRenderer } from 'react-test-renderer/shallow';
// @ts-expect-error TS(6142) FIXME: Module './MainSection' was resolved to '/Users/kwa... Remove this comment to see the full error message
import MainSection from './MainSection'
// @ts-expect-error TS(6142) FIXME: Module './Footer' was resolved to '/Users/kwameamo... Remove this comment to see the full error message
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const setup = (propOverrides: any) => {
  const props = Object.assign({
    todosCount: 2,
    completedCount: 1,
    actions: {
      // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
      editTodo: jest.fn(),
      // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
      deleteTodo: jest.fn(),
      // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
      completeTodo: jest.fn(),
      // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
      completeAllTodos: jest.fn(),
      // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
      clearCompleted: jest.fn()
    }
  }, propOverrides)

  const renderer = createRenderer()
  // @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  renderer.render(<MainSection {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('MainSection', () => {
    it('should render container', () => {
      // @ts-expect-error TS(7022) FIXME: 'output' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const { output } = setup()
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'output' used before its dec... Remove this comment to see the full error message
      (expect(output.type) as any).toBe('section');
      (expect(output.props.className) as any).toBe('main');
    })

    describe('toggle all input', () => {
      it('should render', () => {
        // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
        const { output } = setup()
        // @ts-expect-error TS(7022) FIXME: 'toggle' implicitly has type 'any' because it does... Remove this comment to see the full error message
        const [ toggle ] = output.props.children[0].props.children
        // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'toggle' used before its dec... Remove this comment to see the full error message
        (expect(toggle.type) as any).toBe('input');
        (expect(toggle.props.className) as any).toBe('toggle-all');
        (expect(toggle.props.type) as any).toBe('checkbox');
        (expect(toggle.props.checked) as any).toBe(false);
      })

      it('should be checked if all todos completed', () => {
        const { output } = setup({
          completedCount: 2
        })
        // @ts-expect-error TS(7022) FIXME: 'toggle' implicitly has type 'any' because it does... Remove this comment to see the full error message
        const [ toggle ] = output.props.children[0].props.children
        // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'toggle' used before its dec... Remove this comment to see the full error message
        (expect(toggle.props.checked) as any).toBe(true);
      })

      it('should call completeAllTodos on change', () => {
        // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
        const { output, props } = setup()
        const [ , label ] = output.props.children[0].props.children
        label.props.onClick({})
        (expect(props.actions.completeAllTodos) as any).toBeCalled();
      })
    })

    describe('footer', () => {
      it('should render', () => {
        // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
        const { output } = setup()
        // @ts-expect-error TS(7022) FIXME: 'footer' implicitly has type 'any' because it does... Remove this comment to see the full error message
        const [ , , footer ] = output.props.children
        // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'footer' used before its dec... Remove this comment to see the full error message
        (expect(footer.type) as any).toBe(Footer);
        (expect(footer.props.completedCount) as any).toBe(1);
        (expect(footer.props.activeCount) as any).toBe(1);
      })

      it('onClearCompleted should call clearCompleted', () => {
        // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
        const { output, props } = setup()
        const [ , , footer ] = output.props.children
        footer.props.onClearCompleted()
        (expect(props.actions.clearCompleted) as any).toBeCalled();
      })
    })

    describe('visible todo list', () => {
      it('should render', () => {
        // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
        const { output } = setup()
        // @ts-expect-error TS(7022) FIXME: 'visibleTodoList' implicitly has type 'any' becaus... Remove this comment to see the full error message
        const [ , visibleTodoList ] = output.props.children
        // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'visibleTodoList' used befor... Remove this comment to see the full error message
        (expect(visibleTodoList.type) as any).toBe(VisibleTodoList);
      })
    })

    describe('toggle all input and footer', () => {
      it('should not render if there are no todos', () => {
        const { output } = setup({
          todosCount: 0,
          completedCount: 0
        })
        // @ts-expect-error TS(7022) FIXME: 'renderedChildren' implicitly has type 'any' becau... Remove this comment to see the full error message
        const renderedChildren = output.props.children
        .filter((item: any) => item !== false)
        // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'renderedChildren' used befo... Remove this comment to see the full error message
        (expect(renderedChildren.length) as any).toBe(1);
        (expect(renderedChildren[0].type) as any).toBe(VisibleTodoList);
      })
    })
  })
})
