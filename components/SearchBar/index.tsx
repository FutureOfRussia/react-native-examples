import { TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'

import { px } from '../../helpers/Dimensions'
import CloseButton from '../CloseButton'
import { Colors } from '../../constants'
import SearchBarProps from './types'
import styles from './styles'

export default function SearchBar({ value = '', onChangeText = () => {}, placeholder = '' }: SearchBarProps) {
  const [focus, setFocus] = useState(false)

  const getColor = () => {
    if (focus) return Colors.ACTIVE
    return Colors.black(0.15)
  }

  return (
    <View style={[styles.container, { borderColor: getColor() }]}>
      <Ionicons name="search" size={px(25)} color={getColor()} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholderTextColor={Colors.black(0.35)}
        style={styles.input}
      />
      {value.length > 0 && <CloseButton onPress={() => onChangeText('')} />}
    </View>
  )
}
