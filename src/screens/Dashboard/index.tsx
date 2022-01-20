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
  TransactionsList
} from './styles'

export type DataListProps = TransactionCardProps & {
  id: string;
}

export function Dashboard() {

  const data:DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title:'Desenvolvimento de site',
      amount:"R$ 12.000,00",
      category: { 
        name: 'Vendas', 
        icon: 'dollar-sign' 
      },
      date:'12/12/2022',
    },
    {
      id: '2',
      type: 'negative',
      title:'Hamburguer Pizzy',
      amount:"R$ 59,00",
      category: { 
        name: 'Alimentação', 
        icon: 'coffee' 
      },
      date:'12/12/2022',
    },
    {
      id: '3',
      type: 'negative',
      title:'Aluguel do apartamento',
      amount:"R$ 1.200,00",
      category: { 
        name: 'Casa', 
        icon: 'shopping-bag' 
      },
      date:'12/12/2022',
    }
  ]

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
          <Icon name='power' />
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
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item}/>}
        />
        
      </Transactions>
    </Container>
  )
}