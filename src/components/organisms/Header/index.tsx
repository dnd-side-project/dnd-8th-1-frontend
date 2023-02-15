import { Box } from '@chakra-ui/react'
import { SidebarMenu } from '@components'

const Header = () => {
  return (
    <div
      className={`fixed top-0 z-[999] box-border block flex h-[52px] w-[375px] justify-between bg-gray-900 px-[16px] py-[14px]`}
    >
      <Box className="text-gray-200 z-[999]">Logo</Box>
      <SidebarMenu />
    </div>
  )
}

export default Header
