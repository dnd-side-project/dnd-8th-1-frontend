import {
  ChangeEvent,
  Dispatch,
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  SetStateAction,
} from 'react'
import { Icon } from '@components'
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean
  setIsChecked: Dispatch<SetStateAction<boolean>>
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ isChecked, setIsChecked, ...rest }: CheckboxProps, ref) => {
    return (
      <>
        <label
          className={` cursor-pointer select-none appearance-none`}
          htmlFor="checkbox"
        >
          {
            <Icon
              icon={`${
                isChecked ? 'check-circle-active' : 'check-circle-inactive'
              }`}
              size={20}
            />
          }
        </label>
        <input
          id="checkbox"
          type="checkbox"
          ref={ref}
          className="hidden"
          onClick={(
            e: MouseEvent<HTMLInputElement> & ChangeEvent<HTMLInputElement>,
          ) => {
            setIsChecked(e.target.checked)
          }}
          {...rest}
        />
      </>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
