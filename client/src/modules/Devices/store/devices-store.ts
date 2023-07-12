import { makeAutoObservable, runInAction } from 'mobx'
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
      runInAction(() => {
        this.loading = true
      })
      const devices = await getDevices()

      runInAction(() => {
        this.devices = devices
        this.loading = false
      })
    } catch (e) {
      console.error(e)
    }
  }
}

export default DevicesStore
