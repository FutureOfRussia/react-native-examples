import { ScrollView } from 'react-native'
import React from 'react'

import { BounceButton, Text, OpacityButton, HighlightButton, Section } from '../../components'
import { Styles } from '../../constants'
import { useTerms } from '../../hooks'
import styles from './styles'

export default function Buttons() {
  const { buttons: buttonsTerms } = useTerms()

  const buttons = [
    { label: buttonsTerms.bounce, component: BounceButton },
    { label: buttonsTerms.opacity, component: OpacityButton },
    { label: buttonsTerms.highlight, component: HighlightButton },
  ]

  return (
    <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.container}>
      {buttons.map((button, index) => (
        <Section label={button.label} key={index.toString()} style={styles.section}>
          <button.component style={styles.btn}>
            <Text style={styles.btnText}>{buttonsTerms.press}</Text>
          </button.component>
        </Section>
      ))}
    </ScrollView>
  )
}
