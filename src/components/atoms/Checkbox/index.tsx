import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ ...rest }: CheckboxProps, ref) => {
    return <input type="checkbox" ref={ref} className="h-3 w-3" {...rest} />
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
