import { FC } from 'react'
import Devices from '@/modules/Devices'
import Configs from '@/modules/Configs'

const Settings: FC = () => {
  return (
    <div className="pt-4 container mx-auto">
      <Devices />
      <Configs />
    </div>
  )
}

export default Settings
