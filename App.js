import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
  const isAndroid = Platform.OS === 'android'
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 }}>
        <View style={styles.searchSection}>
          <Searchbar
            placeholder="Search"
            onChangeText={() => { }}
            value={''}
          />

        </View>
        <View style={{ backgroundColor: "blue", flex: 1, padding: 16 }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    padding: 16,
  }
});
