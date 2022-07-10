// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react'
// @ts-expect-error TS(7016): Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import classnames from 'classnames'

type Props = {
    onSave: (...args: any[]) => any;
    text?: string;
    placeholder?: string;
    editing?: boolean;
    newTodo?: boolean;
};

type State = any;

export default class TodoTextInput extends Component<Props, State> {
  props: any;
  setState: any;

  state = {
    // @ts-expect-error TS(2729): Property 'props' is used before its initialization... Remove this comment to see the full error message
    text: this.props.text || ''
  }

  handleSubmit = (e: any) => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = (e: any) => {
    this.setState({ text: e.target.value })
  }

  handleBlur = (e: any) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}
