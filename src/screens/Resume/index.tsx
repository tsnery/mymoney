import React from 'react'
import { Alert, ListRenderItem } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList } from 'react-native-gesture-handler'
import { VictoryPie } from 'victory-native'
import { addMonths, format, subMonths } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { HistoryCard } from '../../components/HistoryCard'
import { TransactionCardProps } from '../../components/TransactionCard'
import { categories } from '../../utils/categories'
import { TTotalByCategory } from './types'
import * as Styles from './styles'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { Loading } from '../../components'
import { useFocusEffect } from '@react-navigation/native'

export function Resume() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const [totalByCategories, setTotalByCategories] = React.useState<TTotalByCategory[]>([])

  const { colors } = useTheme()

  useFocusEffect(React.useCallback(() => {
    loadData()

    return () => setIsLoading(true)
  }, [selectedDate]))

  async function loadData() {
    setIsLoading(true)
    try {
      const dataKey = "@gofinance:transactions"
      const response = await AsyncStorage.getItem(dataKey)
      const transactions: TransactionCardProps[] = response ? JSON.parse(response) : []

      const expensives = transactions.filter(transaction => {
        if (
            transaction.type === 'negative' && 
            new Date(transaction.date).getMonth() === selectedDate.getMonth() &&
            new Date(transaction.date).getFullYear() === selectedDate.getFullYear()
          ) {
          return transaction
        }
      })

      const expensiveTotal = expensives.reduce((acc, expensive) => {
        return acc + Number(expensive.amount)
      }, 0)

      const totalByCategory: TTotalByCategory[] = []

      categories.forEach(category => {
        let categorySum = 0

        expensives.forEach(transaction => {
          if (transaction.category === category.key) {
            categorySum += Number(transaction.amount)
          }
        })

        if (categorySum > 0) {
          const total = categorySum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

          const percent = `${((categorySum / expensiveTotal) * 100).toFixed(1)}%`

          totalByCategory.push({
            name: category.name,
            color: category.color,
            total: categorySum,
            totalFormatted: total,
            percent
          })
        }
      })

      setTotalByCategories(totalByCategory)
    } catch (error: any) {
      Alert.alert('Erro ao obter dados', error.message)
    } finally {
      setIsLoading(false)
    }
  }

  function handleDateChange(action: 'next' |'previous') {
    switch (action) {
      case 'next':
        setSelectedDate(addMonths(selectedDate, 1))
        break;
      case 'previous':
        setSelectedDate(subMonths(selectedDate, 1))
        break;
    }
  }

  const renderHeaderComponent = () => (
    <React.Fragment>
      <Styles.MonthSelect>
        <Styles.MonthSelectButton onPress={() => handleDateChange('previous')}>
          <Styles.SelectIcon name="chevron-left"/>
        </Styles.MonthSelectButton>
        <Styles.Month>
          {format(selectedDate, 'MMM, yyyy', { locale: ptBR })}
        </Styles.Month>
        <Styles.MonthSelectButton onPress={() => handleDateChange('next')}>
          <Styles.SelectIcon name="chevron-right"/>
        </Styles.MonthSelectButton>
      </Styles.MonthSelect>
      <Styles.ChartContainer>
        <VictoryPie
          data={totalByCategories}
          colorScale={totalByCategories.map(category => category.color)}
          x="percent"
          y="total"
          style={{
            labels: {
              fontSize: RFValue(18),
              fontWeight: 'bold',
              fill: colors.shape
            }
          }}
          labelRadius={50}
        />
      </Styles.ChartContainer>
    </React.Fragment>
  )

  const renderItemComponent: ListRenderItem<TTotalByCategory> = ({ item }) => (
    <HistoryCard title={item.name} amount={item.totalFormatted} color={item.color} />
  )

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>Resumo por categoria</Styles.Title>
      </Styles.Header>
      {isLoading 
        ? (<Loading/>) 
        : (
          <FlatList
            contentContainerStyle={{ padding: 24 }}
            data={totalByCategories}
            keyExtractor={item => item.name}
            ListHeaderComponent={renderHeaderComponent}
            renderItem={renderItemComponent}
          />
        )}
      
    </Styles.Container>
  )
}