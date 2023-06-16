import { SafeAreaView, StatusBar } from "react-native"
import styled from "styled-components/native";

export const MainContainer = styled(SafeAreaView)`
  flex: 1;
  ${props => props.isAndroid && `
   marginTop: ${StatusBar.currentHeight || 0}px ;
  `}
`