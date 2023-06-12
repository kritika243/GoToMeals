import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from "react";
import { Platform, SafeAreaView, StatusBar, Text, View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";

import { RestaurantInfo } from "../components/RestaurantInfoComponent";
import { Spacer } from '../../../components/spacer/spacer.component';

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

      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() =>
        (
          <>
            <Spacer position='bottom' size='large'>
              <RestaurantInfo restaurant={{
                name: "Restaurant 1", icon: '', photos: ['https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'], address: 'random address', isOpen: true, rating: 4, isClosedTemporarily: false,
                icon: require('../../../../assets/tray.png')
              }}
              />
            </Spacer>
          </>
        )
        }
        keyExtractor={(item) => item.name} contentContainerStyle={{ padding: 16 }} />

    </MainContainer>
    <ExpoStatusBar style='auto' />
  </>

}
