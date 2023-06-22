import { mocks } from "./index";

const restaurantRequest = (location = '43.653225,-79.383186') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location]
    if (!mock) reject('not found')
    resolve(mock)
  })
}


restaurantRequest().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error)
})
