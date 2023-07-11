import ky from 'ky'
import { BASE_API_URL } from '@/contants'
import { DeviceConfig } from '@/models/types'

export async function getDevices() {
  return ky.get('devices', { prefixUrl: BASE_API_URL }).json<DeviceConfig[]>()
}
