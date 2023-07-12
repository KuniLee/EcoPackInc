import { FC, HTMLAttributes } from 'react'
import cx from 'classnames'

const Alert: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return (
    <div className={cx('my-4 rounded-lg bg-danger px-6 py-3 text-base', className)} role="alert">
      {children}
    </div>
  )
}

export default Alert
