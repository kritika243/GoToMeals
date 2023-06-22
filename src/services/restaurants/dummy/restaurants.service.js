import camelize from "camelize";

import { mocks } from "./index";

const restaurantRequest = (location = '43.653225,-79.383186') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location]
    if (!mock) reject('not found')
    resolve(mock)
  })
}


const transformRestaurantResponse = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.businessStatus === 'CLOSED_TEMPORARILY'
    }
  })
  return camelize(mappedResults)
}

// restaurantRequest().then(transformRestaurantResponse).then(transformedResponse => {
//   console.log(transformedResponse)
// }).catch((error) => {
//   console.log(error)
// })
