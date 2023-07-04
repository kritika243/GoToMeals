import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Callout, Marker } from 'react-native-maps';
import { Text } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../../map/components/MapScreenSearchComponent";
import MapCalloutComponent from "../../map/components/MapCalloutComponent";

const Map = styled(MapView)`
height: 100%;
width: 100%
`

const MapsScreen = () => {

  const { location } = useContext(LocationContext)
  const { restaurants } = useContext(RestaurantsContext)
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
    }} >
      {restaurants.map((restaurant) => {
        return (
          <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <Callout>
              <MapCalloutComponent restaurant={restaurant} />
            </Callout>
          </Marker>
        );
      })}
    </Map>
  </>
}



export default MapsScreen