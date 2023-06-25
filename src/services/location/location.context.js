import { createContext, useEffect, useState } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null)
  const [keyword, setKeyword] = useState('San Francisco')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onSearch = (searchKeyword) => {
    setKeyword(searchKeyword)
    setLoading(true)

    if (!searchKeyword.length) {
      return
    }
    locationRequest(searchKeyword.toLowerCase()).then(locationTransform).then((result) => {
      setLoading(false)
      setLocation(result)

    }).catch((err) => {
      setLoading(false)
      setError(err)
    })
  }

  return (
    <LocationContext.Provider value={{
      loading,
      error, location, search: onSearch, keyword
    }}>
      {children}
    </LocationContext.Provider>
  )

}