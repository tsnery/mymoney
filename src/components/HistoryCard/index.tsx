import React from 'react'
import { Container, Title, Amount } from './styles'
import { THistoryCard } from './types'

export function HistoryCard({ title, color, amount }:THistoryCard) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  )
}