import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from "../components/RestaurantInfoComponent";


const isAndroid = Platform.OS === 'android'
export const RestaurantsScreen = () => {
  return <>
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.searchSection}>
        <Searchbar
          placeholder="Search"
          onChangeText={() => { }}
          value={''}
        />

      </View>
      <View style={styles.listSection}>
        <RestaurantInfo restaurant={{ name: "Restaurant 1", icon: '', photos: ['https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'], address: 'random address', isOpen: true, rating: 4, isClosedTemporarily: false }} />
      </View>
    </SafeAreaView>
    <ExpoStatusBar style='auto' />
  </>

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0
  },
  searchSection: {
    padding: 16,
  },
  listSection: {
    flex: 1,
    padding: 16,
  }
});
