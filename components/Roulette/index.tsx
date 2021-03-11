import Svg, { Circle, Defs, G, Path, Text, TextPath } from 'react-native-svg'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { View, Text as BaseText } from 'react-native'
import React from 'react'

import BounceButton from '../BounceButton'
import styles, { RADIUS } from './styles'
import { Colors } from '../../constants'
import { useTerms } from '../../hooks'
import RouletteProps from './types'

export default function Roulette({
  segments,
  onSpin,
  onSelectCost,
  selectedCost,
  costs,
  loading,
  progress,
}: RouletteProps) {
  const { roulette: terms } = useTerms()
  const rouletteRadius = RADIUS - 15
  const rouletteDiameter = rouletteRadius * 2
  const oneSegmentArea = 360 / segments.length
  const initialOffset = oneSegmentArea / 2

  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${progress.value}deg` }] }))

  const getSegmentPaths = (index: number) => {
    const cr = rouletteRadius - 3
    const a1 = oneSegmentArea * index
    const a2 = oneSegmentArea * (index + 1)
    const a3 = initialOffset + 2
    const cx1 = Math.cos((Math.PI / 180) * a2) * cr + rouletteRadius
    const cy1 = -Math.sin((Math.PI / 180) * a2) * cr + rouletteRadius
    const cx2 = Math.cos((Math.PI / 180) * a1) * cr + rouletteRadius
    const cy2 = -Math.sin((Math.PI / 180) * a1) * cr + rouletteRadius
    const cx3 = Math.cos((Math.PI / 180) * (a2 - a3)) * cr + rouletteRadius
    const cy3 = -Math.sin((Math.PI / 180) * (a2 - a3)) * cr + rouletteRadius

    const segment = `M${rouletteRadius} ${rouletteRadius} ${cx1} ${cy1} A${cr} ${cr} 0 0 1 ${cx2} ${cy2}Z`
    const text = `M${rouletteRadius} ${rouletteRadius} L${cx3} ${cy3}`

    return { segment, text }
  }

  const getActiveStyle = (value: number) => ({ opacity: selectedCost === value ? 1 : 0.6 })

  return (
    <View style={styles.circle}>
      <Animated.View style={[styles.rouletteBlock, animatedStyle]}>
        <Svg width={rouletteDiameter} height={rouletteDiameter}>
          <Circle cx={rouletteRadius} cy={rouletteRadius} r={rouletteRadius} fill={Colors.BLACK} />
          {segments.map((segment, index) => {
            const paths = getSegmentPaths(index)
            return (
              <G key={index.toString()}>
                <Path
                  d={paths.segment}
                  fill={index % 2 === 0 ? Colors.roulette[0] : Colors.roulette[1]}
                  stroke={Colors.BLACK}
                  strokeWidth={1}
                />
                <Defs>
                  <Path id={`path-${index}`} d={paths.text} />
                </Defs>
                <G>
                  <Text fill="white" fontSize="16" fontWeight="bold">
                    <TextPath href={`#path-${index}`} startOffset="57%">
                      {segment.text}
                    </TextPath>
                  </Text>
                </G>
              </G>
            )
          })}
          <Circle cx={rouletteRadius} cy={rouletteRadius} r={rouletteRadius / 2} fill={Colors.BLACK} />
          <Circle cx={rouletteRadius} cy={rouletteRadius} r={rouletteRadius / 2 - 4} fill={Colors.roulette[1]} />
        </Svg>
      </Animated.View>
      <View style={styles.indicator} />
      <View style={styles.uiBlock}>
        <View style={styles.costsBlock}>
          {costs.map((cost, index) => (
            <BounceButton
              key={index.toString()}
              disabled={loading}
              style={[styles.cost, getActiveStyle(cost)]}
              onPress={() => onSelectCost(cost)}
            >
              <BaseText style={styles.costText}>{cost}</BaseText>
            </BounceButton>
          ))}
        </View>
        <BaseText style={styles.text}>{terms.cost}</BaseText>
        <BounceButton debounce disabled={loading} style={styles.button} onPress={onSpin}>
          <BaseText style={styles.buttonText}>{`${terms.spin} ${selectedCost}`}</BaseText>
        </BounceButton>
      </View>
    </View>
  )
}
