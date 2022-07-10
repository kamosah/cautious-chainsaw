// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error TS(7016): Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import classnames from 'classnames'

type Props = {
    active: boolean;
    children: React.ReactNode;
    setFilter: (...args: any[]) => any;
};

const Link = ({ active, children, setFilter }: Props) =>
  (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className={classnames({ selected: active })}
      style={{ cursor: 'pointer' }}
      onClick={() => setFilter()}
    >
      {children}
    {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </a>
  )

export default Link
