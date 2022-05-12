import React from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard } from '../../components/TransactionCard'
import { useAuth } from '../../hooks/useAuth'
import * as Styles from './styles'
import { DataListProps, THighlightData } from './types'

export function Dashboard() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [transactions, setTransactions] = React.useState<DataListProps[]>([])
  const [highlightData, setHighlightData] = React.useState<THighlightData | null>(null)

  const { colors } = useTheme()
  const { signOut, user } = useAuth()

  React.useEffect(() => {
    loadTransactions()
  }, [])

  useFocusEffect(React.useCallback(() => {
    loadTransactions()
  }, []))

  function getLastTransactionDate(collection: DataListProps[], type: 'positive' | 'negative') {
    if (collection.length <= 0) {
      return ''
    }
    const lastTransactionDate = new Date(Math.max.apply(Math, collection
      .filter(transaction => transaction.type === type)
      .map(transaction => new Date(transaction.date).getTime())))

    return `${lastTransactionDate.getDate()} de ${lastTransactionDate.toLocaleString('pt-BR', {
      month: 'long'
    })}`
  }

  async function loadTransactions() {
    try {
      const dataKey = "@gofinance:transactions"
      const response = await AsyncStorage.getItem(dataKey)
      const transactions = response ? JSON.parse(response) : []

      let entriesTotal = 0
      let expensivesTotal = 0

      const transactionsFormatted: DataListProps[] = transactions.map((item: DataListProps) => {

        if (item.type === 'positive') {
          entriesTotal += Number(item.amount)
        } else {
          expensivesTotal += Number(item.amount)
        }

        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency', currency: 'BRL'
        })
        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit', month: '2-digit', year: '2-digit'
        }).format(new Date(item.date))

        return {
          id: item.id,
          name: item.name,
          amount,
          date,
          type: item.type,
          category: item.category
        }
      })

      setTransactions(transactionsFormatted)

      const lastTransactionEntries = getLastTransactionDate(transactions, 'positive')
      const lastTransactionExpensives = getLastTransactionDate(transactions, 'negative')
      const totalInterval = `01 à ${lastTransactionExpensives}`
      const total = entriesTotal - expensivesTotal

      if (!total) {
        return setHighlightData(null)
      }

      setHighlightData({
        entries: {
          amount: entriesTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
          lastTransaction: `Última entrada dia ${lastTransactionEntries}`
        },
        expensives: {
          amount: expensivesTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
          lastTransaction: `Última saída dia ${lastTransactionExpensives}`

        },
        total: {
          amount: total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
          lastTransaction: totalInterval
        }
      })

    } catch (error) {
      Alert.alert('Ocorreu um erro', 'Não foi possível carregar transações')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Styles.Container>
      {
        isLoading ?
          <Styles.LoadingContainer>
            <ActivityIndicator color={colors.primary} size="large" />
          </Styles.LoadingContainer> :
          <React.Fragment>
            <Styles.Header>
              <Styles.UserWrapper>
                <Styles.UserInfo>
                  <Styles.Photo source={{ uri: user?.photo || '' }} />
                  <Styles.User>
                    <Styles.UserGreeting>Olá,</Styles.UserGreeting>
                    <Styles.UserName>{user?.name}</Styles.UserName>
                  </Styles.User>
                </Styles.UserInfo>
                <Styles.LogoutButton onPress={signOut}>
                  <Styles.Icon name='power' />
                </Styles.LogoutButton>
              </Styles.UserWrapper>
            </Styles.Header>
            <Styles.HighlightCardsList>
              <HighlightCard
                type='up'
                title='Entradas'
                amount={highlightData?.entries.amount || 'R$ 0,00'}
                lastTransaction={highlightData?.entries.lastTransaction || 'Sem registro de entradas'} />
              <HighlightCard
                type='down'
                title='Saídas'
                amount={highlightData?.expensives.amount || 'R$ 0,00'}
                lastTransaction={highlightData?.expensives.lastTransaction || 'Sem registro de saídas'} />
              <HighlightCard
                type='total'
                title='Total'
                amount={highlightData?.total.amount || 'R$ 0,00'}
                lastTransaction={highlightData?.total.lastTransaction || ''} />
            </Styles.HighlightCardsList>
            <Styles.Transactions>
              <Styles.Title>Listagem</Styles.Title>
              <Styles.TransactionsList
                data={transactions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <TransactionCard data={item} />}
              />

            </Styles.Transactions>
          </React.Fragment>
      }
    </Styles.Container>
  )
}