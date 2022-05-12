import AsyncStorage from '@react-native-async-storage/async-storage'

async function getItemFromStorage<T>(key: string) {
  try {
    const response = await AsyncStorage.getItem(key)

    if (response) {
      const formattedResponse: T = JSON.parse(response)
      return formattedResponse
    }

    return null
  } catch (error: any) {
    throw new Error(error.message)
  }
}

function setItemOnStorage(key: string, data: any) {
  AsyncStorage.setItem(key, JSON.stringify(data)).then(response => response).catch(error => { throw new Error(error.message) })
}

export { getItemFromStorage, setItemOnStorage }