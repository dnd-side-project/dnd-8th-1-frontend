import { forwardRef, TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  styleClass?: string
  placeholder?: string
  id?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ styleClass, ...rest }: TextareaProps, ref) => {
    return <textarea ref={ref} className={styleClass} {...rest} />
  },
)

Textarea.displayName = 'Textarea'

export default Textarea
