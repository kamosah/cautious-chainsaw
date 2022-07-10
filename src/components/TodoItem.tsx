// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react'
// @ts-expect-error TS(7016): Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import classnames from 'classnames'
// @ts-expect-error TS(6142): Module './TodoTextInput' was resolved to '/Users/k... Remove this comment to see the full error message
import TodoTextInput from './TodoTextInput'

type Props = {
    todo: any;
    editTodo: (...args: any[]) => any;
    deleteTodo: (...args: any[]) => any;
    completeTodo: (...args: any[]) => any;
};

type State = any;

export default class TodoItem extends Component<Props, State> {
  props: any;
  setState: any;

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

  render () {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(text: any) => this.handleSave(todo.id, text)}
        />
      )
    } else {
      element = (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className='view'>
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <input
            className='toggle'
            type='checkbox'
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <button className='destroy' onClick={() => deleteTodo(todo.id)} />
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
      )
    }

    return (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <li
        className={classnames({
          todo: true,
          completed: todo.completed,
          editing: this.state.editing
        })}
      >
        {element}
      {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </li>
    )
  }
}
