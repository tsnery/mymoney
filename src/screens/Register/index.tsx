import React from 'react'
import { Modal } from 'react-native'
import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { Input } from '../../components/Forms/Input';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { Container, Form, Header, Title, Fields, TransactionsTypes } from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = React.useState('')
  const [categoryModalOpen, setCategoryModalOpen] = React.useState(false)
  const [category, setCategory] = React.useState({
    key: 'category',
    name: 'Category',
    icon: 'any'
  })

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
          <TransactionsTypes>
            <TransactionTypeButton
              title='Income' 
              type='up' 
              onPress={() => handleTransactionTypeSelect('up')} 
              isActive={transactionType === 'up' ? true : false}
            />
            <TransactionTypeButton 
              title='Outcome' 
              type='down' 
              onPress={() => handleTransactionTypeSelect('down')} 
              isActive={transactionType === 'down' ? true : false}
            />
          </TransactionsTypes>
          <CategorySelectButton onPress={handleOpenSelectCategoryModal} title={category.name}/>
        </Fields>
        <Button title="Enviar" />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          closeSelectCategory={handleCloseSelectCategoryModal}
          setCategory={setCategory}
        />
      </Modal>
    </Container>
  )
}