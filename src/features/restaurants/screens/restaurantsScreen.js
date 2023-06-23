import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useContext } from "react";
import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import styled from "styled-components/native";

import { MainContainer } from '../../../components/safearea-component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantsContext } from '../../../services/restaurants/dummy/restaurants.context';
import { RestaurantInfo } from "../components/RestaurantInfoComponent";

const SearchContainer = styled(View)`
  padding: 16px;
`

const LoaderContainer = styled(View)`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  margin: auto auto;
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)

  return <>
    <MainContainer>
      {
        isLoading ? <>
          <LoaderContainer>
            <ActivityIndicator animating={true} color={MD2Colors.red800} size={'large'} />
          </LoaderContainer>
        </> : <>
          <SearchContainer>
            <Searchbar
              placeholder="Search"
              onChangeText={() => { }}
              value={''}
            />
          </SearchContainer>

          <RestaurantList
            data={restaurants}
            renderItem={({ item }) =>
            (
              <>
                <Spacer position='bottom' size='large'>
                  <RestaurantInfo restaurant={item}
                  />
                </Spacer>
              </>
            )
            }
            keyExtractor={(item) => item.name} />
        </>
      }


    </MainContainer>
    <ExpoStatusBar style='auto' />
  </>

}
