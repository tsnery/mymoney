import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { RFValue } from "react-native-responsive-fontsize";

type IconProps = {
    type: 'up' | 'down'
}

type ContainerProps = {
    isActive: boolean;
    type: 'up' | 'down'
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
    width: 48%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    
    padding: 16px;

    ${({isActive, type}) => isActive && type === 'up' && css`
        background-color: ${({theme}) => theme.colors.success_light};
    `};

    ${({isActive, type}) => isActive && type === 'down' && css`
        background-color: ${({theme}) => theme.colors.attention_light};
    `};
`;

export const Icon = styled(Feather).attrs({
    size: RFValue(24)
})<IconProps>`
    margin-right: 12px;
    color: ${({ type, theme }) => type === 'up' ? theme.colors.success : theme.colors.attention};
`

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`