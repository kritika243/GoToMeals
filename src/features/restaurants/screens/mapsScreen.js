import React from "react";
import { Text } from 'react-native'
import MapView from 'react-native-maps';

import { MainContainer } from "../../../components/safearea-component";

const MapsScreen = () => {
  return <>
    <MainContainer>

      <MapView style={{ height: "100%" }} />

    </MainContainer>
  </>
}



export default MapsScreen