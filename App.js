import { Lato_300Light, Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts as useOswald } from '@expo-google-fonts/oswald';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';

import { Navigation } from './src/infrastructure/navigation';
import { theme } from './src/infrastructure/theme';
import { FavoritesContext } from './src/services/favorites/favorites.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

import 'react-native-gesture-handler';

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
        <FavoritesContext>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
        </FavoritesContext>
      </ThemeProvider >
    </>
  );
}

