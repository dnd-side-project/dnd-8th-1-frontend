import { LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  styleClass: string
  content: string
}

const Label = ({ styleClass, content, ...rest }: LabelProps) => {
  return (
    <label className={styleClass} {...rest}>
      {content}
    </label>
  )
}

export default Label
