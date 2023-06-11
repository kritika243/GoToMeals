import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
 backgroundColor: ${(props) => props.theme.colors.bg.primary}
`
const RestaurantName = styled(Text)`
 color: ${(props) => props.theme.colors.text.primary};
 font-family: ${(props) => props.theme.fonts.body};
`

const RestaurantCardCover = styled(Card.Cover)`
  backgroundColor:${(props) => props.theme.colors.bg.primary};
  padding: 20px;
`

export const RestaurantInfo = ({ restaurant = {} }) => {
  const { name, icon, photos, address, isOpen, rating, isClosedTemporarily } = restaurant
  return <>
    <RestaurantCard elevation={5} >
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Card.Content>
        <RestaurantName variant="titleLarge" >{name}</RestaurantName>
      </Card.Content>
    </RestaurantCard>
  </>
}
