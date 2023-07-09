import { AntDesign } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import { FavoritesContext } from '../../services/favorites/favorites.context'

const FavoriteButton = styled(TouchableOpacity)`
background-color: transparent
position: absolute;
top: 10px
right: 10px
z-index: 9
`

export const FavoriteIcon = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext)
  return (
    <>
      <FavoriteButton>
        <AntDesign name='heart' size={24} color={'red'} />
      </FavoriteButton>
    </>
  )
}
