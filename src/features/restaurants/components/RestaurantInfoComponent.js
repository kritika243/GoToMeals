import React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
 backgroundColor: ${(props) => props.theme.colors.bg.primary}
`

const RestaurantCardCover = styled(Card.Cover)`
  backgroundColor:${(props) => props.theme.colors.bg.primary};
  padding: 20px;
`

const Info = styled.View`
  padding: 10px ;
`

const RestaurantName = styled(Text)`
 color: ${(props) => props.theme.colors.text.primary};
 font-family: ${(props) => props.theme.fonts.heading};
 font-size: ${(props) => props.theme.fontSizes.body}
`

const RestaurantAddress = styled.Text`
 font-family: ${(props) => props.theme.fonts.body};
 font-size: ${(props) => props.theme.fontSizes.caption};
`



export const RestaurantInfo = ({ restaurant = {} }) => {
  const { name, icon, photos, address, isOpen, rating, isClosedTemporarily } = restaurant
  return <>
    <RestaurantCard elevation={5} >
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Card.Content>
        <Info>
          <RestaurantName variant="titleLarge" >{name}</RestaurantName>
          <RestaurantAddress>{address}</RestaurantAddress>
        </Info>
      </Card.Content>
    </RestaurantCard>
  </>
}
