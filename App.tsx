import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { Dashboard } from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
