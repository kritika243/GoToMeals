import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

import { FavoritesContext } from '../../services/favorites/favorites.context'

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 40px;
  right: 30px;
  z-index: 9;
`

export const FavoriteIcon = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext)
  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId)
  return (
    <>
      <FavoriteButton onPress={() => !isFavorite ? addToFavorites(restaurant) : removeFromFavorites(restaurant)} >
        <AntDesign name={
          isFavorite ?
            "heart" : 'hearto'} size={24} color={isFavorite ? "red" : 'white'} />
      </FavoriteButton>
    </>
  )
}
