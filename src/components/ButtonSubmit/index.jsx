import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonSubmit = ({onClick, text}) => {
    return (
        <TouchableOpacity 
            onPress={onClick}
            className='bg-primary w-[75%] h-12 rounded-xl my-5 flex items-center justify-center'
        >
            <Text className='text-white font-poppins font-bold text-md'>
                    {text}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonSubmit

const styles = StyleSheet.create({})