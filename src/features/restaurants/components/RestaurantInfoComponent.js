import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
 backgroundColor: white
`

const RestaurantCardCover = styled(Card.Cover)`
  backgroundColor: white;
  padding: 20px;
`

export const RestaurantInfo = ({ restaurant = {} }) => {
  const { name, icon, photos, address, isOpen, rating, isClosedTemporarily } = restaurant
  return <>
    <RestaurantCard elevation={5} >
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>

      </Card.Content>
    </RestaurantCard>
  </>
}
