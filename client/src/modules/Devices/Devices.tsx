import { FC, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Table from '@/modules/Devices/components/Table'
import Button from '@/UI/Button'
import Spinner from '@/UI/Spinner'
import ModalWindow from '@components/ModalWindow/ModalWindow'
import DeviceForm from '@/modules/Devices/components/DeviceForm/DeviceForm'

const Devices: FC = observer(() => {
  const [showModal, setShowModal] = useState(true)

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
      <ModalWindow title="Добавить устройство" showModal={showModal} setShowModal={setShowModal}>
        <DeviceForm />
      </ModalWindow>
    </>
  )
})

export default Devices
