import { FC } from 'react'
import { DeviceConfig } from '@/models/types'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

type TableProps = {
  devices: DeviceConfig[]
  onClick: (device: DeviceConfig) => void
}
const Table: FC<TableProps> = ({ devices, onClick }) => {
  return (
    <div className="flex flex-col text-black">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full center text-center text-sm font-light">
              <thead className="border-b font-medium bg-neutral-700 text-white">
                <tr>
                  <th scope="col" className="border-r px-6 py-2">
                    ID
                  </th>
                  <th scope="col" className="border-r px-6 py-2">
                    Название
                  </th>
                  <th scope="col" className="border-r px-6 py-2">
                    Опрос
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Экран
                  </th>
                </tr>
              </thead>
              <tbody className="bg-neutral-50">
                {!devices.length && (
                  <tr>
                    <td colSpan={4} className="whitespace-nowrap px-6 py-2">
                      Нет устройств
                    </td>
                  </tr>
                )}
                {devices.map((el) => (
                  <tr
                    key={el.ModbusID}
                    onClick={() => onClick(el)}
                    className="border-b dark:border-neutral-500 cursor-pointer">
                    <td className="whitespace-nowrap border-r px-6 py-2 font-medium">{el.ModbusID}</td>
                    <td className="whitespace-nowrap border-r px-6 py-2">{el.Name}</td>
                    <td className="whitespace-nowrap border-r px-6 py-1">
                      {el.IsRequested ? (
                        <AiOutlineCheckCircle className="fill-success inline-block w-6 h-6" />
                      ) : (
                        <AiOutlineCloseCircle className="fill-danger inline-block w-6 h-6" />
                      )}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">{el.Screen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
