import { createContext, useEffect, useState } from 'react'

import { restaurantRequest, transformRestaurantResponse } from './restaurants.service'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    getRestaurants()
  }, [])

  const getRestaurants = () => {
    setLoading(true)
    setTimeout(() => {
      restaurantRequest().then(transformRestaurantResponse).then((result) => {
        setRestaurants(result)
        setLoading(false)
      }).catch((err) => {
        setLoading(false)
        setError(err)
      })
    }, 2000);
  }

  return (
    <RestaurantsContext.Provider value={{ restaurants: restaurants, isLoading: loading, error: error }} >
      {children}
    </RestaurantsContext.Provider>
  )
}