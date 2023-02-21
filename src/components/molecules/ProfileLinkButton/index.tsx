import { Avatar, Icon } from '@components'
import { useRouter } from 'next/router'

interface ProfileLinkButtonProps {
  profileId: number
  profileImage: string
  profileName: string
}

const ProfileLinkButton = ({
  profileId,
  profileImage,
  profileName,
}: ProfileLinkButtonProps) => {
  const router = useRouter()

  return (
    <button
      className="relative h-[76px] w-[343px] rounded-[12px] bg-gray-700 p-[14px]"
      onClick={() => router.push(`/profile/${profileId}`)}
    >
      <div className="flex h-[100%] w-[100%] justify-start gap-[13px]">
        <Avatar profileImage={profileImage} size={48} />
        <div className="flex flex-col gap-[5px]">
          <span className="text-caption text-gray-300 ">TEAM</span>
          <span className="text-body1 font-bold leading-none text-gray-100">
            {profileName}
          </span>
        </div>
      </div>

      <div className="absolute top-[26px] right-[14px]">
        <Icon icon="arrow-right" size={24} />
      </div>
    </button>
  )
}

export default ProfileLinkButton
