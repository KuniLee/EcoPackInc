import { FC } from 'react'
import { DeviceData } from '@/models/types'

type CardProps = {
  data: DeviceData
}

const Card: FC<CardProps> = ({ data }) => {
  return (
    <div className="border-2 rounded-xl border-green-500 p-2">
      <ul>
        <li>Имя: {data.title}</li>
        <li>Адресс: {data.id}</li>
        <li>Статус: {data.status}</li>
        <li className="text-2xl">Значение: {data.value || '----'}</li>
      </ul>
    </div>
  )
}

export default Card
