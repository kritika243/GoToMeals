import React from 'react'

import CompactRestaurantCard from '../../restaurants/components/CompactRestaurantCard';

const MapCalloutComponent = ({ restaurant }) => {

  return (
    <>

      <CompactRestaurantCard restaurant={restaurant} />

    </>
  )
}

export default MapCalloutComponent