import { FC, useEffect, useState } from 'react'
import { DeviceData } from '@/models/types'
import { isNull } from 'lodash'
import cx from 'classnames'

type ProgressProps = {
  plan: DeviceData['plan']
  production: DeviceData['production']
}

const Progress: FC<ProgressProps> = ({ plan, production }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isNull(plan) && !isNull(production)) {
      if (plan <= 0) setValue(100)
      else setValue(Math.round((production / plan) * 100))
    }
  }, [production, plan])

  if (isNull(plan) || isNull(production)) return null

  return (
    <>
      <div className="w-full bg-neutral-200 text-center relative rounded overflow-hidden">
        <div
          className={cx('p-0.5 absolute h-full text-primary-100', {
            'bg-primary': value >= 100,
            'bg-red-900': value < 30,
            'bg-amber-300': value > 30 && value < 100,
          })}
          style={{ width: value + '%' }}
        />
        <span
          className={cx('text-center top-0 left-[50%] translate-x-[-50%]', {
            'text-black': value <= 60,
            'text-current': value > 60,
          })}>
          {value + '%'}
        </span>
      </div>
    </>
  )
}

export default Progress
