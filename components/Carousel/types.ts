import { ViewStyle } from 'react-native'

export default interface CarouselProps {
  items: Item[]
  title?: string
  onSelect?: (_: Item) => void
  style?: ViewStyle
}

export interface ItemProps {
  data: Item
  onPress?: () => void
}

export interface Item {
  img: string
  time: string
  title: string
  description: string
}
