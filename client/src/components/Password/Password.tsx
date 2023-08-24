import { FC, PropsWithChildren, useState } from 'react'
import { TEInput, TERipple } from 'tw-elements-react'
import { Form, useForm } from 'react-hook-form'

type PasswordProps = PropsWithChildren & {
  url: string
}

const Password: FC<PasswordProps> = ({ children, url }) => {
  const [access, setAccess] = useState(false)

  const {
    control,
    register,
    formState: { errors },
  } = useForm<{ password: string }>()

  return access ? (
    children
  ) : (
    <div className="h-screen container mx-auto flex items-center justify-center">
      <Form
        action={url}
        control={control}
        onSuccess={() => setAccess(true)}
        headers={{ 'Content-Type': 'application/json' }}>
        <TEInput
          {...register('password', {
            required: 'Введите пароль',
          })}
          type="password"
          label="Password"
          className="mb-7 relative"
          size="lg">
          {errors?.root?.server && <p className="text-danger-700 absolute bottom-[-1.5rem]">Пароль неверный</p>}
        </TEInput>
        <TERipple rippleColor="light" className="w-full">
          <button
            type="submit"
            className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Войти
          </button>
        </TERipple>
      </Form>
    </div>
  )
}

export default Password
