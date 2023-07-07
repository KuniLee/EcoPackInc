import { FC } from 'react'
import { useParams, Navigate } from 'react-router-dom'

type RouteParams = {
  screenId: string
}
const Screen: FC = () => {
  const { screenId } = useParams<RouteParams>()

  if (!(screenId && Number.isInteger(+screenId) && +screenId <= 10 && +screenId >= 1)) return <Navigate to={'../404'} />

  return <h1 className="text-2xl">Screen: {screenId}</h1>
}

export default Screen
