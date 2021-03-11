import { KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { CheckBox, SearchBar, Section, TextInputWithLabel } from '../../components'
import { px } from '../../helpers/Dimensions'
import { useTerms } from '../../hooks'
import styles from './styles'
import { Styles } from '../../constants'

export default function Forms() {
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState(false)
  const [search, setSearch] = useState('')
  const [text, setText] = useState('')
  const { forms: terms } = useTerms()

  return (
    <KeyboardAvoidingView style={Styles.fullFlex} behavior="padding" keyboardVerticalOffset={px(85)}>
      <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Section style={styles.section} label={terms.input}>
          <TextInputWithLabel
            value={text}
            label={terms.label}
            inputProps={{ placeholder: terms.placeholder }}
            onChangeText={value => setText(value)}
          />
        </Section>
        <Section style={styles.section} label={terms.secure}>
          <TextInputWithLabel
            secure
            value={password}
            label={terms.label}
            inputProps={{ placeholder: terms.placeholder }}
            onChangeText={value => setPassword(value)}
          />
        </Section>
        <Section style={styles.section} label={terms.search}>
          <SearchBar placeholder={terms.placeholder} value={search} onChangeText={value => setSearch(value)} />
        </Section>
        <Section style={styles.checkboxBlock} label={terms.check}>
          <CheckBox value={check} onPress={() => setCheck(!check)} label={terms.label} />
        </Section>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
