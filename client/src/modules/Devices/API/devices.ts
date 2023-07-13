import ky from 'ky'
import { BASE_API_URL } from '@/contants'
import { DeviceConfig } from '@/models/types'

export async function getDevices() {
  return ky.get('devices', { prefixUrl: BASE_API_URL }).json<DeviceConfig[]>()
}

export async function createDevice(device: DeviceConfig) {
  return ky.post('devices', { prefixUrl: BASE_API_URL, json: device }).json<DeviceConfig>()
}

export async function removeDevice(id: number) {
  return ky.delete(`device/${id}`, { prefixUrl: BASE_API_URL })
}

export async function updateDevice(id: number, device: DeviceConfig) {
  return ky.put(`device/${id}`, { prefixUrl: BASE_API_URL, json: device }).json<DeviceConfig>()
}
