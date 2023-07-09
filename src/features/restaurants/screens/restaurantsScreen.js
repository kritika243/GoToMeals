import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useContext } from "react";
import { FlatList, Pressable, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import styled from "styled-components/native";

import { MainContainer } from '../../../components/safearea-component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { RestaurantInfo } from "../components/RestaurantInfoComponent";
import { Search } from '../components/SearchComponent';

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

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)
  const { favorites } = useContext(FavoritesContext)

  return <>
    <MainContainer>
      {
        isLoading ? <>
          <LoaderContainer>
            <ActivityIndicator animating={true} color={MD2Colors.red800} size={'large'} />
          </LoaderContainer>
        </> : <>
          <Search />
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) =>
            (
              <>
                <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })} >
                  <Spacer position='bottom' size='large'>
                    <RestaurantInfo restaurant={item}
                    />
                  </Spacer>
                </TouchableOpacity>

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
