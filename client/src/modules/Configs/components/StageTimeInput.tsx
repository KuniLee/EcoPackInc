import React, { FC } from 'react'
import { useStore } from '@/store'
import { useForm } from 'react-hook-form'
import { TEInput } from 'tw-elements-react'
import Button from '@/UI/Button'
import { StageLetters, StageLettersType } from '@/models/types'

type FormFields = {
  time1: string
  time2: string
  stage: StageLettersType
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
      stage: settings?.STAGE_TIME[2] || 'C',
    },
  })

  const onSubmit = handleSubmit(({ time1, time2, stage }) => {
    saveSetting({ STAGE_TIME: [time1, time2, stage] })
  })

  const validate = (value: string, { time1, time2 }: FormFields) => {
    return time1 !== time2 ? true : 'Не должны быть равны'
  }

  return (
    <form className="relative mb-6" onSubmit={onSubmit}>
      <h5 className="mb-2">Время начала смен</h5>
      <div className="flex gap-1 [&>div]:min-w-[150px]">
        <TEInput
          label="Начало дневной"
          type="time"
          id="stagetime1"
          {...register('time1', {
            required: 'Введите время',
            validate,
          })}
        />
        <TEInput
          label="Начало ночной"
          type="time"
          id="stagetime2"
          {...register('time2', {
            required: 'Введите время',
            validate,
          })}
        />
        <label htmlFor="currentStage" className="ms-4 self-center">
          Текущая смена:
        </label>
        <select
          {...register('stage')}
          id="currentStage"
          className="block text-current bg-transparent min-h-[auto] border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary px-3 min-w-[50px]">
          {StageLetters.map((el) => (
            <option className="text-black" value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
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
