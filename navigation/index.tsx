import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { ActivityIndicator, ColorSchemeName } from 'react-native'
import * as Localization from 'expo-localization'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as React from 'react'

import { Buttons, Others, Main, Roulette, Forms, DragAndDrop } from '../screens'
import LinkingConfiguration from '../helpers/LinkingConfiguration'
import { MainStackParamList } from '../types/Navigation'
import { Colors, Styles } from '../constants'
import { Dispatch } from '../types/Models'
import { View } from '../components'
import { useTerms } from '../hooks'

const Stack = createStackNavigator<MainStackParamList>()

export default function Navigation({
  colorScheme,
  isLoadingComplete,
}: {
  colorScheme: ColorSchemeName
  isLoadingComplete: boolean
}): JSX.Element {
  const {
    appState: { setAppState },
  } = useDispatch<Dispatch>()
  const [loading, setLoading] = useState(false)
  const { titles } = useTerms()

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      let [locale] = await Localization.locale.split('-')
      if (locale !== 'ru') locale = 'en'
      setAppState({ locale })
      setLoading(false)
    })()
  }, [setAppState])

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {isLoadingComplete && !loading ? (
        <Stack.Navigator screenOptions={{ headerStyleInterpolator: HeaderStyleInterpolators.forUIKit }}>
          <Stack.Screen name="Main" component={Main} options={{ headerTitle: titles.main }} />
          <Stack.Screen name="Buttons" component={Buttons} options={{ headerTitle: titles.buttons }} />
          <Stack.Screen name="Forms" component={Forms} options={{ headerTitle: titles.forms }} />
          <Stack.Screen name="Others" component={Others} options={{ headerTitle: titles.others }} />
          <Stack.Screen name="Roulette" component={Roulette} options={{ headerTitle: titles.roulette }} />
          <Stack.Screen name="DragAndDrop" component={DragAndDrop} options={{ headerTitle: titles.dragAndDrop }} />
        </Stack.Navigator>
      ) : (
        <View style={[Styles.fullFlex, Styles.centered]}>
          <ActivityIndicator size="large" color={Colors.ACTIVE} />
        </View>
      )}
    </NavigationContainer>
  )
}
