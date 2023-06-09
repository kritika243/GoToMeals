import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native"

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: 16px;
`

export const Search = ({ isFavoritesToggled, onFavoritesToggle }) => {
  const { keyword, search } = useContext(LocationContext)
  const [searchedKeyword, setSearchedKeyword] = useState(keyword)


  useEffect(() => {
    setSearchedKeyword(keyword)
  }, [keyword])


  return <>
    <SearchContainer>
      <Searchbar
        icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavoritesToggle}
        placeholder="Search for a location"
        onSubmitEditing={() => {
          search(searchedKeyword)
        }}
        value={searchedKeyword}
        onChangeText={(text) => {

          setSearchedKeyword(text)
        }}
      />
    </SearchContainer></>
}