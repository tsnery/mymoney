import React from 'react';
import { Dashboard } from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme';
import { Register } from './src/screens/Register';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
};

export default App;
