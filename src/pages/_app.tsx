import '@/styles/globals.css'
import '@/styles/swiper.css'
import '@/styles/variable.css'
import '@/styles/datepicker.css'
import cookies from 'next-cookies'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppContext, AppProps } from 'next/app'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '@styles'
import { Layout, PageLoading } from '@components'
import { MutableSnapshot, RecoilRoot } from 'recoil'
import { userStateType } from '@types'
import { SIGNOUT_USER_STATE } from '@constants'
import { userAtom } from 'states'
import axios from 'axios'
import { useMemo } from 'react'

interface DanverseAppProps extends AppProps {
  signinData: userStateType
}

function DanverseApp({ Component, pageProps, signinData }: DanverseAppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: 0,
      },
    },
  })

  const initialState = useMemo(
    () =>
      ({ set }: MutableSnapshot) => {
        const { id, name, imgUrl, profile, hasProfile } = signinData
        set(userAtom, { id, name, imgUrl, profile, hasProfile })
      },
    [signinData],
  )

  return (
    <RecoilRoot initializeState={initialState}>
      <ChakraBaseProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <>
                <PageLoading />
                <Component {...pageProps} />
              </>
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </ChakraBaseProvider>
    </RecoilRoot>
  )
}

DanverseApp.getInitialProps = async (context: AppContext) => {
  const { ctx, Component } = context
  const { ACCESS_TOKEN } = cookies(ctx)

  let pageProps = {}

  let signinData: userStateType = SIGNOUT_USER_STATE

  if (!ACCESS_TOKEN) {
    return { pageProps, signinData }
  }

  try {
    if (ctx.req) {
      const {
        data: { data },
      } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_END_POINT}api/v1/member/info`,
        {
          headers: {
            authorization: `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      )
      const { id, imgUrl, name, profile } = data

      signinData = {
        id,
        imgUrl,
        name,
        profile,
        hasProfile: !!profile,
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err)
    ctx.res?.setHeader('Set-Cookie', [`ACCESS_TOKEN=deleted; Max-Age=0`])
    signinData = SIGNOUT_USER_STATE
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps, signinData }
}

export default DanverseApp
