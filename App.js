import { Lato_300Light, Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts as useOswald } from '@expo-google-fonts/oswald';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import MapsScreen from './src/features/restaurants/screens/mapsScreen';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurantsScreen';
import SettingsScreen from './src/features/restaurants/screens/settingsScreen';
import { theme } from './src/infrastructure/theme';

const Tab = createBottomTabNavigator();

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_300Light
  });

  if (!oswaldLoaded || !latoLoaded) return null

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Maps" component={MapsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}

