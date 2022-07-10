import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import TodoItem from './TodoItem'
import TodoTextInput from './TodoTextInput'

const setup = ( editing = false ) => {
  const props = {
    todo: {
      id: 0,
      text: 'Use Redux',
      completed: false
    },
    // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
    editTodo: jest.fn(),
    // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
    deleteTodo: jest.fn(),
    // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
    completeTodo: jest.fn()
  }

  const renderer = createRenderer()

  renderer.render(
    <TodoItem {...props} />
  )

  let output = renderer.getRenderOutput()

  if (editing) {
    const label = output.props.children.props.children[1]
    label.props.onDoubleClick({})
    output = renderer.getRenderOutput()
  }

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('TodoItem', () => {
    it('initial render', () => {
      // @ts-expect-error TS(7022) FIXME: 'output' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const { output } = setup()

      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'output' used before its dec... Remove this comment to see the full error message
      (expect(output.type) as any).toBe('li');
      (expect(output.props.className) as any).toBe('');

      // @ts-expect-error TS(7022) FIXME: 'div' implicitly has type 'any' because it does no... Remove this comment to see the full error message
      const div = output.props.children

      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'div' used before its declar... Remove this comment to see the full error message
      (expect(div.type) as any).toBe('div');
      (expect(div.props.className) as any).toBe('view');

      // @ts-expect-error TS(7022) FIXME: 'input' implicitly has type 'any' because it does ... Remove this comment to see the full error message
      const [ input, label, button ] = div.props.children

      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'input' used before its decl... Remove this comment to see the full error message
      (expect(input.type) as any).toBe('input');
      (expect(input.props.checked) as any).toBe(false);

      (expect(label.type) as any).toBe('label');
      (expect(label.props.children) as any).toBe('Use Redux');

      (expect(button.type) as any).toBe('button');
      (expect(button.props.className) as any).toBe('destroy');
    })

    it('input onChange should call completeTodo', () => {
      const { output, props } = setup()
      const input = output.props.children.props.children[0]
      input.props.onChange({})
      (expect(props.completeTodo) as any).toBeCalledWith(0);
    })

    it('button onClick should call deleteTodo', () => {
      const { output, props } = setup()
      const button = output.props.children.props.children[2]
      button.props.onClick({})
      (expect(props.deleteTodo) as any).toBeCalledWith(0);
    })

    it('label onDoubleClick should put component in edit state', () => {
      const { output, renderer } = setup()
      const label = output.props.children.props.children[1]
      label.props.onDoubleClick({})
      // @ts-expect-error TS(7022) FIXME: 'updated' implicitly has type 'any' because it doe... Remove this comment to see the full error message
      const updated = renderer.getRenderOutput()
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'updated' used before its de... Remove this comment to see the full error message
      (expect(updated.type) as any).toBe('li');
      (expect(updated.props.className) as any).toBe('editing');
    })

    it('edit state render', () => {
      // @ts-expect-error TS(7022) FIXME: 'output' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const { output } = setup(true)

      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'output' used before its dec... Remove this comment to see the full error message
      (expect(output.type) as any).toBe('li');
      (expect(output.props.className) as any).toBe('editing');

      // @ts-expect-error TS(7022) FIXME: 'input' implicitly has type 'any' because it does ... Remove this comment to see the full error message
      const input = output.props.children
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'input' used before its decl... Remove this comment to see the full error message
      (expect(input.type) as any).toBe(TodoTextInput);
      (expect(input.props.text) as any).toBe('Use Redux');
      (expect(input.props.editing) as any).toBe(true);
    })

    it('TodoTextInput onSave should call editTodo', () => {
      const { output, props } = setup(true)
      output.props.children.props.onSave('Use Redux')
      (expect(props.editTodo) as any).toBeCalledWith(0, 'Use Redux');
    })

    it('TodoTextInput onSave should call deleteTodo if text is empty', () => {
      const { output, props } = setup(true)
      output.props.children.props.onSave('')
      (expect(props.deleteTodo) as any).toBeCalledWith(0);
    })

    it('TodoTextInput onSave should exit component from edit state', () => {
      const { output, renderer } = setup(true)
      output.props.children.props.onSave('Use Redux')
      // @ts-expect-error TS(7022) FIXME: 'updated' implicitly has type 'any' because it doe... Remove this comment to see the full error message
      const updated = renderer.getRenderOutput()
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'updated' used before its de... Remove this comment to see the full error message
      (expect(updated.type) as any).toBe('li');
      (expect(updated.props.className) as any).toBe('');
    })
  })
})
