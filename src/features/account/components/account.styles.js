import { View } from "react-native";
import { Button } from 'react-native-paper';
import styled from "styled-components/native";

import { colors } from '../../../infrastructure/theme/colors'

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/appWallpaper.jpeg')
})`
flex: 1;
background-color: #ddd;
align-items: center;
justify-content: center
opacity: 0.7
`


export const AccountContainer = styled.View`
background-color: rgba(255, 255, 255, 0.7);
padding: ${(props) => props.theme.space[4]}
margin-top: ${(props) => props.theme.space[2]}
border-radius: 6px
`

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
padding: ${(props) => props.theme.space[2]};
border-radius: 4px;
`