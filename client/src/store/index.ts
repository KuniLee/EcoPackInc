import { createContext, useContext } from 'react'
import DevicesStore from '@/modules/Devices/store/devices-store'

export class RootStore {
  devicesStore = new DevicesStore()
}

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStore = () => {
  const context = useContext(RootStoreContext)

  if (context === null) {
    throw new Error('You have forgotten to wrap your root component with RootStoreProvider')
  }

  return context
}
