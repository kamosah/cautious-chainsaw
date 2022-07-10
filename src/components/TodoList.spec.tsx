import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module 'react-test-renderer/shallow' o... Remove this comment to see the full error message
import { createRenderer } from 'react-test-renderer/shallow';
import TodoList from './TodoList'
import TodoItem from './TodoItem'

const setup = () => {
  const props = {
    filteredTodos: [
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }, {
        text: 'Run the tests',
        completed: true,
        id: 1
      }
    ],
    actions: {
      // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
      editTodo: jest.fn(),
      // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
      deleteTodo: jest.fn(),
      // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
      completeTodo: jest.fn(),
      // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
      completeAll: jest.fn(),
      // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
      clearCompleted: jest.fn()
    }
  }

  const renderer = createRenderer();
  // @ts-expect-error TS(2322) FIXME: Type '{ filteredTodos: { text: string; completed: ... Remove this comment to see the full error message
  renderer.render(<TodoList {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output
  }
}

describe('components', () => {
  describe('TodoList', () => {
    it('should render container', () => {
      // @ts-expect-error TS(7022) FIXME: 'output' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const { output } = setup()
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'output' used before its dec... Remove this comment to see the full error message
      (expect(output.type) as any).toBe('ul');
      (expect(output.props.className) as any).toBe('todo-list');
    })

    it('should render todos', () => {
      // @ts-expect-error TS(7022) FIXME: 'output' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const { output, props } = setup()
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'output' used before its dec... Remove this comment to see the full error message
      (expect(output.props.children.length) as any).toBe(2);
      output.props.children.forEach((todo: any, i: any) => {
        (expect(todo.type) as any).toBe(TodoItem);
        (expect(Number(todo.key)) as any).toBe(props.filteredTodos[i].id);
        (expect(todo.props.todo) as any).toBe(props.filteredTodos[i]);
      })
    })
  })
})
