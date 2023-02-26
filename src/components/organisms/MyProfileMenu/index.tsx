import Link from 'next/link'
import MyProfileMenuItem from './MyProfileMenuItem'

const MyProfileMenu = () => {
  const dividerStyle = 'width-[100%] h-[0.7px] bg-gray-600'

  return (
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
  )
}

export default MyProfileMenu
