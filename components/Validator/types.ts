import { ViewStyle } from 'react-native'
import { ReactElement } from 'react'

interface Validations {
  [key: string]: boolean | undefined
}

export interface ValidationData {
  type: string
  value: string
  additionalValue?: string | number
}

export default interface ValidatorProps {
  children: (validations: Validations) => ReactElement
  data: ValidationData[]
  style?: ViewStyle | ViewStyle[]
}
