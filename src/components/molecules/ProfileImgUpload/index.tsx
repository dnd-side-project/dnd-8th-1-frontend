/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Icon } from '@components'

interface ImageUploadProps {
  isPerformance?: boolean
  initialImage?: string
  handleSetImage?: (img: File) => void
}

const ProfileImgUpload = ({
  handleSetImage,
  initialImage,
}: ImageUploadProps) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageURL, setSelectedImageURL] = useState(
    initialImage ? initialImage : '',
  )
  return (
    <div className={`relative h-[118px] w-[118px]`}>
      <div
        className={`flex h-[100%] w-[100%] items-center justify-center rounded-full bg-[#323232]`}
      >
        {selectedImageURL && (
          <img
            alt="선택된 이미지"
            width={'100%'}
            src={selectedImageURL}
            className="h-full w-full rounded-full"
          />
        )}
        <label
          htmlFor="input-file"
          className="absolute bottom-0 right-0 cursor-pointer"
        >
          <Icon icon="plus-circle-inactive" size={32} color="#C9C9C9" />
        </label>
      </div>
      <input
        type="file"
        id="input-file"
        name="myImage"
        className="hidden"
        accept="image/*"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(event: any) => {
          const current = event.target.files[0]
          if (current) {
            setSelectedImage(event.target.files[0])
            setSelectedImageURL(URL.createObjectURL(event.target.files[0]))
            handleSetImage && handleSetImage(event.target.files[0])
          }
        }}
      />
    </div>
  )
}

export default ProfileImgUpload
