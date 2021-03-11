import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { BounceButton, Carousel, Image, Section, Text, View } from '../../components'
import { carouselItems } from '../../assets/data'
import { Styles } from '../../constants'
import { useTerms } from '../../hooks'
import styles from './styles'

export default function Others() {
  const [reload, setReload] = useState(false)
  const { others: terms } = useTerms()

  useEffect(() => {
    setReload(true)
  }, [reload])

  return (
    <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.container}>
      <Section label={terms.carousel}>
        <Carousel items={carouselItems} title="Items" />
      </Section>
      <Section label={terms.image}>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            {reload && (
              <Image
                thumbnailUri="https://i.imgflip.com/4/3m91kp.jpg"
                sourceUri="https://pbs.twimg.com/media/EKtD0ltXsAIyAf-.jpg:large"
                style={Styles.full}
              />
            )}
          </View>
          <BounceButton style={styles.btn} onPress={() => setReload(false)}>
            <Text style={styles.btnText}>Rerender</Text>
          </BounceButton>
        </View>
      </Section>
    </ScrollView>
  )
}
