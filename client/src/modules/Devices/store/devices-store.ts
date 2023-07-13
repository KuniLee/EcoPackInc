import { makeAutoObservable, runInAction } from 'mobx'
import { DeviceConfig } from '@/models/types'
import { createDevice, getDevices, removeDevice, updateDevice } from '@/modules/Devices/API/devices'

class DevicesStore {
  devices: DeviceConfig[] = []
  loading = true

  constructor() {
    makeAutoObservable(this)
  }

  loadDevices = async () => {
    try {
      runInAction(() => {
        this.loading = true
      })
      const devices = await getDevices()

      runInAction(() => {
        this.devices = devices.sort((a, b) => a.ModbusID - b.ModbusID)
        this.loading = false
      })
    } catch (e) {
      console.error(e)
    }
  }

  makeDevice = async (data: DeviceConfig) => {
    try {
      const newDevice = await createDevice(data)

      runInAction(() => {
        this.devices.push(newDevice)
        this.devices = this.devices.sort((a, b) => a.ModbusID - b.ModbusID)
      })
    } catch (e) {
      console.error(e)
    }
  }

  deleteDevice = async (id: number) => {
    try {
      await removeDevice(id)

      runInAction(() => {
        this.devices = this.devices.filter((el) => el.ModbusID !== id)
        this.devices = this.devices.sort((a, b) => a.ModbusID - b.ModbusID)
      })
    } catch (e) {
      console.error(e)
    }
  }

  updateDevice = async (id: number, data: DeviceConfig) => {
    try {
      const updatedDevice = await updateDevice(id, data)

      runInAction(() => {
        this.devices = this.devices.filter((el) => el.ModbusID !== id)
        this.devices.push(updatedDevice)
        this.devices = this.devices.sort((a, b) => a.ModbusID - b.ModbusID)
      })
    } catch (e) {
      console.error(e)
    }
  }
}

export default DevicesStore
