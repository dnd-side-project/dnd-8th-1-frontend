import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  styleClass?: string
  placeholder?: string
  id?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ styleClass, ...rest }: InputProps, ref) => {
    return <input ref={ref} className={styleClass} {...rest} />
  },
)

Input.displayName = 'Input'

export default Input
