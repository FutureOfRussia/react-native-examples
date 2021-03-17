import Animated from 'react-native-reanimated'
import { RefObject } from 'react'

import { Positions } from './config'

export default interface DragAndDropItemProps {
  uri: string
  id: string
  scrollY: Animated.SharedValue<number>
  touch: Animated.SharedValue<string>
  positions: Animated.SharedValue<Positions>
  scrollView: RefObject<Animated.ScrollView>
  editing: boolean
  onPress?: () => void
  onChangePositions: (value: Positions) => void
  onChangeScrollY: (value: number) => void
  onChangeTouch: (value: string) => void
}
