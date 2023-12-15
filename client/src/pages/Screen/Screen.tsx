import { FC, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { DeviceData } from '@/models/types'
import Card from '@/pages/Screen/components/Card'
import cl from 'classnames'
import Header from './components/Header'
import calcColumns from './helpers/calcColumns'
import useWebSocket from 'react-use-websocket'

type RouteParams = {
  screenId: string
}

const Screen: FC = () => {
  const { screenId } = useParams<RouteParams>()
  const [data, setData] = useState<DeviceData[]>([])

  const { lastJsonMessage } = useWebSocket<DeviceData[]>(`ws://${window.location.host}/ws/data`, {
    shouldReconnect: () => true,
  })

  useEffect(() => {
    if (lastJsonMessage !== null && screenId) setData(lastJsonMessage.filter((el) => el.screen === Number(screenId)))
  }, [lastJsonMessage, screenId])

  if (!(screenId && Number.isInteger(+screenId) && +screenId <= 10 && +screenId >= 1)) return <Navigate to={'../404'} />

  return (
    <div className="px-8 pb-4 py-2 relative h-screen flex flex-col">
      <Header />
      <div className={cl(calcColumns(data.length), 'grid gap-6 flex-1  justify-center content-center')}>
        {data.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </div>
  )
}

export default Screen
