import { Box } from '@chakra-ui/react'
import { ReactElement, useRef } from 'react'
import { Header } from '@components'

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    // TODO: 디자이너에게 패딩 값 전달 받아서 반영
    <Box maxW={375} w={375} marginLeft="auto" marginRight="auto">
      <Header />
      {children}
      {/* 푸터  */}
    </Box>
  )
}

export default Layout
