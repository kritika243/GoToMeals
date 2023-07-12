import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapsScreen from '../../features/restaurants/screens/mapsScreen';
import SettingsScreen from '../../features/restaurants/screens/settingsScreen';
import { RestaurantsNavigator } from './restaurants.navigator';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {

  const TabIcon = {
    Restaurants: 'restaurant-outline',
    Maps: 'md-map-outline',
    Settings: 'md-settings-outline'
  }



  const getScreenOptions = ({ route }) => {
    const iconName = TabIcon[route.name]
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      headerShown: false,
      tabBarActiveTintColor: '#db5805',
      tabBarInactiveTintColor: 'gray',
    }
  }

  return (
    <>

      <Tab.Navigator
        screenOptions={getScreenOptions}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Maps" component={MapsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>

    </>
  )
}