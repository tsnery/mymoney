import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { ThemeProvider } from 'styled-components';
import theme from '../global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from '../routes/app.routes';
import { LogBox, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from '../context/AuthContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const { OAUTH_CLIENT_ID } = process.env

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: OAUTH_CLIENT_ID
    })
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
