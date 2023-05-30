import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurantsScreen';

export default function App() {
  return (
    <>
      <RestaurantsScreen />
    </>
  );
}

const styles = StyleSheet.create({

});
