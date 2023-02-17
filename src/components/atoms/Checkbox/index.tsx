import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ ...rest }: CheckboxProps, ref) => {
    return (
      <>
        <label className="flex select-none items-center" htmlFor="checkbox">
          <input
            id="checkbox"
            type="checkbox"
            ref={ref}
            className={`bg-checked h-[18px] w-[18px] cursor-pointer appearance-none rounded-[50%] bg-gray-100 checked:bg-green-light`}
            {...rest}
          />
        </label>
      </>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
