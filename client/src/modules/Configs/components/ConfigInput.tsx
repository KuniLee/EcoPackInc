import React, { FC } from 'react'
import { useStore } from '@/store'
import { RegisterOptions, useForm } from 'react-hook-form'
import { Configs } from '@/models/types'
import { TEInput } from 'tw-elements-react'
import Button from '@/UI/Button'

type ConfigInputProps = {
  field: keyof Configs
  label: string
  validateOptions: RegisterOptions
  type: 'number' | 'text' | 'time'
}
export const ConfigInput: FC<ConfigInputProps> = ({ field, label, validateOptions, type }) => {
  const {
    configStore: { settings, saveSetting },
  } = useStore()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    values: {
      [field]: settings?.[field] || '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    saveSetting(data)
  })

  return (
    <form className="relative mb-8 flex gap-1 " onSubmit={onSubmit}>
      <TEInput type={type} id={field} label={label} {...register(field, validateOptions)}>
        <small id="modbusIpError" className="absolute w-full text-danger-700 dark:text-neutral-200">
          {
            // @ts-ignore
            errors[field]?.message
          }
        </small>
      </TEInput>
      <Button type="submit" className="self-end">
        Сохранить
      </Button>
    </form>
  )
}
