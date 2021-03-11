import { Ionicons } from '@expo/vector-icons'
import React from 'react'

import { px } from '../../helpers/Dimensions'
import OpacityButton from '../OpacityButton'
import { Colors } from '../../constants'
import CloseButtonProps from './types'

export default function CloseButton({
  style = {},
  size = px(20),
  color = Colors.BLACK,
  onPress = () => {},
  hitSlop = undefined,
  disabled = false,
}: CloseButtonProps) {
  return (
    <OpacityButton disabled={disabled} onPress={onPress} style={style} hitSlop={hitSlop}>
      <Ionicons name="close" size={size} color={color} />
    </OpacityButton>
  )
}
