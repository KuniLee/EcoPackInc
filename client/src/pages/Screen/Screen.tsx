import { FC, useEffect, useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { DeviceData } from '@/models/types'
import Card from '@/pages/Screen/components/Card'
import cl from 'classnames'
import Header from './components/Header'
import calcColumns from './helpers/calcColumns'

type RouteParams = {
  screenId: string
}

const Screen: FC = () => {
  const { screenId } = useParams<RouteParams>()
  //const [data, setData] = useState<DeviceData[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const [data, setData] = useState<DeviceData[]>(
    new Array(21).fill(1).map((el, idx) => ({
      id: idx + 1,
      screen: 1,
      status: 'ok',
      value: 1000,
      title: 'Станок',
    }))
  )

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.addEventListener('change', (ev) => {
        const newValue = (ev.target as HTMLInputElement).value

        setData(
          new Array(+newValue).fill(1).map((el, idx) => ({
            id: idx + 1,
            screen: 1,
            status: 'ok',
            value: 1000,
            title: 'Станок',
          }))
        )
      })
      inputRef.current.value = String(data.length)
    }
  }, [])

  // const { lastJsonMessage } = useWebSocket<DeviceData[]>(`ws://${window.location.hostname}:1880/ws/test`, {
  //   shouldReconnect: () => true,
  // })

  // useEffect(() => {
  //   if (lastJsonMessage !== null && screenId) setData(lastJsonMessage.filter((el) => el.screen === Number(screenId)))
  // }, [lastJsonMessage, screenId])

  if (!(screenId && Number.isInteger(+screenId) && +screenId <= 10 && +screenId >= 1)) return <Navigate to={'../404'} />

  return (
    <div className="px-8 pb-4 py-2 relative h-screen flex flex-col bg-green-900">
      <Header />
      <div className={cl(calcColumns(data.length), 'grid gap-6 flex-1  justify-center content-center')}>
        {data.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
      <div className="absolute bottom-0 flex">
        <input ref={inputRef} max="21" min="0" type="number" className="w-12 text-2xl" />
      </div>
    </div>
  )
}

export default Screen
