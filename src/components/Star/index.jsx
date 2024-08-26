import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconStart } from '../../assets'

const Star = ({count}) => {
    const starCount = Array(count).fill(0)

    return (
        <View className='h-5 flex-row '>
            {starCount.map((items, index) => (
                <Image 
                    source={IconStart}
                    className='mr-2 h-4 w-4'
                    key={index}
                />
            ))}
        </View>
    )
}

export default Star

const styles = StyleSheet.create({})