/* eslint-disable @typescript-eslint/no-explicit-any */
import { extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const theme: any = extendBaseTheme({
  components: {
    ...chakraTheme.components,
  },
})

export { theme }
