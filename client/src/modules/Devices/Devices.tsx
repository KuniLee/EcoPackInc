import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'

const Devices: FC = observer(() => {
  const {
    devicesStore: { devices, loading, loadDevices },
  } = useStore()

  useEffect(() => {
    loadDevices()
  }, [loadDevices])

  return (
    <>
      <h1 className="text-xl">Modbus устройства</h1>
      {loading ? <p>Загрузка</p> : <p>{JSON.stringify(devices)}</p>}
    </>
  )
})

export default Devices
