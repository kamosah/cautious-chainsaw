// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

type Props = {
    completedCount: number;
    activeCount: number;
    onClearCompleted: (...args: any[]) => any;
};

const Footer = (props: Props) => {
  const { activeCount, completedCount, onClearCompleted } = props
  const itemWord = activeCount === 1 ? 'item' : 'items'
  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <footer className="footer">
      {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <span className="todo-count">
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </span>
      {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter =>
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <li key={filter}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <FilterLink filter={filter}>
              {/* @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message */}
              {FILTER_TITLES[filter]}
            </FilterLink>
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          </li>
        )}
      {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </ul>
      {
        !!completedCount &&
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        >Clear completed</button>
        
      }
    {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </footer>
  )
}

export default Footer
