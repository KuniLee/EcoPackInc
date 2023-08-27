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
          'flex flex-col p-[0.4em] justify-between @[900px]:text-6xl @[600px]:text-[40px] @[400px]:text-[30px] @[350px]:text-2xl ' +
            '@[270px]:text-lg aspect-square border-[0.2em] rounded-xl'
        )}>
        <h5 className="text-center leading-none text-[1em]">{title}</h5>
        {plan !== undefined && plan !== null && (
          <div className="flex mt-1 flex-col">
            <Progress plan={plan} production={production} />
            <span className="leading-none text-[1em] mt-1 text-end">План: {plan}</span>
          </div>
        )}
        <div className="flex flex-col">
          <span className="mb-1 @[400px]:mb-2 leading-none text-[0.75em]">За смену: </span>
          <span className="mb-1 @[400px]:mb-2 leading-none text-[3.5em] self-center">
            {production === null || production === undefined ? '----' : production}
          </span>
          <span className="mb-1 @[400px]:mb-2 leading-none text-[0.75em]">Производительность (шт/мин):</span>
          <span className="text-[3em] leading-none self-center">
            {performance === null || performance === undefined ? '----' : performance}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
