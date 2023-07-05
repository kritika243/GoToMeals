import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components/native'

import { Text } from '../../../components/typography/text.component'


const CompactItem = styled.View`
padding: 10px ;
max-width: 120px;
align-items: center;
`

const CompactImage = styled.Image`
border-radius: 20px;
width: 120px;
height: 100px
margin-bottom: 10px

`



const CompactRestaurantCard = ({ restaurant }) => {
  return (
    <>
      <CompactItem>
        <CompactImage source={{ uri: restaurant.photos[0] }} />
        <Text variant="caption" center>
          {restaurant.name}
        </Text>
      </CompactItem>
    </>

  )
}

export default CompactRestaurantCard