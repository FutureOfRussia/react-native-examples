import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React, { useState, useMemo } from 'react'
import { View } from 'react-native'

import { COL, MARGIN, Positions, SIZE } from '../../components/DragAndDropItem/config'
import { DragAndDropItem } from '../../components'
import { dragItem } from '../../assets/data'
import { useThemeColor } from '../../hooks'
import { Styles } from '../../constants'

export default function DragAndDrop() {
  const scrollView = useAnimatedRef<Animated.ScrollView>()
  const [editing, setEditing] = useState(false)
  const touch = useSharedValue('')
  const scrollY = useSharedValue(0)

  const inset = useSafeAreaInsets()

  const backgroundColor = useThemeColor({}, 'sectionColor')

  const initialPositions = useMemo(
    () => Object.assign({}, ...dragItem.map((item, index) => ({ [item.id]: index }))),
    [],
  )
  const positions = useSharedValue<Positions>(initialPositions)

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => {
      scrollY.value = y
    },
  })

  const height = Math.ceil(dragItem.length / COL) * SIZE + MARGIN * 2 + inset.bottom

  const onChangePositions = (value: Positions) => {
    'worklet'

    positions.value = value
  }

  const onChangeScrollY = (value: number) => {
    'worklet'

    scrollY.value = value
  }

  const onChangeTouch = (value: string) => {
    'worklet'

    touch.value = value
  }

  return (
    <View style={[Styles.fullFlex, { backgroundColor }]}>
      <Animated.ScrollView
        ref={scrollView}
        style={Styles.fullFlex}
        contentContainerStyle={{ height }}
        scrollEventThrottle={16}
        onScroll={onScroll}
      >
        {dragItem.map(item => (
          <DragAndDropItem
            id={item.id}
            uri={item.uri}
            key={item.id}
            scrollY={scrollY}
            positions={positions}
            scrollView={scrollView}
            editing={editing}
            touch={touch}
            onPress={() => setEditing(!editing)}
            onChangePositions={onChangePositions}
            onChangeScrollY={onChangeScrollY}
            onChangeTouch={onChangeTouch}
          />
        ))}
      </Animated.ScrollView>
    </View>
  )
}
