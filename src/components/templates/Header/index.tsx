import { ReactNode } from 'react'

interface HeaderProps {
  children?: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 z-[999] px-[16px] py-[14px] sm:h-[52px] sm:w-[375px] sm:max-w-[375px]`}
    >
      {children}
    </header>
  )
}

export default Header
