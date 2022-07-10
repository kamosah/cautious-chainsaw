
import React from 'react'
import TodoTextInput from './TodoTextInput'

type Props = {
    addTodo: (...args: any[]) => any;
};

const Header = ({ addTodo }: Props) => (
  <header className='header'>
    <h1>todos</h1>
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
  </header>
)

export default Header
