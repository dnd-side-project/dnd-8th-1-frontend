import Link from 'next/link'
import MyProfileMenuItem from './MyProfileMenuItem'

const MyProfileMenu = () => {
  const dividerStyle = 'width-[100%] h-[0.7px] bg-gray-600'

  return (
    <div className="relative">
      <ul>
        <div className={dividerStyle} />
        {/* TODO: 전역 로그인 상태 이용 */}
        {/* <Link href={`/profile/${id}/history`}> */}
        <MyProfileMenuItem
          content="활동 내역"
          description="만나기, 공연, 후기 "
        />
        {/* </Link> */}
        <div className={dividerStyle} />
        {/* TODO: 탈퇴 모달 머지되면 탈퇴 모달 띄우기  */}
        <MyProfileMenuItem content="탈퇴" />
      </ul>
      <button
        className="absolute top-[176px] right-[17px] w-fit text-body1 text-gray-400"
        onClick={() => {
          // TODO: 로그아웃 API 호출하기
          console.log('로그아웃')
        }}
      >
        <span className="underline">로그아웃</span>
      </button>
    </div>
  )
}

export default MyProfileMenu
