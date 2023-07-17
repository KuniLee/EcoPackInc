export type DeviceStatus = 'ok' | 'disabled' | 'error'

export type DeviceData = {
  id: number
  title: string
  screen: number
  status: DeviceStatus
  value: number | null
  performance: number | null
}

export type DeviceConfig = {
  ModbusID: number
  Name: string
  IsRequested: boolean
  ValueRegAdr: number
  ResetRegAdr: number
  Screen: number
}

export type Configs = {
  MODBUS_TCP_IP: string
  ATTEMPTS: number
  ERROR_TIME: number
  STAGE_TIME: [string, string, 'A' | 'B' | 'C' | 'D']
}
