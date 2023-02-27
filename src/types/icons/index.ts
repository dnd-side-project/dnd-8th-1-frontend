export type iconName =
  | 'arrow-decrease'
  | 'arrow-increase'
  | 'arrow-left'
  | 'arrow-right'
  | 'calendar-check'
  | 'chat-bubble'
  | 'chat-bubble-active'
  | 'check-circle-active'
  | 'check-circle-inactive'
  | 'dots'
  | 'heart'
  | 'line-three'
  | 'minus-circle-active'
  | 'minus-circle-inactive'
  | 'pin-location-inactive'
  | 'pin-location-active'
  | 'plus-circle-active'
  | 'plus-circle-inactive'
  | 'plus-circle'
  | 'question-circle'
  | 'x-circle'
  | 'x-active'
  | 'x-inactive'
  | 'image'
  | 'user-square-mono'

export type icon = {
  path: string
  viewBox: string
  fill: string
}

export interface IconProps {
  icon: iconName // 아이콘 종류
  size: number
  color?: string
}
