/* eslint-disable @next/next/no-img-element */
import { SetStateAction, useState } from 'react'
import { Icon } from '@components'
import { MB } from '@constants'

import dynamic from 'next/dynamic'

import { useDisclosure } from '@hooks'

const ConfirmModal = dynamic(() => import('../../templates/ConfirmModal'), {
  ssr: false,
})

interface ImageUploadProps {
  isPerformance?: boolean
  initialImage?: string
  handleSetImage?: (img: File) => void
}

const ImageUpload = ({
  isPerformance,
  handleSetImage,
  initialImage,
}: ImageUploadProps) => {
  const [showModal, setShowModal, toggle] = useDisclosure()

  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageURL, setSelectedImageURL] = useState(
    initialImage ? initialImage : '',
  )

  return (
    <div
      className={`h-[173px] w-[343px] overflow-hidden rounded-[8px] border-[1px] border-gray-600 ${
        isPerformance && 'w-[155px]'
      }`}
    >
      <div
        className={`relative h-[100%] w-[100%] ${
          !selectedImage && 'bg-gray-700'
        } `}
      >
        <label htmlFor="input-file" className="h-[100%] w-[100%]">
          <div
            className={`relative z-[10] flex h-[100%] w-[100%] cursor-pointer items-center justify-center gap-[11px] text-body1 font-bold text-gray-100 ${
              isPerformance && 'flex-col'
            }`}
          >
            <Icon icon="image" size={18} />
            <span>{selectedImage ? '이미지 변경' : '이미지 업로드'}</span>
          </div>

          {selectedImageURL && (
            <img
              alt="선택된 이미지"
              width={'100%'}
              src={selectedImageURL}
              className="absolute top-[0] z-[0] brightness-[.6]"
            />
          )}
        </label>
        <input
          type="file"
          id="input-file"
          name="myImage"
          className="hidden"
          accept="image/gif, image/jpeg, image/png"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(event: any) => {
            const current = event.target.files[0]
            if (current) {
              if (current.size > 2 * MB) {
                setShowModal(true)
              } else {
                setSelectedImage(event.target.files[0])
                setSelectedImageURL(URL.createObjectURL(event.target.files[0]))
                handleSetImage && handleSetImage(event.target.files[0])
              }
            }
          }}
        />
      </div>

      <ConfirmModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleOnSubmit={() => setShowModal(false)}
        modalContent="이미지는 2MB를 초과할 수 없습니다."
        submitMessage="확인"
      />
    </div>
  )
}

export default ImageUpload
