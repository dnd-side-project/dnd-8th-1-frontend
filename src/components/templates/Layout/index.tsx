import { ReactElement } from 'react'
import { Header, FormHeader } from '@components'
import { usePathname } from 'next/navigation'
const Layout = ({ children }: { children: ReactElement }) => {
  const pathname = usePathname()
  const isFormHeader = pathname?.includes('/edit')

  return (
    <div
      id="layout"
      className="relative mx-auto w-[375px] overflow-hidden bg-gray-900 text-gray-100"
    >
      {isFormHeader ? <FormHeader /> : <Header />}
      {children}
      {/* 푸터  */}
    </div>
  )
}

export default Layout
