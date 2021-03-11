import Animated from 'react-native-reanimated'

export default interface RouletteProps {
  segments: { text: string }[]
  onSpin: () => void
  onSelectCost: (value: number) => void
  selectedCost: number
  costs: number[]
  loading: boolean
  progress: Animated.SharedValue<number>
}
