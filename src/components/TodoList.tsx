import React from 'react'
// @ts-expect-error TS(6142) FIXME: Module './TodoItem' was resolved to '/Users/kwamea... Remove this comment to see the full error message
import TodoItem from './TodoItem'

type Props = {
    filteredTodos: string[];
    actions: any;
};

// @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const TodoList = ({ filteredTodos, actions }: Props) => (<ul className="todo-list">
    {/* @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    {filteredTodos.map(todo => <TodoItem key={(todo as any).id} todo={todo} {...actions}/>)}
  </ul>);

export default TodoList
