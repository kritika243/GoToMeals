import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'

import CompactRestaurantCard from '../../features/restaurants/components/CompactRestaurantCard'
import { Spacer } from '../spacer/spacer.component'
import { Text } from '../typography/text.component'

const FavoritesWrapper = styled.View`
padding: 10px;
`

const FavoriteBar = ({ favorites, goToDetailsScreen }) => {
  if (!favorites.length) return null
  return (
    <FavoritesWrapper>
      <Spacer variant='left.large'>
        <Text variant='caption'>Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {
          favorites.map((restaurant) => {
            const key = restaurant.name.split(" ").join("")
            return <Spacer position={'left'} size={'medium'} key={key}>
              <TouchableOpacity onPress={() => goToDetailsScreen('RestaurantDetails', {
                restaurant
              })} >
                <CompactRestaurantCard restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          })
        }
      </ScrollView>
    </FavoritesWrapper>

  )
}

export default FavoriteBar