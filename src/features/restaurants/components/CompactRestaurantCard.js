import React from 'react'
import { Image, Platform, View } from 'react-native'
import { WebView } from 'react-native-webview';
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
const CompactWebView = styled(WebView)`
border-radius: 20px;
width: 120px;
height: 100px
margin-bottom: 10px

`

const isAndroid = Platform.OS === 'android'
const CompactRestaurantCard = ({ restaurant, isMapScreen }) => {
  const Image = isAndroid && isMapScreen ? CompactWebView : CompactImage
  return (
    <>
      <CompactItem>
        <Image source={{ uri: restaurant.photos[0] }} />
        <Text variant="caption" center>
          {restaurant.name}
        </Text>
      </CompactItem>
    </>

  )
}

export default CompactRestaurantCard