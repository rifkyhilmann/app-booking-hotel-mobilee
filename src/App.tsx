import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'
import { UserProvider } from './Providers/UserContext'

const App = () => {
    return (
      <NavigationContainer>
        <UserProvider>
          <Router />
        </UserProvider>
      </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})