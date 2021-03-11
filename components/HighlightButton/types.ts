import { Insets, ViewStyle } from 'react-native'
import React from 'react'

export default interface HighlightButtonProps {
  style?: ViewStyle[] | ViewStyle
  highlight?: string
  onPress?: () => void
  onLongPress?: () => void
  children?: React.ReactNode
  hitSlop?: Insets
  disabled?: boolean
  debounce?: boolean
}
