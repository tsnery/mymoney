import styled from "styled-components/native";
import { THistoryCard } from "./types";

export const Container = styled.View<Pick<THistoryCard, 'color'>>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  padding: 14px 24px;

  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({color}) => color};

  margin-bottom: 8px;
`

export const Title = styled.Text``

export const Amount = styled.Text``