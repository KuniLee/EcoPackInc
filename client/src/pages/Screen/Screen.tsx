import { FC, useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import useWebSocket from 'react-use-websocket'
import { DeviceData } from '@/models/types'
import Card from '@/pages/Screen/components/Card'

type RouteParams = {
  screenId: string
}

const Screen: FC = () => {
  const { screenId } = useParams<RouteParams>()
  const [data, setData] = useState<DeviceData[]>([])

  const { lastJsonMessage } = useWebSocket<DeviceData[]>(`ws://${window.location.hostname}:1880/ws/test`, {
    shouldReconnect: () => true,
  })

  useEffect(() => {
    if (lastJsonMessage !== null && screenId) setData(lastJsonMessage.filter((el) => el.screen === Number(screenId)))
  }, [lastJsonMessage, screenId])

  if (!(screenId && Number.isInteger(+screenId) && +screenId <= 10 && +screenId >= 1)) return <Navigate to={'../404'} />

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Screen {screenId}</h1>
      <div className="flex gap-2">
        {data.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </div>
  )
}

export default Screen
