import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import theme from './src/styles/theme';
import Ola from './src/components/Ola/Ola';
import CalculadoraIMC from './src/components/CalculadoraIMC/CalculadoraIMC';
import React from 'react';
import StackComponent from './src/routes/Stack';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import { ImageBackground } from 'react-native';



export default function App() {
  return (
      <StackComponent />  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o container ocupe toda a tela
        width: '100%', // Garante que o container tenha a largura total da tela
        alignItems: 'center', // Centraliza o conteúdo na tela horizontalmente
        justifyContent: 'center', // Centraliza o conteúdo na tela verticalmente
        backgroundColor: 'pink',
  },
  text:{
    fontSize:24
  },
  textInput:{
    borderColor: theme.colors.red,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 24,
    width:300,
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    backgroundColor: theme.colors.blue,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
