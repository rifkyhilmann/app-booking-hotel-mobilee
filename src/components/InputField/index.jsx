import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputField = ({value, onChange, title}) => {
    return (
        <View className='flex-col w-[75%] my-2 '>
            <Text className='text-black font-semibold font-poppins text-xs'>{title}</Text>
            <TextInput 
                onChangeText={onChange}
                value={value}
                className='w-full h-10 bg-gray-200 rounded-lg mt-2 text-md  pl-3 text-black  items-center' 
            />
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({})