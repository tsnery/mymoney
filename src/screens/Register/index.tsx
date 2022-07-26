import React from 'react'
import {Keyboard, Modal, TouchableWithoutFeedback, Alert} from 'react-native'
import {useForm} from 'react-hook-form'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import {Button} from '../../components/Forms/Button'
import {CategorySelectButton} from '../../components/Forms/CategorySelectButton'
import {TransactionTypeButton} from '../../components/Forms/TransactionTypeButton'
import {CategorySelect} from '../CategorySelect'
import {
  Container,
  Form,
  Header,
  Title,
  Fields,
  TransactionsTypes,
} from './styles'
import {InputForm} from '../../components/Forms/InputForm'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {AppRoutesParamList} from '../../routes/app.routes'
import {useAuth} from '../../hooks/useAuth'

type FormData = {
  [name: string]: any
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('Valor é obrigatório'),
})

export function Register() {
  const [transactionType, setTransactionType] = React.useState('')
  const [categoryModalOpen, setCategoryModalOpen] = React.useState(false)
  const [category, setCategory] = React.useState({
    key: 'category',
    name: 'Categoria',
  })

  const {user} = useAuth()

  const navigation =
    useNavigation<BottomTabNavigationProp<AppRoutesParamList>>()
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})

  function handleTransactionTypeSelect(type: 'positive' | 'negative') {
    setTransactionType(type)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação')
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria')
    }

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    }

    try {
      const dataKey = `@gofinance:transactions_user:${user?.id}`

      const data = await AsyncStorage.getItem(dataKey)
      const parsedData = data ? JSON.parse(data) : []

      const dataFormatted = [...parsedData, newTransaction]

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

      reset()
      setTransactionType('')
      setCategory({
        key: 'category',
        name: 'Categoria',
      })

      navigation.navigate('Listagem')
    } catch (error) {
      Alert.alert('Não foi possível salvar')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />
            <TransactionsTypes>
              <TransactionTypeButton
                title="Income"
                type="up"
                onPress={() => handleTransactionTypeSelect('positive')}
                isActive={transactionType === 'positive'}
              />
              <TransactionTypeButton
                title="Outcome"
                type="down"
                onPress={() => handleTransactionTypeSelect('negative')}
                isActive={transactionType === 'negative'}
              />
            </TransactionsTypes>
            <CategorySelectButton
              onPress={handleOpenSelectCategoryModal}
              title={category.name}
            />
          </Fields>
          <Button onPress={handleSubmit(handleRegister)} title="Enviar" />
        </Form>
        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            closeSelectCategory={handleCloseSelectCategoryModal}
            setCategory={setCategory}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}
