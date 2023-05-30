import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style={{flex: 1}}>
<View style={{backgroundColor:"green", padding: 16}}>
  <Text>
    Search 
  </Text>
</View>
<View style={{backgroundColor:"blue", flex:1, padding: 16}}>
  <Text>List</Text>
</View>
    </SafeAreaView>
    <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
 
});
