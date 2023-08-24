import { FC } from 'react'
import Devices from '@/modules/Devices'
import Configs from '@/modules/Configs'
import Password from '@components/Password/Password'

const Settings: FC = () => {
  return (
    <Password url="/api/password">
      <div className="pt-4 container mx-auto">
        <Devices />
        <Configs />
      </div>
    </Password>
  )
}

export default Settings
