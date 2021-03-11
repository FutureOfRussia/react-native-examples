import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { DeviceEventEmitter, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'
import CheckBoxProps from './types'
import styles from './styles'
import Text from '../Text'

export default function CheckBox({
  value = false,
  label = '',
  checkColor = Colors.WHITE,
  onPress = () => {},
  disabled = false,
  debounce = false,
}: CheckBoxProps) {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(scale.value, {
          duration: 100,
          easing: Easing.bezier(0.11, 0, 0.5, 0),
        }),
      },
    ],
  }))

  const onPressIn = () => {
    scale.value = 0.96
  }

  const onPressOut = () => {
    scale.value = 1
  }

  const onClickHandler = () => {
    setTimeout(() => {
      if (debounce) DeviceEventEmitter.emit('onClick', onPress)
      else onPress()
    }, 100)
  }

  return (
    <Pressable
      disabled={disabled}
      style={styles.container}
      onPress={onClickHandler}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View style={[styles.box, animatedStyle]}>
        {value && <Ionicons name="checkmark" color={checkColor} size={px(20)} />}
      </Animated.View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}
