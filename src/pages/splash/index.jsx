import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { logo } from '../../assets'

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 3000)
    })

    return (
        <View className='flex-1 bg-primary justify-center items-center'>
            <Image 
                source={logo}
                
            />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})