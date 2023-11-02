import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import Routes from './src/routes/Routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from 'react-native-paper';

const App = () => {
  const fontsConfig = {
    ios: {
      regular: {
        fontFamily: 'Electrolux-Sans',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Electrolux-Sans-Semibold',
        fontWeight: '500',
      },
      light: {
        fontFamily: 'Electrolux-Sans-Light',
        fontWeight: '300',
      },
      thin: {
        fontFamily: 'Electrolux-Sans-Thin',
        fontWeight: '600',
      },
    },
    android: {
      regular: {
        fontFamily: 'Electrolux-Sans',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Electrolux-Sans-Semibold',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Electrolux-Sans-Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'Electrolux-Sans-Thin',
        fontWeight: 'normal',
      },
    },
  };
  const theme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, primary: 'rgba(254, 138, 12, 1)' },
    fonts: configureFonts({
      config: {
        fontFamily: 'Electrolux-Sans',
      },
    }),
  };




  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>

    </GestureHandlerRootView>
  );
};

export default App;
