import React from 'react'
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
