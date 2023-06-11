import { Lato_400Regular, Lato_300Light, useFonts as useLato } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts as useOswald } from '@expo-google-fonts/oswald';
import { ThemeProvider } from 'styled-components/native';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurantsScreen';
import { theme } from './src/infrastructure/theme';

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
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}

