import { forwardRef, useRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { FORM_INPUT_STYLE } from '@constants'
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs'
import { ko } from 'date-fns/locale'

interface ProfileDatePickerProps {
  initialStartDate?: string
  handleStartDate: (date: Date | null) => void
}

const ProfileDatePicker = ({
  initialStartDate,
  handleStartDate,
}: ProfileDatePickerProps) => {
  const [startDate, setStartDate] = useState<string | Date | null>(
    initialStartDate ? initialStartDate : null,
  )

  const [isOpen, setIsOpen] = useState(false)

  const inputRef = useRef(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomInput = forwardRef((props: any, ref) => (
    <div>
      <label
        {...props}
        htmlFor="input-date"
        ref={ref}
        className={`${FORM_INPUT_STYLE} relative z-[995] block flex w-[343px] cursor-pointer items-center justify-center ${
          isOpen ? 'border-green-light' : 'border-gray-600'
        }`}
      >
        {!startDate && (
          <p className="absolute top-[16px] left-[11px] text-body2 text-gray-400">
            활동 시작 연도와 월을 선택해 주세요.
          </p>
        )}

        {startDate && (
          <div className="w-[100%] text-body2 text-gray-100">
            {dayjs(startDate).format('YYYY년 M월에 활동 시작')}
          </div>
        )}
      </label>
      <input id="input-date" className="hidden" />
    </div>
  ))

  CustomInput.displayName = 'customInput'

  return (
    <ReactDatePicker
      selected={startDate ? new Date(startDate) : null}
      onChange={(date) => {
        setStartDate(date)
        handleStartDate(date)
      }}
      customInput={<CustomInput inputref={inputRef} />}
      locale={ko}
      onCalendarOpen={() => setIsOpen(true)}
      onCalendarClose={() => setIsOpen(false)}
      showMonthYearPicker
      showFourColumnMonthYearPicker
    />
  )
}

export default ProfileDatePicker
