import { ReactElement } from 'react'
import { Header } from '@components'

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="mx-auto h-[100vh] w-[375px] overflow-hidden bg-gray-900 text-gray-100">
      <Header />
      {children}
      {/* 푸터  */}
    </div>
  )
}

export default Layout
