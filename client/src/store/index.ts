import { createContext, useContext } from 'react'
import DevicesStore from '@/modules/Devices/store/devices-store'
import ConfigStore from '@/modules/Configs/store/config-store'

export class RootStore {
  devicesStore = new DevicesStore()
  configStore = new ConfigStore()
}

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStore = () => {
  const context = useContext(RootStoreContext)

  if (context === null) {
    throw new Error('You have forgotten to wrap your root component with RootStoreProvider')
  }

  return context
}
