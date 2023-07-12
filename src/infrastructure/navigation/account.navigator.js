import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'

const Stack = createStackNavigator()
const AccountNavigator = () => {

  return (
    <Stack.Navigator headerMode='none' >

      <Stack.Screen name='Main' component={() => <View>
        <Text>Account screen</Text>
      </View>} />

      <Stack.Screen name='Login' component={() => <View>
        <Text>Login Screen</Text>
      </View>} />

    </Stack.Navigator>
  )
}

export default AccountNavigator