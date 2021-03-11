import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import TextInputWithLabelProps from './types'
import { px } from '../../helpers/Dimensions'
import OpacityButton from '../OpacityButton'
import CloseButton from '../CloseButton'
import { Colors } from '../../constants'
import styles from './styles'

export default function TextInputWithLabel({
  label = '',
  secure = false,
  onChangeText = () => {},
  inputProps = {},
  value,
  validation,
}: TextInputWithLabelProps) {
  const [show, setShow] = useState(false)
  const [focus, setFocus] = useState(false)

  const getColor = () => {
    if (validation === false) return Colors.RED
    if (focus) return Colors.ACTIVE
    return Colors.black(0.15)
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelBlock}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={[styles.content, { borderColor: getColor() }]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholderTextColor={Colors.black(0.35)}
          {...inputProps}
          {...(secure ? { secureTextEntry: !show } : null)}
        />
        {(secure || value.length > 0) && (
          <View style={styles.btnBlock}>
            {value.length > 0 && <CloseButton style={styles.btn} onPress={() => onChangeText?.('')} />}
            {secure && (
              <OpacityButton style={styles.btn} onPress={() => setShow(!show)}>
                <MaterialCommunityIcons
                  name={show ? 'eye-outline' : 'eye-off-outline'}
                  size={px(20)}
                  color={Colors.BLACK}
                />
              </OpacityButton>
            )}
          </View>
        )}
      </View>
    </View>
  )
}
