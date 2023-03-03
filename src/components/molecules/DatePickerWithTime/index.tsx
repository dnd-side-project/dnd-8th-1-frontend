import { forwardRef, useRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { FORM_INPUT_STYLE } from '@constants'
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs'
import { isPossibleDay } from '@utils'
import { ko } from 'date-fns/locale'

interface DatePickerWithTimeProps {
  initialStartDate?: string
  handleStartDate: (date: Date | null) => void
}

const DatePickerWithTime = ({
  initialStartDate,
  handleStartDate,
}: DatePickerWithTimeProps) => {
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
        className={`${FORM_INPUT_STYLE} relative block flex w-[343px] cursor-pointer items-center  ${
          isOpen ? 'border-green-light' : 'border-gray-600'
        }`}
      >
        {!startDate && (
          <p className="absolute top-[16px] left-[11px] text-body2 text-gray-400">
            공연 시간을 선택해 주세요
          </p>
        )}

        {startDate && (
          <p className="text-body2 text-gray-100">
            {dayjs(startDate).format('YYYY년 M월 D일 (dd) · A h시 mm분')}
          </p>
        )}
      </label>
      <input id="input-date" className="hidden" />
    </div>
  ))

  CustomInput.displayName = 'customInput'

  return (
    <div className="z-[999]">
      <ReactDatePicker
        selected={startDate ? new Date(startDate) : null}
        onChange={(date) => {
          setStartDate(date)
          handleStartDate(date)
        }}
        customInput={<CustomInput inputref={inputRef} />}
        filterDate={isPossibleDay}
        locale={ko}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        showTimeInput
        timeInputLabel="시작 시간"
        // showTimeSelect
        timeFormat="aa h:mm"
      />
    </div>
  )
}

export default DatePickerWithTime
