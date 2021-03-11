import Animated, { withSpring, SpringUtils, useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { Text, View, ScrollView as BaseScrollView, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import React, { useRef } from 'react'

import styles, { INDICATOR_MARGIN, ITEM_MARGIN, ITEM_WIDTH } from './styles'
import CarouselProps, { ItemProps, Item as ItemType } from './types'
import { px } from '../../helpers/Dimensions'
import { useThemeColor } from '../../hooks'
import BounceButton from '../BounceButton'
import { Colors } from '../../constants'
import Image from '../Image'

function Item({ data, onPress = () => {} }: ItemProps) {
  return (
    <BounceButton style={styles.itemContainer} onPress={onPress} debounce>
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image sourceUri={data.img} style={styles.image} />
          <View style={styles.badge}>
            <Ionicons name="time" color={Colors.WHITE} size={px(12)} style={{ marginRight: px(5) }} />
            <Text style={styles.badgeText}>{data.time}</Text>
          </View>
        </View>
        <View style={styles.text}>
          <Text style={styles.itemTitle} numberOfLines={1}>
            {data.title}
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            {data.description}
          </Text>
        </View>
      </View>
    </BounceButton>
  )
}

export default function Carousel({ onSelect = () => {}, style = {}, items, title = '' }: CarouselProps) {
  const translateX = useSharedValue(ITEM_MARGIN + INDICATOR_MARGIN)
  const color = useThemeColor({ light: Colors.ACTIVE }, 'text')
  const scroll = useRef<BaseScrollView>(null)

  const onSelectHandler = (item: ItemType, index: number) => {
    onSelect(item)
    if (scroll.current) scroll.current.scrollTo({ x: (ITEM_WIDTH + ITEM_MARGIN * 2) * index })
    translateX.value = withSpring((ITEM_WIDTH + ITEM_MARGIN * 2) * index + ITEM_MARGIN + INDICATOR_MARGIN, {
      ...SpringUtils.makeDefaultConfig,
      damping: 20,
    })
  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    backgroundColor: color,
  }))

  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={() => scroll?.current?.scrollTo({ y: 0 })}>
        <Text style={[styles.title, { color }]}>{title}</Text>
      </Pressable>
      <ScrollView
        snapToInterval={ITEM_WIDTH + ITEM_MARGIN * 2}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
        decelerationRate="fast"
        ref={scroll}
        horizontal
      >
        {items.map((item, index) => (
          <Item data={item} key={index.toString()} onPress={() => onSelectHandler(item, index)} />
        ))}
        <Animated.View style={[styles.activeIndicator, animatedStyle]} />
      </ScrollView>
    </View>
  )
}
