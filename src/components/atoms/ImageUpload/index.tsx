/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Icon } from '@components'

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="h-[173px] w-[343px] overflow-hidden rounded-[8px] border-[1px] border-gray-600">
      <div
        className={`h-[100%] w-[100%] ${
          !selectedImage && 'bg-gray-600'
        } relative`}
      >
        <label htmlFor="input-file" className="h-[100%] w-[100%]">
          <div className="relative z-[10] flex h-[100%] w-[100%] cursor-pointer items-center justify-center gap-[11px] text-body1 font-bold text-gray-100">
            <Icon icon="image" size={18} />
            <span>{selectedImage ? '이미지 변경' : '이미지 업로드'}</span>
          </div>

          {selectedImage && (
            <img
              alt="not fount"
              width={'100%'}
              src={URL.createObjectURL(selectedImage)}
              className="absolute top-[0] z-[0] brightness-[.6]"
            />
          )}
        </label>
        <input
          type="file"
          id="input-file"
          name="myImage"
          className="hidden"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(event: any) => {
            // TODO: 파일 확인을 위한 콘솔, 나중에 지울 것!
            console.log(event.target.files[0])
            setSelectedImage(event.target.files[0])
          }}
        />
      </div>
    </div>
  )
}

export default ImageUpload
