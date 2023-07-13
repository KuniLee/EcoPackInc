import { makeAutoObservable, runInAction } from 'mobx'
import { getConfig, patchConfig } from '@/modules/Configs/API/config'
import { Configs } from '@/models/types'

class ConfigStore {
  settings: Configs | null = null
  loading = true

  constructor() {
    makeAutoObservable(this)
  }

  loadSettings = async () => {
    try {
      runInAction(() => {
        this.loading = true
      })
      const configs = await getConfig()

      runInAction(() => {
        this.settings = configs
        this.loading = false
      })
    } catch (e) {
      console.error(e)
    }
  }

  saveSetting = async (config: Partial<Configs>) => {
    try {
      await patchConfig(config)
    } catch (e) {
      console.error(e)
    }
  }
}

export default ConfigStore
