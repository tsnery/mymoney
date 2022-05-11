import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  height: ${RFValue(48)}px;

  flex-direction: row;
  align-items: center;
  
  background-color: ${({ theme }) => theme.colors.shape};
  
  border-radius: 5px;

  margin-bottom: 16px;
`

export const IconContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-right-width: 2px;
  border-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_dark};
`