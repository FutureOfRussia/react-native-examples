import { Ionicons } from '@expo/vector-icons'

export interface Shadow {
  shadowColor?: string
  shadowOffset?: {
    width?: number
    height?: number
  }
  shadowRadius?: number
  shadowOpacity?: number
  elevation?: number
}

export interface HitSlop {
  top: number
  left: number
  bottom: number
  right: number
}

export interface ThemeProps {
  lightColor?: string
  darkColor?: string
}

export interface Notification {
  msg: string
  action?: () => void
  actionLabel?: string
}

export interface Section {
  items: Item[]
  label?: string
}

export interface Item {
  icon: React.ComponentProps<typeof Ionicons>['name']
  label: string
  path: 'Buttons' | 'Others' | 'Roulette' | 'Forms'
}
