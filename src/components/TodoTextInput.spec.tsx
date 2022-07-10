import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import TodoTextInput from './TodoTextInput'

const setup = (propOverrides: any) => {
  const props = Object.assign({
    // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
    onSave: jest.fn(),
    text: 'Use Redux',
    placeholder: 'What needs to be done?',
    editing: false,
    newTodo: false
  }, propOverrides)

  const renderer = createRenderer()

  renderer.render(
    <TodoTextInput {...props} />
  )

  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('TodoTextInput', () => {
    it('should render correctly', () => {
      // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
      const { output } = setup()
      // @ts-expect-error TS(2551) FIXME: Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
      expect(output.props.placeholder).toEqual('What needs to be done?')
      // @ts-expect-error TS(2551) FIXME: Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
      expect(output.props.value).toEqual('Use Redux')
      // @ts-expect-error TS(2551) FIXME: Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
      expect(output.props.className).toEqual('')
    })

    it('should render correctly when editing=true', () => {
      const { output } = setup({ editing: true })
      // @ts-expect-error TS(2551) FIXME: Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
      expect(output.props.className).toEqual('edit')
    })

    it('should render correctly when newTodo=true', () => {
      const { output } = setup({ newTodo: true })
      // @ts-expect-error TS(2551) FIXME: Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
      expect(output.props.className).toEqual('new-todo')
    })

    it('should update value on change', () => {
      // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
      const { output, renderer } = setup()
      output.props.onChange({ target: { value: 'Use Radox' } })
      const updated = renderer.getRenderOutput()
      // @ts-expect-error TS(2551) FIXME: Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
      expect(updated.props.value).toEqual('Use Radox')
    })

    it('should call onSave on return key press', () => {
      // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
      const { output, props } = setup()
      output.props.onKeyDown({ which: 13, target: { value: 'Use Redux' } })
      (expect(props.onSave) as any).toBeCalledWith('Use Redux');
    })

    it('should reset state on return key press if newTodo', () => {
      const { output, renderer } = setup({ newTodo: true })
      output.props.onKeyDown({ which: 13, target: { value: 'Use Redux' } })
      const updated = renderer.getRenderOutput()
      // @ts-expect-error TS(2551) FIXME: Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
      expect(updated.props.value).toEqual('')
    })

    it('should call onSave on blur', () => {
      // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
      const { output, props } = setup()
      output.props.onBlur({ target: { value: 'Use Redux' } })
      (expect(props.onSave) as any).toBeCalledWith('Use Redux');
    })

    it('shouldnt call onSave on blur if newTodo', () => {
      const { output, props } = setup({ newTodo: true })
      output.props.onBlur({ target: { value: 'Use Redux' } })
      (expect(props.onSave).not as any).toBeCalled();
    })
  })
})
