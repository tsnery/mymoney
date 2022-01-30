import styled, { css } from "styled-components/native";
import Feather from 'react-native-vector-icons/Feather'
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

type IconProps = {
    type: 'up' | 'down'
}

type ContainerProps = {
    isActive: boolean;
    type: 'up' | 'down'
}



export const Container = styled.View<ContainerProps>`
    width: 48%;

    border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;

    ${({isActive, type}) => isActive && type === 'up' && css`
        background-color: ${({theme}) => theme.colors.success_light};
    `};

    ${({isActive, type}) => isActive && type === 'down' && css`
        background-color: ${({theme}) => theme.colors.attention_light};
    `};
`;

export const Button = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 16px;
`

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