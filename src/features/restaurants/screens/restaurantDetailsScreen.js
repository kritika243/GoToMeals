import { MainContainer } from "../../../components/safearea-component"
import { RestaurantInfo } from "../components/RestaurantInfoComponent"

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params
  return <>

    <MainContainer>
      <RestaurantInfo restaurant={restaurant} />
    </MainContainer>
  </>
}