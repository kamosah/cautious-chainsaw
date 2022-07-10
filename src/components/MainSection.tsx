// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error TS(6142): Module './Footer' was resolved to '/Users/kwameamo... Remove this comment to see the full error message
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

type Props = {
    todosCount: number;
    completedCount: number;
    actions: any;
};

const MainSection = ({ todosCount, completedCount, actions }: Props) => (
  // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  <section className='main'>
    {!!todosCount && (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <span>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <input
          className='toggle-all'
          type='checkbox'
          checked={completedCount === todosCount}
          onClick={actions.completeAllTodos}
          onChange={actions.completeAllTodos}
        />
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <label data-cy-toggle-all onClick={actions.completeAllTodos} />
      {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </span>
    )}
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <VisibleTodoList />
    {!!todosCount && (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    )}
  {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
  </section>
)

export default MainSection
