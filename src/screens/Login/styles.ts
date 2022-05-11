import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  height: 70%;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary};
  
  justify-content: flex-end;
  align-items: center;
`

export const TitleContainer = styled.View`
  align-items: center;
  max-width: ${RFValue(300)}px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;

  margin-top: 45px;
`

export const SignInTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;

  max-width: ${RFValue(180)}px;

  margin: 80px 0px 67px 0px;
`

export const Footer = styled.View`
  height: 30%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const ButtonWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;
`