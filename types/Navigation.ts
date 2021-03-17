import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type MainStackParamList = {
  Main: undefined
  Buttons: undefined
  Forms: undefined
  Others: undefined
  Roulette: undefined
  DragAndDrop: undefined
}

export type MainScreenProps = {
  navigation: StackNavigationProp<MainStackParamList, 'Main'>
  route: RouteProp<MainStackParamList, 'Main'>
}
