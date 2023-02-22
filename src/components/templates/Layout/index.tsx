import { ReactElement } from 'react'
import { Header, FormHeader } from '@components'
import { usePathname } from 'next/navigation'
const Layout = ({ children }: { children: ReactElement }) => {
  const pathname = usePathname()
  const isFormHeader = pathname?.includes('/edit')
  const isSearch = pathname?.includes('/search')
  return (
    <div
      id="layout"
      className="relative mx-auto min-h-[100vh] w-[375px] overflow-hidden bg-gray-900 text-gray-100"
    >
      {isFormHeader ? <FormHeader /> : !isSearch && <Header />}
      {children}
      {/* 푸터  */}
    </div>
  )
}

export default Layout
