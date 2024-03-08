import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import CalculadoraIMC from '../components/CalculadoraIMC/CalculadoraIMC';
import Ola from '../components/Ola/Ola';


const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home: undefined;
    Login: undefined;
    CalculadoraIMC: undefined;
    Ola: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Home" component={Home} />
                <Stack.Screen name = "Login" component={Login} />
                <Stack.Screen name = "CalculadoraIMC" component={CalculadoraIMC} />
                <Stack.Screen name = "Ola" component={Ola} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}