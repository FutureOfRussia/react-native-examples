import Animated, { Easing, withTiming, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { View, StyleSheet, Image as BaseImage } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Styles } from '../../constants'
import ImageProps from './types'
import styles from './styles'

export default function Image({ sourceUri, thumbnailUri, style }: ImageProps) {
  const [error, setError] = useState(false)
  const [load, setLoad] = useState(!!thumbnailUri)
  const animated = useSharedValue(0)

  useEffect(() => {
    setError(false)
  }, [sourceUri])

  const onImageLoad = () => {
    animated.value = withTiming(1, { duration: 500, easing: Easing.ease })
  }

  const animatedStyle = useAnimatedStyle(() => ({ opacity: animated.value }))

  return (
    <View style={[styles.container, style]}>
      {!!thumbnailUri && (
        <BaseImage
          source={{ uri: thumbnailUri }}
          style={[StyleSheet.absoluteFillObject, Styles.full]}
          blurRadius={1}
          onLoadEnd={() => setLoad(false)}
        />
      )}
      {!load && (
        <>
          {!error && !!sourceUri ? (
            <Animated.Image
              source={{ uri: sourceUri }}
              style={[Styles.full, animatedStyle]}
              onLoadEnd={onImageLoad}
              onError={() => setError(true)}
            />
          ) : (
            <Animated.View onLayout={onImageLoad} style={[styles.placeholder, animatedStyle]} />
          )}
        </>
      )}
    </View>
  )
}
