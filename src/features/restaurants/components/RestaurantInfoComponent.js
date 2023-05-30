import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const { name, icon, photos, address, isOpen, rating, isClosedTemporarily } = restaurant
  return <>
    <Card elevation={5} style={styles.card} >
      <Card.Cover source={{ uri: photos[0] }} key={name} style={styles.cover} />
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>

      </Card.Content>
    </Card>
  </>
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: "white"
  },
  cover: {
    backgroundColor: "white",
    padding: 20,
  }
})