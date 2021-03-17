import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Pressable, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  scrollTo,
  withRepeat,
} from 'react-native-reanimated'

import { animationConfig, COL, getOrder, getPosition, MARGIN, SIZE } from './config'
import { height } from '../../helpers/Dimensions'
import DragAndDropItemProps from './types'
import { Styles } from '../../constants'
import styles from './styles'
import Image from '../Image'

export default function DragAndDropItem({
  uri,
  id,
  positions,
  scrollView,
  scrollY,
  editing,
  onPress = () => {},
  onChangeScrollY,
  onChangePositions,
  onChangeTouch,
  touch,
}: DragAndDropItemProps) {
  const inset = useSafeAreaInsets()

  const containerHeight = height(100) - inset.top - inset.bottom
  const contentHeight = (Object.keys(positions.value).length / COL) * SIZE + MARGIN * 4 + inset.bottom
  const isGestureActive = useSharedValue(false)
  const position = getPosition(positions.value[id])
  const translateX = useSharedValue(position.x)
  const translateY = useSharedValue(position.y)
  const rotation = useSharedValue(-1.25)

  useEffect(() => {
    rotation.value = editing ? withRepeat(withTiming(1.25, { duration: 125 }), -1, true) : 0
  }, [editing, rotation])

  useAnimatedReaction(
    () => positions.value[id],
    newOrder => {
      if (!isGestureActive.value) {
        const pos = getPosition(newOrder)
        translateX.value = withTiming(pos.x, animationConfig)
        translateY.value = withTiming(pos.y, animationConfig)
      }
    },
  )

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number; y: number }>({
    onStart: (_, ctx) => {
      if (!touch.value) onChangeTouch(id)
      if (touch.value === id) {
        ctx.x = translateX.value
        ctx.y = translateY.value
        isGestureActive.value = true
      }
    },
    onActive: ({ translationX, translationY }, ctx) => {
      if (touch.value === id) {
        translateX.value = ctx.x + translationX
        translateY.value = ctx.y + translationY

        const newOrder = getOrder(translateX.value, translateY.value, Object.keys(positions.value).length - 1)

        const oldOlder = positions.value[id]
        if (newOrder !== oldOlder) {
          const idToSwap = Object.keys(positions.value).find(key => positions.value[key] === newOrder)
          if (idToSwap) {
            const newPositions = { ...positions.value }
            newPositions[id] = newOrder
            newPositions[idToSwap] = oldOlder
            onChangePositions(newPositions)
          }
        }
        const lowerBound = scrollY.value
        const upperBound = lowerBound + containerHeight - SIZE
        const maxScroll = contentHeight - containerHeight
        const leftToScrollDown = maxScroll - scrollY.value
        if (translateY.value < lowerBound) {
          const diff = Math.min(lowerBound - translateY.value, lowerBound)
          onChangeScrollY(scrollY.value - diff)
          scrollTo(scrollView, 0, scrollY.value, false)
          ctx.y -= diff
          translateY.value = ctx.y + translationY
        }
        if (translateY.value > upperBound) {
          const diff = Math.min(translateY.value - upperBound, leftToScrollDown)
          onChangeScrollY(scrollY.value + diff)
          scrollTo(scrollView, 0, scrollY.value, false)
          ctx.y += diff
          translateY.value = ctx.y + translationY
        }
      }
    },
    onEnd: () => {
      if (touch.value === id) {
        const newPosition = getPosition(positions.value[id])
        translateY.value = withTiming(newPosition.y, animationConfig)
        translateX.value = withTiming(newPosition.x, animationConfig, () => {
          isGestureActive.value = false
        })
        onChangeTouch('')
      }
    },
  })

  const animatedStyle = useAnimatedStyle(() => {
    const zIndex = isGestureActive.value ? 100 : 0
    const scale = withTiming(isGestureActive.value ? 1.05 : 1, animationConfig)
    const rotate = isGestureActive.value ? 0 : `${rotation.value}deg`
    return {
      zIndex,
      transform: [
        { translateX: translateX.value + MARGIN },
        { translateY: translateY.value + MARGIN },
        { rotate },
        { scale },
      ],
    }
  })

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <PanGestureHandler onGestureEvent={onGestureEvent} enabled={editing} maxPointers={1}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Pressable style={styles.item} onPress={onPress}>
            <Image sourceUri={uri} style={Styles.full} />
          </Pressable>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  )
}
