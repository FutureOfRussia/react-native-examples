import { Easing, runOnJS, useSharedValue, withTiming } from 'react-native-reanimated'
import { View, Text as BaseText } from 'react-native'
import React, { useState } from 'react'

import { Roulette } from '../../components'
import { useTerms } from '../../hooks'
import styles from './styles'

export default function RouletteScreen() {
  const segments = [
    { text: 'ZERO' },
    { text: '1 DIAM' },
    { text: '10 SPIN' },
    { text: '50 SPIN' },
    { text: 'ZERO' },
    { text: '100 SPIN' },
    { text: '5 DIAM' },
    { text: 'ZERO' },
    { text: '10 SPIN' },
    { text: '10 DIAM' },
    { text: '50 SPIN' },
    { text: '10 SPIN' },
  ]

  const costs = [1, 10, 100]

  const [selectedCost, setSelectedCost] = useState(costs[0])
  const [prizeIndex, setPrizeIndex] = useState(-1)
  const [loading, setLoading] = useState(false)
  const oneSegmentArea = 360 / segments.length
  const initialOffset = oneSegmentArea / 2
  const { roulette: terms } = useTerms()

  const progress = useSharedValue(initialOffset)

  const getRandomIntInclusive = (min: number, max: number) =>
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)

  const getRandomArbitrary = (min: number, max: number) => Math.random() * (max - min) + min

  const onSpin = () => {
    setLoading(true)

    const itemIndex = getRandomIntInclusive(0, 11)
    const scaling = getRandomArbitrary(initialOffset * 0.1, initialOffset * 1.9)
    const numberOfTurns = getRandomIntInclusive(4, 8)
    const offset = 360 * numberOfTurns + oneSegmentArea * itemIndex + scaling

    progress.value = withTiming(
      offset,
      {
        duration: 1000 * (numberOfTurns + 5),
        easing: Easing.bezier(0.3, 1, 0.7, 1),
      },
      finished => {
        if (finished) {
          runOnJS(setLoading)(false)
          runOnJS(setPrizeIndex)(itemIndex)
          progress.value %= 360
        }
      },
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.prizeBlock}>
        <BaseText style={styles.prizeText}>
          {`${terms.prize} ${prizeIndex >= 0 ? segments[prizeIndex].text : ''}`}
        </BaseText>
      </View>
      <Roulette
        segments={segments}
        onSpin={onSpin}
        onSelectCost={value => setSelectedCost(value)}
        selectedCost={selectedCost}
        costs={costs}
        loading={loading}
        progress={progress}
      />
    </View>
  )
}
