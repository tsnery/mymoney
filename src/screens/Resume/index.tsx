import React from 'react'
import { HistoryCard } from '../../components/HistoryCard'
import { Container, Header, Title } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert, ListRenderItem } from 'react-native'
import { TransactionCardProps } from '../../components/TransactionCard'
import { categories } from '../../utils/categories'
import { TTotalByCategory } from './types'
import { FlatList } from 'react-native-gesture-handler'

export function Resume() {
  const [totalByCategories, setTotalByCategories] = React.useState<TTotalByCategory[]>([])

  React.useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      const dataKey = "@gofinance:transactions"
      const response =  await AsyncStorage.getItem(dataKey)
      const transactions:TransactionCardProps[] = response ? JSON.parse(response) : []

      const expensives = transactions.filter(transaction => transaction.type === 'negative')
      const totalByCategory:TTotalByCategory[] = []

      categories.forEach(category => {
        let categorySum = 0

        expensives.forEach(transaction => {
          if (transaction.category === category.key) {
            categorySum += Number(transaction.amount)
          }
        })

        if (categorySum > 0) {
          const total = categorySum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          totalByCategory.push({ 
            name: category.name,
            total,
            color: category.color
          })
        }
      })

      setTotalByCategories(totalByCategory)
    } catch (error: any) {
      Alert.alert('Erro ao obter dados', error.message)
    }
  }

  const renderItem:ListRenderItem<TTotalByCategory> = ({ item }) => (
    <HistoryCard title={item.name} amount={item.total} color={item.color} />
  )

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <FlatList
        contentContainerStyle={{ padding: 24, flex: 1 }}
        data={totalByCategories}
        keyExtractor={item => item.name}
        renderItem={renderItem}
      />
    </Container>
  )
}