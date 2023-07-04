import React, { useContext, useEffect, useState } from "react";
import MapView from 'react-native-maps';
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/MapScreenSearchComponent";

const Map = styled(MapView)`
height: 100%;
width: 100%
`

const MapsScreen = () => {

  const { location } = useContext(LocationContext)
  const { restaurants = [] } = useContext(RestaurantsContext)
  const [latDelta, setLatDelta] = useState(0)


  const { lat, lng, viewport } = location

  useEffect(() => {
    const northEastLat = viewport.northeast.lat
    const southWestLat = viewport.southwest.lat

    setLatDelta(northEastLat - southWestLat)
  }, [location, viewport])

  return <>
    <Search />
    <Map region={{
      latitude: lat,
      longitude: lng,
      latitudeDelta: latDelta,
      longitudeDelta: 0.02
    }} />
  </>
}



export default MapsScreen