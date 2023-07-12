import { Lato_300Light, Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts as useOswald } from '@expo-google-fonts/oswald';
import { initializeApp } from 'firebase/app';
import { ThemeProvider } from 'styled-components/native';

import { Navigation } from './src/infrastructure/navigation';
import { theme } from './src/infrastructure/theme';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

import 'react-native-gesture-handler';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDAJgH7xfnoBXJfIWX0-D5B8Deybbj8kJ4",
  authDomain: "gotomeals-c9f8f.firebaseapp.com",
  projectId: "gotomeals-c9f8f",
  storageBucket: "gotomeals-c9f8f.appspot.com",
  messagingSenderId: "914228769591",
  appId: "1:914228769591:web:3a0071355a5a74b4a6e0b2"
};


// if (!firebase.apps.length) {
const app = initializeApp(firebaseConfig);

// }


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
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider >
    </>
  );
}

