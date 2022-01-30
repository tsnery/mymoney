import React, { Dispatch, SetStateAction } from 'react'
import { FlatList } from 'react-native'
import { Button } from '../../components/Forms/Button'
import { categories } from '../../utils/categories'
import { Container, Header, Title, Category, Icon, Name, Separator, Footer } from './styles'

type Category = {
  key: string
  name: string
  icon?: any
}

type Props = {
  category: Category
  setCategory: Dispatch<SetStateAction<Category>>
  closeSelectCategory: () => void
}

export function CategorySelect({ category, setCategory, closeSelectCategory }: Props) {

  function handleCategorySelect(item: Category) {
    setCategory(item)
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button onPress={closeSelectCategory} title="Selecionar" />
      </Footer>
    </Container>
  )
}