import { Insets, ViewStyle } from 'react-native'

export default interface CloseButtonProps {
  style?: ViewStyle
  size?: number
  color?: string
  onPress?: () => void
  hitSlop?: Insets
  disabled?: boolean
}
