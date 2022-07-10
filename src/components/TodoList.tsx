import React from 'react'
import TodoItem from './TodoItem'

type Props = {
    filteredTodos: string[];
    actions: any;
};

const TodoList = ({ filteredTodos, actions }: Props) => (<ul className="todo-list">
    {filteredTodos.map(todo => <TodoItem key={(todo as any).id} todo={todo} {...actions}/>)}
  </ul>);

export default TodoList
