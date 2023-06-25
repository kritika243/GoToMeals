import styled from "styled-components/native"
import { Searchbar } from 'react-native-paper';
import { View } from "react-native";
import { useContext, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";


const SearchContainer = styled(View)`
  padding: 16px;
`

export const Search = () => {
  const { keyword, search } = useContext(LocationContext)
  const [searchedKeyword, setSearchedKeyword] = useState(keyword)

  return <>
    <SearchContainer>
      <Searchbar
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