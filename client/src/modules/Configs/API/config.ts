import ky from 'ky'
import { BASE_API_URL } from '@/contants'
import { Configs } from '@/models/types'

export async function getConfig() {
  return ky.get('settings', { prefixUrl: BASE_API_URL }).json<Configs>()
}

export async function patchConfig(config: Partial<Configs>) {
  return ky.put('settings', { prefixUrl: BASE_API_URL, json: config }).json<Configs>()
}
