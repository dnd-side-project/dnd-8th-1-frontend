export type iconName = 'vercel'

export type icon = {
  path: string
  viewBox: string
}

export interface IconProps {
  icon: iconName // 아이콘 종류
  size: number
  color?: string
}
