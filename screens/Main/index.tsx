import { Pressable, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

import { Section as SectionType } from '../../types/Support'
import { MainScreenProps } from '../../types/Navigation'
import { Section, Text, View } from '../../components'
import { useTerms, useThemeColor } from '../../hooks'
import { Colors, Styles } from '../../constants'
import { px } from '../../helpers/Dimensions'
import styles from './styles'

export default function Main({ navigation }: MainScreenProps) {
  const sectionSupportColor = useThemeColor({}, 'sectionSupportColor')
  const { sections: sectionsTerms, components, examples } = useTerms()

  const sections: SectionType[] = [
    {
      items: [
        { label: components.buttons, icon: 'game-controller', path: 'Buttons' },
        { label: components.forms, icon: 'clipboard', path: 'Forms' },
        { label: components.others, icon: 'shapes', path: 'Others' },
      ],
    },
    {
      items: [
        { label: examples.roulette, icon: 'aperture-sharp', path: 'Roulette' },
        { label: examples.dragAndDrop, icon: 'move', path: 'DragAndDrop' },
      ],
      label: sectionsTerms.examples,
    },
  ]

  return (
    <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.container}>
      {sections.map((section, i) => (
        <Section label={section.label} key={i.toString()}>
          {section.items.map((item, j) => (
            <Pressable
              key={`${i} - ${j}`.toString()}
              onPress={() => navigation.navigate(item.path)}
              style={({ pressed }) =>
                pressed ? { backgroundColor: sectionSupportColor, ...styles.item } : styles.item
              }
            >
              {({ pressed }) => (
                <>
                  <Ionicons name={item.icon} size={px(25)} color={Colors.ACTIVE} />
                  <Text style={styles.itemLabel}>{item.label}</Text>
                  <Ionicons name="chevron-forward" size={px(20)} color={sectionSupportColor} />
                  {j > 0 && (
                    <View
                      style={[
                        styles.itemSeparator,
                        { marginLeft: pressed ? 0 : px(55), backgroundColor: sectionSupportColor },
                      ]}
                    />
                  )}
                </>
              )}
            </Pressable>
          ))}
        </Section>
      ))}
    </ScrollView>
  )
}
