import React from 'react'
import { Text, TouchableOpacityProps } from 'react-native'
import { Container, Category, Icon } from './styles'

type Props = TouchableOpacityProps & {
    title: string
}

export function CategorySelectButton({title, ...rest}:Props) {
    return (
        <Container activeOpacity={0.7} {...rest}>
            <Category>{title}</Category>
            <Icon name="chevron-down" />
        </Container>
    )
}