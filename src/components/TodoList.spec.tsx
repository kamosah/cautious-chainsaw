// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error TS(2307): Cannot find module 'react-test-renderer/shallow' o... Remove this comment to see the full error message
import { createRenderer } from 'react-test-renderer/shallow';
// @ts-expect-error TS(6142): Module './TodoList' was resolved to '/Users/kwamea... Remove this comment to see the full error message
import TodoList from './TodoList'
// @ts-expect-error TS(6142): Module './TodoItem' was resolved to '/Users/kwamea... Remove this comment to see the full error message
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
      // @ts-expect-error TS(2304): Cannot find name 'jest'.
      editTodo: jest.fn(),
      // @ts-expect-error TS(2304): Cannot find name 'jest'.
      deleteTodo: jest.fn(),
      // @ts-expect-error TS(2304): Cannot find name 'jest'.
      completeTodo: jest.fn(),
      // @ts-expect-error TS(2304): Cannot find name 'jest'.
      completeAll: jest.fn(),
      // @ts-expect-error TS(2304): Cannot find name 'jest'.
      clearCompleted: jest.fn()
    }
  }

  const renderer = createRenderer();
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
      // @ts-expect-error TS(7022): 'output' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const { output } = setup()
      // @ts-expect-error TS(2448): Block-scoped variable 'output' used before its dec... Remove this comment to see the full error message
      (expect(output.type) as any).toBe('ul');
      (expect(output.props.className) as any).toBe('todo-list');
    })

    it('should render todos', () => {
      // @ts-expect-error TS(7022): 'output' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const { output, props } = setup()
      // @ts-expect-error TS(2448): Block-scoped variable 'output' used before its dec... Remove this comment to see the full error message
      (expect(output.props.children.length) as any).toBe(2);
      output.props.children.forEach((todo: any, i: any) => {
        (expect(todo.type) as any).toBe(TodoItem);
        (expect(Number(todo.key)) as any).toBe(props.filteredTodos[i].id);
        (expect(todo.props.todo) as any).toBe(props.filteredTodos[i]);
      })
    })
  })
})
