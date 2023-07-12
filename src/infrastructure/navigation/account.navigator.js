import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'

import { AccountScreen } from '../../features/account/screens/account.screen'

const Stack = createStackNavigator()
const AccountNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >

      <Stack.Screen name='Main' component={AccountScreen} />

      <Stack.Screen name='Login' component={AccountScreen} />

      <Stack.Screen name='Register' component={AccountScreen} />

    </Stack.Navigator>
  )
}

export default AccountNavigator