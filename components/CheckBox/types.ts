export default interface CheckBoxProps {
  value?: boolean
  label?: string
  checkColor?: string
  onPress?: () => void
  disabled?: boolean
  debounce?: boolean
}
