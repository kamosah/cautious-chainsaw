import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classnames from 'classnames'

type Props = {
    active: boolean;
    children: React.ReactNode;
    setFilter: (...args: any[]) => any;
};

const Link = ({ active, children, setFilter }: Props) =>
  (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className={classnames({ selected: active })}
      style={{ cursor: 'pointer' }}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  )

export default Link
