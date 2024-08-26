import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../pages/splash'
import GetStarted from '../pages/getStarted'
import SignUp from '../pages/auth/signUp'
import SignIn from '../pages/auth/signIn'
import MainApp from '../pages/feature/MainApp'
import Detail from '../pages/feature/Detail'

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown : false}} />
            <Stack.Screen name='MainApp' component={MainApp} options={{headerShown : false}} />
            <Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown : false}} />
            <Stack.Screen name='SignUp' component={SignUp} options={{headerShown : false}} />
            <Stack.Screen name='SignIn' component={SignIn} options={{headerShown : false}} />
            <Stack.Screen name='Detail' component={Detail} options={{headerShown : false}} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})