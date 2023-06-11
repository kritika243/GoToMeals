import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from "react";
import { Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";

import { RestaurantInfo } from "../components/RestaurantInfoComponent";

const isAndroid = Platform.OS === 'android'

const MainContainer = styled(SafeAreaView)`
  flex: 1;
  ${props => props.isAndroid && `
   marginTop: ${StatusBar.currentHeight || 0}px ;
  `}
`
const SearchContainer = styled(View)`
  padding: 16px;
`
const ListContainer = styled(View)`
  flex: 1
  padding: 16px;
`


export const RestaurantsScreen = () => {
  return <>
    <MainContainer isAndroid>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={() => { }}
          value={''}
        />
      </SearchContainer>

      <ListContainer>

        <RestaurantInfo restaurant={{ name: "Restaurant 1", icon: '', photos: ['https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'], address: 'random address', isOpen: true, rating: 4, isClosedTemporarily: false }} />



      </ListContainer>
    </MainContainer>
    <ExpoStatusBar style='auto' />
  </>

}
