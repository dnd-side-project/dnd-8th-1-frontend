import { LabelHTMLAttributes } from 'react'

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  className: string
  content: string
}

const Label = ({ className, content, ...rest }: Props) => {
  return (
    <label className={`${className}`} {...rest}>
      {content}
    </label>
  )
}

export default Label
