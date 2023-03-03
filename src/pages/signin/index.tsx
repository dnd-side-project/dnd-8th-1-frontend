import { Center } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '/public/assets/logo/logo_big.png'
import { Spacer, GoogleLoginButton } from '@components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getGoogleUrl } from '@utils'

const SignInPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>로그인 - Danverse</title>
      </Head>

      <main className="px-[16px]">
        <Spacer size={126.44} />
        <Center className="flex flex-col">
          <Image src={Logo} width={54.5} alt="댄버스 로고" />
          <Spacer size={16.31} />
          <h1 className=" mb-[50px] text-title2 font-bold leading-none">
            댄버스
          </h1>
          <h2 className="text-body2">춤으로 연결되는 댄스 유니버스</h2>
          <Spacer size={103} />

          <Link href={getGoogleUrl()}>
            <GoogleLoginButton
              handleOnClick={() => {
                router.push(getGoogleUrl())
                // TODO: 전역 모달 구현하기
              }}
            />
          </Link>

          <Spacer size={55} />
          <span className="text-body2 leading-none text-[#7A7A7A]">
            혹시 댄버스가 처음이신가요?
          </span>
          <Spacer size={10} />
          <button
            className="text-body2 text-[#FFF]"
            onClick={() => {
              router.push(getGoogleUrl())
              // TODO: 전역 모달 구현하기
            }}
          >
            구글로 회원가입하기
          </button>
        </Center>
      </main>
    </>
  )
}

export default SignInPage
