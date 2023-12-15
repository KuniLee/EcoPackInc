import { FC, useEffect, useState } from 'react'
import { DeviceData } from '@/models/types'
import { isNull } from 'lodash'
import cx from 'classnames'

type ProgressProps = {
  plan: DeviceData['plan']
  production: DeviceData['production']
}

const Progress: FC<ProgressProps> = ({ plan, production }) => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    if (!isNull(plan) && !isNull(production)) {
      if (plan <= 0) setPercent(100)
      else setPercent(Math.round((production / plan) * 100))
    }
  }, [production, plan])

  if (isNull(plan) || isNull(production)) return null

  return (
    <>
      <div className="w-full bg-neutral-200 text-center relative rounded overflow-hidden">
        <div
          className={cx('p-0.5 absolute h-full text-primary-100', {
            'bg-primary': percent >= 100,
            'bg-red-900': percent < 30,
            'bg-amber-300': percent > 30 && percent < 100,
          })}
          style={{ width: (percent < 100 ? percent : 100) + '%' }}
        />
        <span
          className={cx('text-center relative', {
            'text-black': percent <= 60,
            'text-current': percent > 60,
          })}>
          {percent + '%'}
        </span>
      </div>
    </>
  )
}

export default Progress
