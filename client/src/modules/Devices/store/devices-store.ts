import { makeAutoObservable } from 'mobx'
import { DeviceConfig } from '@/models/types'
import { getDevices } from '@/modules/Devices/API/devices'

class DevicesStore {
  devices: DeviceConfig[] = []
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  loadDevices = async () => {
    try {
      this.loading = true
      this.devices = await getDevices()
      this.loading = false
    } catch (e) {
      console.error(e)
    }
  }
}

export default DevicesStore
