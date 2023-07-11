export type DeviceStatus = 'ok' | 'disabled' | 'error'

export type DeviceData = {
  id: number
  title: string
  screen: number
  status: DeviceStatus
  value: number | null
  performance: number | null
}
