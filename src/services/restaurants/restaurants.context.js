import { createContext, useContext, useEffect, useState } from 'react'

import { LocationContext } from '../location/location.context'
import { restaurantRequest, transformRestaurantResponse } from './restaurants.service'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { location } = useContext(LocationContext)


  useEffect(() => {
    if (location) {
      const locationString = `${location?.lat},${location?.lng}`
      getRestaurants(locationString)
    }
  }, [location?.lat, location?.lng])

  const getRestaurants = (loc) => {
    setLoading(true)
    setRestaurants([])
    setTimeout(() => {
      restaurantRequest(loc).then(transformRestaurantResponse).then((result) => {
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