import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurantsScreen';


const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {
  return <>
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name='Restaurant'
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  </>
}