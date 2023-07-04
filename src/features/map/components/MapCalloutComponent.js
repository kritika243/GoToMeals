import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const CalloutText = styled(Text)`

`
const MapCalloutComponent = ({ restaurant }) => {
  return (
    <>
      <CalloutText>
        {restaurant.name}
      </CalloutText>
    </>
  )
}

export default MapCalloutComponent