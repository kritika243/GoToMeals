import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native"

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: 16px;
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 30px;
`

export const Search = () => {
  const { keyword, search } = useContext(LocationContext)
  const [searchedKeyword, setSearchedKeyword] = useState(keyword)


  useEffect(() => {
    setSearchedKeyword(keyword)
  }, [keyword])


  return <>
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon='map'
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