import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import {  Text, View } from 'react-native';
/*
npm install --save styled-components 
npm add @types/styled-components-react-native -D
npm add @types/styled-components -D
 */
import {ThemeProvider} from 'styled-components/native';

import COLORS from '../src/styles/theme';

//npm add expo-updates@~0.11.7
import * as Updates from 'expo-updates';

// npm add expo-app-loading@~1.3.0
import AppLoading from 'expo-app-loading';
/*
npm install expo-font
npm add expo-font@~10.0.4 @expo-google-fonts/poppins
npm add expo-font@~10.0.4 @expo-google-fonts/dm-serif-display
npm add expo-font@~10.0.4 @expo-google-fonts/dm-sans
 */
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';

import {DMSans_400Regular} from '@expo-google-fonts/dm-sans';
import {DMSerifDisplay_400Regular} from '@expo-google-fonts/dm-serif-display';
import { Login } from './screens/Login/Login';



function App() {

    useEffect(() => {
        async function updateApp() {
          const { isAvailable } = await Updates.checkForUpdateAsync();
          if (isAvailable) {
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync(); 
          }
        }
        updateApp();
      }, []);

      const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,

      })
      if(!fontsLoaded){
        return <AppLoading />
      }



    return (
      <ThemeProvider theme={COLORS}>
        <StatusBar  style='dark' translucent backgroundColor='transparent'/>
        <View>
          
            <Login />
        </View>
      </ThemeProvider>
    );
}

export  default App;