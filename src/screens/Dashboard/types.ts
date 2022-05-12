import { TransactionCardProps } from "../../components/TransactionCard";

export type DataListProps = TransactionCardProps & {
  id: string;
}

export type THighlightProps = {
  amount: string
  lastTransaction: string
}

export type THighlightData = {
  entries: THighlightProps
  expensives: THighlightProps
  total: THighlightProps
}