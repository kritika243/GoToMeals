import { useState } from "react"
import { ScrollView } from "react-native";
import { List } from 'react-native-paper';

import { MainContainer } from "../../../components/safearea-component"
import { RestaurantInfo } from "../components/RestaurantInfoComponent"

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params

  const [breakfastExpanded, setBreakfastExpanded] = useState(false)
  const [lunchExpanded, setLunchExpanded] = useState(false)
  const [dinnerExpanded, setDinnerExpanded] = useState(false)
  const [drinksExpanded, setDrinksExpanded] = useState(false)
  return <>

    <MainContainer>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Accordions">

          <List.Accordion
            title="Breakfast"
            left={props => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
            <List.Item title="Cornflakes with milk " />
            <List.Item title="Avocado Toast" />
            <List.Item title="Overnight Oats" />
            <List.Item title="Breakfast Scramble" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={props => <List.Icon {...props} icon="bowl" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}>
            <List.Item title="Curry Fried Rice" />
            <List.Item title="Schezwan Noodles" />
            <List.Item title="Grass Fed Burger" />
            <List.Item title="Lunch Burrito" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={props => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}>
            <List.Item title="Chile Verde Bowl" />
            <List.Item title="Miso Bowl" />
            <List.Item title="Greek Wrap" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={props => <List.Icon {...props} icon="food-fork-drink" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}>
            <List.Item title="Hot Coffee" />
            <List.Item title="Fermensch Kombucha" />
            <List.Item title="High Tea" />
          </List.Accordion>


        </List.Section>
      </ScrollView>
    </MainContainer>
  </>
}