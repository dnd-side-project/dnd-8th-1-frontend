import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '@styles'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  if (process.env.NEXT_PUBLIC_API_MOCKING) {
    import('@mocks')
  }

  return (
    <ChakraBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraBaseProvider>
  )
}
