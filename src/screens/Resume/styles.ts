import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Feather'

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    
    width: 100%;
    height: ${RFValue(103)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`

export const MonthSelect = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-top: 24px;
`

export const MonthSelectButton = styled(BorderlessButton)`

`

export const SelectIcon = styled(Icon)`
  font-size: ${RFValue(24)}px;
`

export const Month = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
`

export const ChartContainer = styled.View`
    align-items: center;
`