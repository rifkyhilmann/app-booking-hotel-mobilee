import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { iconsApple, iconsFacebook, iconsGoogle } from '../../assets'

const MenuSign = () => {
    return (
        <View className='w-full flex-row items-center justify-center'>
            <TouchableOpacity className='h-12 w-12 border border-gray-400 rounded-full flex items-center justify-center mx-3'>
                <Image source={iconsApple} className='w-5 h-5' />
            </TouchableOpacity>
            <TouchableOpacity className='h-12 w-12 border border-gray-400 rounded-full flex items-center justify-center mx-3'>
                <Image source={iconsGoogle} className='w-5 h-5' />
            </TouchableOpacity>
            <TouchableOpacity className='h-12 w-12 border border-gray-400 rounded-full flex items-center justify-center mx-3'>
                <Image source={iconsFacebook} className='w-5 h-5' />
            </TouchableOpacity>
        </View>
    )
}

export default MenuSign

const styles = StyleSheet.create({})