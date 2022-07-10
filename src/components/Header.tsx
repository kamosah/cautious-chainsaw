
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error TS(6142): Module './TodoTextInput' was resolved to '/Users/k... Remove this comment to see the full error message
import TodoTextInput from './TodoTextInput'

type Props = {
    addTodo: (...args: any[]) => any;
};

const Header = ({ addTodo }: Props) => (
  // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  <header className='header'>
    {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <h1>todos</h1>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <TodoTextInput
      newTodo
      onSave={(text: any) => {
        if (text.length !== 0) {
          // simulate delayed application logic
          // setTimeout(addTodo, 1000, text)
          addTodo(text)
        }
      }}
      placeholder='What needs to be done?'
    />
  {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
  </header>
)

export default Header
