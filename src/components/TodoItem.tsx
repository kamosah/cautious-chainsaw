import React, { Component } from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

type Props = {
    todo: any;
    editTodo: (...args: any[]) => any;
    deleteTodo: (...args: any[]) => any;
    completeTodo: (...args: any[]) => any;
};

type State = any;

export default class TodoItem extends Component<Props, State> {
  // @ts-expect-error TS(4114) FIXME: This member must have an 'override' modifier becau... Remove this comment to see the full error message
  props: any;
  // @ts-expect-error TS(4114) FIXME: This member must have an 'override' modifier becau... Remove this comment to see the full error message
  setState: any;

  // @ts-expect-error TS(4114) FIXME: This member must have an 'override' modifier becau... Remove this comment to see the full error message
  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id: any, text: any) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  // @ts-expect-error TS(4114) FIXME: This member must have an 'override' modifier becau... Remove this comment to see the full error message
  render () {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(text: any) => this.handleSave(todo.id, text)}
        />
      )
    } else {
      element = (
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
          <button className='destroy' onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    return (
      <li
        className={classnames({
          todo: true,
          completed: todo.completed,
          editing: this.state.editing
        })}
      >
        {element}
      </li>
    )
  }
}
