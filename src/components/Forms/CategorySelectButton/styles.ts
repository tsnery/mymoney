import styled from "styled-components/native";
import Feather from 'react-native-vector-icons/Feather'
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
    background-color: ${({theme}) => theme.colors.shape};
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px;
    padding: 18px 16px;
`

export const Category = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`

export const Icon = styled(Feather).attrs({
    size: RFValue(20),
})`
    color: ${({theme}) => theme.colors.text}
`