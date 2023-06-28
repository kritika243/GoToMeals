import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MapsScreen from '../../features/restaurants/screens/mapsScreen';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurantsScreen';
import SettingsScreen from '../../features/restaurants/screens/settingsScreen';

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
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={getScreenOptions}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
          <Tab.Screen name="Maps" component={MapsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}