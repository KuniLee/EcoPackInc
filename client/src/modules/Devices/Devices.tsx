import { FC, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Table from '@/modules/Devices/components/Table'
import Button from '@/UI/Button'
import Spinner from '@/UI/Spinner'
import ModalWindow from '@components/ModalWindow/ModalWindow'
import DeviceForm from '@/modules/Devices/components/DeviceForm/DeviceForm'
import { DeviceConfig } from '@/models/types'

const Devices: FC = observer(() => {
  const [showModal, setShowModal] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const {
    devicesStore: { devices, loading, loadDevices, makeDevice },
  } = useStore()

  useEffect(() => {
    loadDevices()
  }, [loadDevices])

  function showMsg(msg: string) {
    setErrorMsg(msg)
    setTimeout(() => {
      setErrorMsg(null)
    }, 3000)
  }

  const createDevice = async (device: DeviceConfig) => {
    if (devices.find((el) => el.ModbusID == device.ModbusID)) {
      showMsg('Такой ID уже существует')

      return
    }
    await makeDevice(device)
    setShowModal(false)
  }

  return (
    <>
      <h1 className="text-xl mb-2">Modbus устройства</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Button className="my-2" onClick={() => setShowModal(true)}>
            Добавить устройство
          </Button>
          <Table devices={devices} />
        </>
      )}
      <ModalWindow title="Добавить устройство" showModal={showModal} setShowModal={setShowModal}>
        <DeviceForm msg={errorMsg} onSubmit={createDevice} />
      </ModalWindow>
    </>
  )
})

export default Devices
