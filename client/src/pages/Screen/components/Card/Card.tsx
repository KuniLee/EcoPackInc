import { FC } from 'react'
import { DeviceData } from '@/models/types'
import cx from 'classnames'

type CardProps = {
  data: DeviceData
}

const Card: FC<CardProps> = ({ data: { status, title, value } }) => {
  return (
    <div className="@container">
      <div
        className={cx(
          {
            'border-gray-600 bg-gray-800': status === 'disabled',
            'bg-emerald-900 border-green-600': status === 'ok',
            'bg-red-900 border-red-600': status === 'error',
          },
          'flex flex-col @[900px]:text-6xl @[600px]:text-5xl @[400px]:text-4xl @[350px]:text-2xl ' +
            '@[280px]:text-xl aspect-square border-[0.2em] rounded-xl p-2'
        )}>
        <h5 className="text-center text-[1.25em]">{title}</h5>
        <span className="mt-8 text-[1.25em]">Значение: {value || '----'}</span>
      </div>
    </div>
  )
}

export default Card
