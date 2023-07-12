import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const saveFavorites = async (value) => {
    try {
      await AsyncStorage.setItem('@favorites', JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  const getSavedFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorites');
      if (value !== null) {
        setFavorites(JSON.parse(value))
      }
    } catch (e) {
      console.log(e);
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant])
  }

  const remove = (restaurant) => {
    const newFavorites = favorites.filter((x) => x.placeId !== restaurant.placeId)
    setFavorites(newFavorites)
  }


  useEffect(() => {
    getSavedFavorites()
  }, [])

  useEffect(() => {
    saveFavorites(favorites)
  }, [favorites])


  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove
      }}
    >
      {children}
    </FavoritesContext.Provider >
  )
} 