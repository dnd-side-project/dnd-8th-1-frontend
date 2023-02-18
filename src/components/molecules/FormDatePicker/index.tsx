import { forwardRef, useRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { FORM_INPUT_STYLE } from '@constants'
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs'
import { Icon } from '@components'
interface FormDatePickerProps {
  handleStartDate: (date: Date | null) => void
}
// TODO: 디자인 확정되면 디자인 반영하기
const FormDatePicker = ({ handleStartDate }: FormDatePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const inputRef = useRef(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomInput = forwardRef((props: any, ref) => (
    <div>
      <label
        {...props}
        htmlFor="input-date"
        ref={ref}
        className={`${FORM_INPUT_STYLE} relative block flex w-[343px] items-center justify-center`}
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

  CustomInput.displayName = 'CustomInput'

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date)
        handleStartDate(date)
      }}
      customInput={<CustomInput inputRef={inputRef} />}
    />
  )
}

export default FormDatePicker