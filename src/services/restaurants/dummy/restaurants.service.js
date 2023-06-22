import camelize from "camelize";

import { mockImages, mocks } from "./index";

export const restaurantRequest = (location = '43.653225,-79.383186') => {
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
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.businessStatus === 'CLOSED_TEMPORARILY'
    }
  })
  return camelize(mappedResults)
}
