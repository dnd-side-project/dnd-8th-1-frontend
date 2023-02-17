import { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from 'react'
import { Icon } from '@components'
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ ...rest }: CheckboxProps, ref) => {
    const [checked, setChecked] = useState(false)

    return (
      <>
        <label
          className={` cursor-pointer select-none appearance-none`}
          htmlFor="checkbox"
        >
          {
            <Icon
              icon={`${
                checked ? 'check-circle-active' : 'check-circle-inactive'
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={(e: any) => {
            setChecked(e.target.checked)
          }}
          {...rest}
        />
      </>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
