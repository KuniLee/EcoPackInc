import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Spinner from '@/UI/Spinner'
import { ConfigInput } from '@/modules/Configs/components/ConfigInput'
import { StageTimeInput } from '@/modules/Configs/components/StageTimeInput'

const Configs: FC = observer(() => {
  const {
    configStore: { loadSettings, loading },
  } = useStore()

  useEffect(() => {
    loadSettings()
  }, [loadSettings])

  return (
    <>
      <h1 className="text-xl mb-4">Основные настройки</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ConfigInput
            field="MODBUS_TCP_IP"
            label="MODBUS/TCP IP"
            validateOptions={{ required: 'Введите IP или домен' }}
            type="text"
          />
          <ConfigInput
            field="ATTEMPTS"
            label="Количество попыток опроса до исключения"
            validateOptions={{
              required: 'Введите количество от 1 до 10',
              min: { value: 1, message: 'от 1 до 10 раз' },
              max: { value: 10, message: 'от 1 до 10 раз' },
            }}
            type="number"
          />
          <ConfigInput
            field="ERROR_TIME"
            label="Таймаут ошибок (мс)"
            validateOptions={{
              required: 'Введите время на ошибку',
            }}
            type="number"
          />
          <StageTimeInput />
        </>
      )}
    </>
  )
})

export default Configs
