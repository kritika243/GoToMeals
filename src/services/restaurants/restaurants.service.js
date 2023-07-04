import { mockImages, mocks } from "./dummy/index";
import camelize from "camelize";

export const restaurantRequest = (location) => {
  return new Promise((resolve, reject) => {

    const mock = mocks[location]

    if (!mock) reject('not found')
    resolve(mock)
  })
}


export const transformRestaurantResponse = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    })
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.businessStatus === 'CLOSED_TEMPORARILY'
    }
  })
  return camelize(mappedResults)
}
