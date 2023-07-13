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
  const [showModal2, setShowModal2] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [openedDevice, setOpenedDevice] = useState<DeviceConfig>()

  const {
    devicesStore: { devices, loading, loadDevices, makeDevice, deleteDevice, updateDevice },
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

  const changeDevice = async (device: DeviceConfig) => {
    const openedId = openedDevice?.ModbusID

    if (openedId !== device.ModbusID && devices.find((el) => el.ModbusID == device.ModbusID)) {
      showMsg('Такой ID уже существует')

      return
    }

    await updateDevice(openedDevice?.ModbusID || 0, device)
    setShowModal2(false)
  }

  const removeDevice = async (id: number) => {
    await deleteDevice(id)
    setShowModal2(false)
  }

  const openDevice = (device: DeviceConfig) => {
    setOpenedDevice(device)
    setShowModal2(true)
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
          <Table onClick={openDevice} devices={devices} />
        </>
      )}
      <ModalWindow title="Добавить устройство" showModal={showModal} setShowModal={setShowModal}>
        <DeviceForm msg={errorMsg} onSubmit={createDevice} />
      </ModalWindow>
      <ModalWindow title="Изменить устройство" showModal={showModal2} setShowModal={setShowModal2}>
        <DeviceForm msg={errorMsg} onDelete={removeDevice} onSubmit={changeDevice} defaultValue={openedDevice} />
      </ModalWindow>
    </>
  )
})

export default Devices
