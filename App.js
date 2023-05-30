import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

export default function App() {
  const isAndroid = Platform.OS === 'android'
  console.log(StatusBar.currentHeight)
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 }}>
        <View style={{ backgroundColor: "green", padding: 16 }}>
          <Text>
            Search
          </Text>
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

});
