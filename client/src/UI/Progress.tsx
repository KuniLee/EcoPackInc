import { FC, useEffect, useState } from 'react'

type ProgressProps = {
  percent: number
}

const Progress: FC<ProgressProps> = ({ percent }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (percent <= 100 && percent >= 0) setValue(percent)
  }, [percent])

  return (
    <div className="w-full bg-neutral-200 rounded overflow-hidden">
      <div
        className="bg-primary p-0.5 text-center text-black text-xs font-medium leading-none text-primary-100"
        style={{ width: value + '%' }}>
        {percent}%
      </div>
    </div>
  )
}

export default Progress
