import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Table from '@/modules/Devices/components/Table'
import Button from '@/UI/Button'
import Spinner from '@/UI/Spinner'

const Devices: FC = observer(() => {
  const {
    devicesStore: { devices, loading, loadDevices },
  } = useStore()

  useEffect(() => {
    loadDevices()
  }, [loadDevices])

  return (
    <>
      <h1 className="text-xl mb-2">Modbus устройства</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Button className="my-2">Добавить устройство</Button>
          <Table devices={devices} />
        </>
      )}
    </>
  )
})

export default Devices
