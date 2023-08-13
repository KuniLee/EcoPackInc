import React, { FC, useId } from 'react'
import { useForm } from 'react-hook-form'
import { DeviceConfig } from '@/models/types'
import { TEInput } from 'tw-elements-react'
import Button from '@/UI/Button'
import Alert from '@/UI/Alert'

type DeviceFormProp = {
  defaultValue?: DeviceConfig
  onSubmit: (data: DeviceConfig) => void
  onDelete?: (id: number) => void
  msg: string | null
}

const DeviceForm: FC<DeviceFormProp> = ({ defaultValue, onDelete, onSubmit: onSubmitFunc, msg }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<DeviceConfig>({
    values: defaultValue,
    defaultValues: { ResetRegAdr: 1, ValueRegAdr: 1003 },
  })

  const onSubmit = handleSubmit(onSubmitFunc)

  const id = useId()

  return (
    <>
      <form onSubmit={onSubmit} className="mt-2 rounded text-black flex flex-col">
        <TEInput
          type="number"
          id={id}
          min={1}
          max={255}
          label="Modbus ID"
          defaultValue={defaultValue?.ModbusID}
          {...register('ModbusID', { required: 'Введите ID', valueAsNumber: true })}>
          <small id={'idError' + id} className="absolute w-full text-danger-700 dark:text-neutral-200">
            {errors.ModbusID?.message}
          </small>
        </TEInput>
        <TEInput
          className="mt-6"
          type="text"
          id={'name' + id}
          label="Название"
          defaultValue={defaultValue?.Name}
          {...register('Name', {
            required: 'Введите название',
            maxLength: {
              value: 50,
              message: 'Не должно превышать 50 символов',
            },
          })}>
          <small id={'nameError' + id} className="absolute w-full text-danger-700 dark:text-neutral-200">
            {errors.Name?.message}
          </small>
        </TEInput>
        <TEInput
          className="mt-6"
          type="number"
          id={'screen' + id}
          label="Экран"
          min={1}
          max={10}
          defaultValue={defaultValue?.Screen}
          {...register('Screen', { required: 'Введите номер экрана', valueAsNumber: true })}>
          <small id={'screenError' + id} className="absolute w-full text-danger-700 dark:text-neutral-200">
            {errors.Screen?.message}
          </small>
        </TEInput>
        <TEInput
          className="mt-6"
          type="number"
          id={'plan' + id}
          label="План на смену"
          max={999999}
          defaultValue={defaultValue?.StagePlan ?? ''}
          {...register('StagePlan', { valueAsNumber: true })}>
          <small id={'planError' + id} className="absolute w-full text-danger-700 dark:text-neutral-200">
            {errors.StagePlan?.message}
          </small>
        </TEInput>
        <TEInput
          className="mt-6"
          type="number"
          id={'valueRegAdr' + id}
          label="Регистр значения"
          disabled={true}
          defaultValue={1001}
          {...register('ValueRegAdr')}></TEInput>{' '}
        <TEInput
          className="mt-6"
          type="number"
          id={'resetRegAdr' + id}
          disabled={true}
          label="Регистр сброса"
          defaultValue={1}
          {...register('ResetRegAdr')}></TEInput>
        <div className="mt-4 block min-h-[1.5rem] pl-[1.5rem]">
          <input
            {...register('IsRequested')}
            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            id={'isRequested' + id}
          />
          <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor={'isRequested' + id}>
            Опрос
          </label>
        </div>
        {msg && <Alert>{msg}</Alert>}
        <div className="flex justify-between mt-4">
          <Button type="submit" className="self-end">
            Сохранить
          </Button>
          {onDelete && defaultValue && (
            <Button onClick={() => onDelete(defaultValue?.ModbusID)} className="!bg-danger">
              Удалить
            </Button>
          )}
        </div>
      </form>
    </>
  )
}

export default DeviceForm
