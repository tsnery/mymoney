import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
import { 
  Container, 
  Header,
  Photo, 
  User, 
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper, 
  Icon, 
  HighlightCardsList,
  Transactions,
  Title,
  TransactionsList,
  LogoutButton
} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export type DataListProps = TransactionCardProps & {
  id: string;
}

export function Dashboard() {
  const [transactions, setTransactions] = React.useState<DataListProps[]>([])

  async function loadTransactions() {
    try {
      const dataKey = "@gofinance:transactions"
      const response =  await AsyncStorage.getItem(dataKey)
      const transactions = response ? JSON.parse(response) : []

      const transactionsFormatted:DataListProps[] = transactions.map((item:DataListProps) => {
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

    } catch(error) {
      Alert.alert('Ocorreu um erro', 'Não foi possível carregar transações')
    }
  }

  React.useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/26428766?v=4' }}/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Tainan Nery</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name='power' />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HighlightCardsList>
        <HighlightCard 
          type='up'
          title='Entradas' 
          amount='R$ 17.400,00' 
          lastTransaction='Última entrada dia 13 de abril' />
        <HighlightCard 
          type='down'
          title='Saídas' 
          amount='R$ 17.400,00' 
          lastTransaction='Última entrada dia 13 de abril' />        
        <HighlightCard 
          type='total'
          title='Total' 
          amount='R$ 17.400,00' 
          lastTransaction='Última entrada dia 13 de abril' />
      </HighlightCardsList>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item}/>}
        />
        
      </Transactions>
    </Container>
  )
}