import React from "react";
import { Image, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
 backgroundColor: ${(props) => props.theme.colors.bg.primary};
`

const RestaurantCardCover = styled(Card.Cover)`
  backgroundColor:${(props) => props.theme.colors.bg.primary};
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Info = styled.View`
  padding: 10px ;
`

const RestaurantName = styled(Text)`
 color: ${(props) => props.theme.colors.text.primary};
 font-family: ${(props) => props.theme.fonts.heading};
 font-size: ${(props) => props.theme.fontSizes.body}
`

const RatingAndStatus = styled.View`
  display: flex;
  flex-direction: row;
  justifyContent: space-between
`

const RatingRow = styled.View`
  flex-direction: row;
  padding-top: 5px;
  padding-bottom: 5px;
`

const RestaurantStatus = styled.View`
display:flex;
flex-direction: row;
justify-content: space-between

`

const RestaurantTypeIcon = styled.Image`
  height: 25px;
  width:25px ;
`

const StarImage = styled.Image`
width: 20px;
height: 20px
`

const StatusImage = styled.Image`
width: 25px;
height: 25px
`

const RestaurantAddress = styled.Text`
 font-family: ${(props) => props.theme.fonts.body};
 font-size: ${(props) => props.theme.fontSizes.caption};
`



export const RestaurantInfo = ({ restaurant = {} }) => {
  const { name, icon, photos, address, isOpen, rating, isClosedTemporarily } = restaurant
  const ratingArray = Array.from(new Array(Math.floor(rating)))


  return <>
    <RestaurantCard elevation={5} >
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Card.Content>
        <Info>
          <RestaurantName variant="titleLarge" >{name}</RestaurantName>
          <RatingAndStatus>
            <RatingRow>
              {
                ratingArray.map((item, index) => (
                  <StarImage source={require('../../../../assets/star.png')} key={index} />
                ))
              }
            </RatingRow>
            <RestaurantStatus>
              {
                isOpen ? <StatusImage source={require('../../../../assets/open.png')} /> : <StatusImage source={require('../../../../assets/closed.png')} />
              }
              <Spacer position={'left'} size={'medium'} >
                <RestaurantTypeIcon source={require('../../../../assets/tray.png')} />
              </Spacer>
            </RestaurantStatus>
          </RatingAndStatus>

          <RestaurantAddress>{address}</RestaurantAddress>
        </Info>
      </Card.Content>
    </RestaurantCard>
  </>
}
