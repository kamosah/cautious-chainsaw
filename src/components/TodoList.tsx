// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error TS(6142): Module './TodoItem' was resolved to '/Users/kwamea... Remove this comment to see the full error message
import TodoItem from './TodoItem'

type Props = {
    filteredTodos: string[];
    actions: any;
};

// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
const TodoList = ({ filteredTodos, actions }: Props) => (<ul className="todo-list">
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    {filteredTodos.map(todo => <TodoItem key={(todo as any).id} todo={todo} {...actions}/>)}
  {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
  </ul>);

export default TodoList
