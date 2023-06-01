import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurantsScreen';
import { theme } from './src/infrastructure/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}

