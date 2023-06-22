import camelize from "camelize";

import { mocks } from "./index";

const restaurantRequest = (location = '43.653225,-79.383186') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location]
    if (!mock) reject('not found')
    resolve(mock)
  })
}


const transformRestaurantResponse = (result) => {
  const newResult = camelize(result)
  return newResult
}

restaurantRequest().then(transformRestaurantResponse).then(transformedResponse => {
  console.log(transformedResponse)
}).catch((error) => {
  console.log(error)
})
