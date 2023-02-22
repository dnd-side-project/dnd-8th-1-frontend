import { IconButton, RegionPopupContent } from '@components'
import { useRef, useState } from 'react'
import { useClickAway } from '@hooks'
import { Portal } from '@chakra-ui/react'

interface RegionSelectProps {
  selectedRegion?: string
  handleRegionSelect: (region: string) => void
}
const RegionSelect = ({
  handleRegionSelect,
  selectedRegion,
}: RegionSelectProps) => {
  const [selected, setSelected] = useState(selectedRegion ? selectedRegion : '')
  const [isPopupOpen, setIsPopUpOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const regionInputRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useClickAway(popupRef, (e: any) => {
    // TODO: 정확한 동작 방식 확인
    const { current: triggerWrapper } = regionInputRef
    triggerWrapper &&
      !triggerWrapper.contains(e.target) &&
      setIsPopUpOpen(false)
  })

  return (
    <div className="relative w-[343px]">
      <div
        ref={regionInputRef}
        className={`w-[100%] 
        ${isPopupOpen ? 'rounded-t-[8px]' : 'rounded-[8px]'} 
        h-[52px] border-[1px] border-gray-600 bg-gray-700 px-[11px] 
        ${
          isPopupOpen && ' border-b-gray-700'
        } relative py-[15px] text-body2 text-gray-400`}
      >
        {selected !== '' && (
          <div className="absolute top-[10px] left-[10px] flex h-[32px] w-fit items-center gap-[10.95px] rounded-[4px] bg-gray-600 py-[8px] px-[10.87px] text-body2 font-bold text-green-light">
            <span>{selected}</span>
            <IconButton
              icon="x-active"
              size={16}
              areaLabel="지역 선택 취소 버튼"
              handleOnClick={() => {
                setSelected('')
              }}
            />
          </div>
        )}

        <Portal containerRef={regionInputRef}>
          <IconButton
            icon={isPopupOpen ? 'arrow-increase' : 'arrow-decrease'}
            size={15}
            areaLabel="팝업 열기 버튼"
            styleClass="absolute top-[20px] right-[17px]"
            handleOnClick={() => {
              setIsPopUpOpen(!isPopupOpen)
            }}
          />
        </Portal>

        {!isPopupOpen && selected === '' && (
          <span className="cursor-default">지역을 선택해주세요</span>
        )}
      </div>

      {isPopupOpen && (
        <div
          ref={popupRef}
          className="absolute top-[52px] w-[343px] rounded-b-[8px] border-[1px] border-x-gray-600 border-b-gray-600 border-t-gray-700 bg-gray-700 px-[10px] pb-[20px]"
        >
          <RegionPopupContent
            handleOnClick={(region) => {
              setSelected(region)
              setIsPopUpOpen(false)
              handleRegionSelect && handleRegionSelect(region)
            }}
            selectedRegion={selected}
          />
        </div>
      )}
    </div>
  )
}

export default RegionSelect
