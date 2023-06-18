import { Platform, SafeAreaView, StatusBar } from "react-native"
import styled from "styled-components/native";

const isAndroid = Platform.OS === 'android'

export const MainContainer = styled(SafeAreaView)`
  flex: 1;
  ${() => isAndroid && `
   marginTop: ${StatusBar.currentHeight || 0}px ;
  `}
`