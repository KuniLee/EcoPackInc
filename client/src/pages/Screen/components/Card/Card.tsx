import { FC } from 'react'
import { DeviceData } from '@/models/types'
import cx from 'classnames'
import Progress from '@/UI/Progress'

type CardProps = {
  data: DeviceData
}

const Card: FC<CardProps> = ({ data: { status, title, plan, production, performance } }) => {
  return (
    <div className="@container">
      <div
        className={cx(
          {
            'border-gray-600 bg-gray-800': status === 'disabled',
            'bg-emerald-900 border-green-600': status === 'ok',
            'bg-red-900 border-red-600': status === 'error',
          },
          'flex flex-col p-[0.4em] justify-between @[900px]:text-6xl @[600px]:text-5xl @[400px]:text-4xl @[350px]:text-2xl ' +
            '@[270px]:text-xl aspect-square border-[0.2em] rounded-xl p-2'
        )}>
        <h5 className="text-center leading-none text-[1em]">{title}</h5>
        <Progress plan={plan} production={production} />
        <div className="flex flex-col">
          <span className="mb-2 leading-none text-[0.75em]">За смену: </span>
          <span className="mb-2 leading-none @[900px]:text-[4em] @[400px]:text-[3em] text-[3.5em] self-center">
            {production === null || production === undefined ? '----' : production}
          </span>
          <span className="mb-2 leading-none text-[0.75em]">Производительность (шт/мин):</span>
          <span className="text-[3.2em] leading-none @[900px]:text-[4em] @[400px]:text-[3em] self-center">
            {performance === null || performance === undefined ? '----' : performance}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
