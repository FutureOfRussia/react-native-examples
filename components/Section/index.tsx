import { View } from 'react-native'
import React from 'react'

import { useThemeColor } from '../../hooks'
import { Colors } from '../../constants'
import SectionProps from './types'
import styles from './styles'
import Text from '../Text'

export default function Section({ label = '', style = {}, children = <View /> }: SectionProps) {
  const sectionSupportColor = useThemeColor({}, 'sectionSupportColor')
  const sectionColor = useThemeColor({}, 'sectionColor')

  return (
    <View style={styles.sectionContainer}>
      {label ? (
        <Text lightColor={Colors.black(0.5)} style={styles.sectionLabel}>
          {label}
        </Text>
      ) : null}
      <View style={[styles.section, { borderColor: sectionSupportColor, backgroundColor: sectionColor }, style]}>
        {children}
      </View>
    </View>
  )
}
