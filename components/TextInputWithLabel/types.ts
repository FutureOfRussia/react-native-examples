import { TextInputProps } from 'react-native'

export default interface TextInputWithLabelProps {
  label?: string
  secure?: boolean
  value: string
  onChangeText?: (text: string) => void
  inputProps?: TextInputProps
  validation?: boolean
}
