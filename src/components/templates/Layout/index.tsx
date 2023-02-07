import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    // TODO: 디자이너에게 패딩 값 전달 받아서 반영
    <Box maxW={375} marginLeft="auto" marginRight="auto">
      {/* 헤더  */}
      {children}
      {/* 푸터  */}
    </Box>
  )
}

export default Layout
