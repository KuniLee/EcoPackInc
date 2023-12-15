import { FC, useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

type WebSocketMsg = {
  time: string
  stage: string
}

const Header: FC = () => {
  const [data, setData] = useState<WebSocketMsg>()

  const { lastJsonMessage } = useWebSocket<WebSocketMsg>(`ws://${window.location.host}/ws/time`, {
    shouldReconnect: () => true,
  })

  useEffect(() => {
    if (lastJsonMessage !== null) {
      setData(lastJsonMessage)
    }
  }, [lastJsonMessage])

  return (
    <header className="h-24 flex relative text-6xl py-4 justify-between">
      {data && (
        <>
          <span>Смена {data.stage}</span>
          <time>{data.time}</time>
        </>
      )}
    </header>
  )
}

export default Header
