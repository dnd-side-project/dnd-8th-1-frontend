import GoogleIcon from '/public/assets/logo/g-logo.png'
import Image from 'next/image'
import { ALIGN_CENTER } from '@constants'

// 브랜드 가이드라인 : https://developers.google.com/identity/branding-guidelines?hl=ko
const GoogleLoginButton = ({
  handleOnClick,
}: {
  handleOnClick: () => void
}) => {
  return (
    <button
      onClick={handleOnClick}
      className="flex h-[40px] items-center gap-[16px]  rounded-[2px] bg-blue-google pr-[8px] shadow-google"
    >
      <div
        className={`ml-[1px] h-[38px] w-[38px] rounded-[2px] bg-white p-[8px] ${ALIGN_CENTER}`}
      >
        <Image src={GoogleIcon} alt="구글 아이콘" width={18} />
      </div>

      <p className="font-[roboto] text-[14px] font-bold">
        Google 계정으로 로그인
      </p>
    </button>
  )
}

export default GoogleLoginButton
