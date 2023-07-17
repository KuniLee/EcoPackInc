import React, { FC } from 'react'
import { useStore } from '@/store'
import { useForm } from 'react-hook-form'
import { TEInput } from 'tw-elements-react'
import Button from '@/UI/Button'

type FormFields = {
  time1: string
  time2: string
}
export const StageTimeInput: FC = () => {
  const {
    configStore: { settings, saveSetting },
  } = useStore()

  //
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    values: {
      time1: settings?.STAGE_TIME[0] || '09:00',
      time2: settings?.STAGE_TIME[1] || '21:00',
    },
  })

  const onSubmit = handleSubmit(({ time1, time2 }) => {
    saveSetting({ STAGE_TIME: [time1, time2, 'A'] })
  })

  const validate = (value: string, { time1, time2 }: FormFields) => {
    return time1 !== time2 ? true : 'Не должны быть равны'
  }

  return (
    <form className="relative mb-6" onSubmit={onSubmit}>
      <h5>Время начала смен</h5>
      <div className="flex gap-1 [&>input]:flex-grow">
        <TEInput
          label="Начало дневной"
          type="time"
          id="stagetime1"
          {...register('time1', {
            required: 'Введите время',
            validate,
          })}></TEInput>
        <TEInput
          label="Начало ночной"
          type="time"
          id="stagetime2"
          {...register('time2', {
            required: 'Введите время',
            validate,
          })}></TEInput>
        <Button type="submit" className="self-end">
          Сохранить
        </Button>
      </div>
      <small id="modbusIpError" className="absolute w-full text-danger-700 dark:text-neutral-200">
        {(errors.time1?.message || '') + ' ' + (errors.time2?.message || '')}
      </small>
    </form>
  )
}
