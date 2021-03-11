import { ViewStyle } from 'react-native'

export default interface SectionProps {
  label?: string
  style?: ViewStyle | ViewStyle[]
  children?: JSX.Element | JSX.Element[]
}
