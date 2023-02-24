import { forwardRef, useRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { FORM_INPUT_STYLE } from '@constants'
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs'
import { Icon } from '@components'
import { isPossibleDay } from '@utils'
import { ko } from 'date-fns/locale'

interface FormDatePickerProps {
  initialStartDate?: string
  handleStartDate: (date: Date | null) => void
}

const FormDatePicker = ({
  initialStartDate,
  handleStartDate,
}: FormDatePickerProps) => {
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
        className={`${FORM_INPUT_STYLE} relative block flex w-[343px] cursor-pointer items-center justify-center ${
          isOpen ? 'border-green-light' : 'border-gray-600'
        }`}
      >
        {!startDate && (
          <p className="absolute top-[16px] left-[11px] text-body2 text-gray-400">
            마감일을 설정해주세요
          </p>
        )}

        {startDate && (
          <div className="flex items-center gap-[9.92px]">
            <Icon icon="calendar-check" size={20} />
            <span className="text-body1 text-gray-300">
              ~ {dayjs(startDate).format('YYYY.MM.DD')}
            </span>
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
      filterDate={isPossibleDay}
      locale={ko}
      onCalendarOpen={() => setIsOpen(true)}
      onCalendarClose={() => setIsOpen(false)}
    />
  )
}

export default FormDatePicker
