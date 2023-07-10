import { FC } from 'react'
import { DeviceData } from '@/models/types'

type CardProps = {
  data: DeviceData
}

const Card: FC<CardProps> = ({ data }) => {
  return (
    <div className="@container">
      <div className="@[900px]:text-6xl @[600px]:text-5xl @[400px]:text-4xl @[350px]:text-2xl @[280px]:text-xl aspect-square border-[0.2em] rounded-xl border-green-600 bg-emerald-900 p-2">
        <h5 className="text-center text-[1.25em]">{data.title}</h5>
        {/*<ul>*/}
        {/*  <li>Имя: {data.title}</li>*/}
        {/*  <li>Адресс: {data.id}</li>*/}
        {/*  <li>Статус: {data.status}</li>*/}
        {/*  <li className="text-2xl">Значение: {data.value || '----'}</li>*/}
        {/*</ul>*/}
      </div>
    </div>
  )
}

export default Card
