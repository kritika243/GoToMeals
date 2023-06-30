import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import MapsScreen from '../../features/restaurants/screens/mapsScreen';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurantsScreen';

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {
  return <>
    <RestaurantStack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      ...TransitionPresets.ModalPresentationIOS
    }}
    >
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