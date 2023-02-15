import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '@styles'
import { useEffect, useState } from 'react'
import { Layout } from '@components'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  const [shouldRender, setShouldRender] = useState(
    !process.env.NEXT_PUBLIC_API_MOCKING,
  )

  useEffect(() => {
    async function init() {
      const { initMocks } = await import('@mocks')
      await initMocks()
      setShouldRender(true)
    }
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      init()
    }
  }, [])
  if (!shouldRender) {
    return null
  }

  return (
    <ChakraBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ChakraBaseProvider>
  )
}
