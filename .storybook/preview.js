import '../src/styles/globals.css'
import '../src/styles/Home.module.css'
import * as nextImage from 'next/image'
import { theme } from '../src/styles/theme/chakraTheme'
import '../src/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const parameters = {
  chakra: {
    theme,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const queryClient = new QueryClient()

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
]

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})
