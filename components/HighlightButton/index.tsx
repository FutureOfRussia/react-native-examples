import { DeviceEventEmitter, Pressable, View } from 'react-native'
import React from 'react'

import HighlightButtonProps from './types'
import { Colors } from '../../constants'

export default function HighlightButton({
  style = {},
  highlight = Colors.BLACK,
  onPress = () => {},
  children = <View />,
  hitSlop = undefined,
  disabled = false,
  debounce = false,
  onLongPress,
}: HighlightButtonProps) {
  const onClickHandler = () => {
    if (debounce) DeviceEventEmitter.emit('onClick', onPress)
    else onPress()
  }

  return (
    <Pressable
      onPress={onClickHandler}
      onLongPress={onLongPress || undefined}
      hitSlop={hitSlop}
      disabled={disabled}
      style={({ pressed }) => (pressed ? { ...style, backgroundColor: highlight } : style)}
    >
      {children}
    </Pressable>
  )
}
