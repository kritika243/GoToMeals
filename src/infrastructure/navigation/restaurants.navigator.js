import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native-paper';

import MapsScreen from '../../features/restaurants/screens/mapsScreen';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurantsScreen';

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {
  return <>
    <RestaurantStack.Navigator screenOptions={{ headerShown: false, }}>
      <RestaurantStack.Screen
        name='RestaurantsScreen'
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name='RestaurantDetails'
        component={MapsScreen} // for now using MapsScreen
      />

    </RestaurantStack.Navigator>
  </>
}