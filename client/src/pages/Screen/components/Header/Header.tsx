import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="flex text-6xl p-4 justify-between">
      <span>Смена А</span>
      <time>15 мая 15:00</time>
    </header>
  )
}

export default Header
