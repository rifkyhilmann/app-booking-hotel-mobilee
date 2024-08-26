import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Hotel } from '../../assets'
import Star from '../Star'
import { useNavigation } from '@react-navigation/native'

const Card = ({name, price, room, facilites, rating, image, onClick}) => {

    return (
        <TouchableOpacity 
            onPress={onClick}
            className='w-full flex-col h-max mb-7'>
            <View className='flex-row h-28 w-full '>
                <Image 
                    source={{ uri : image }}
                    className='h-full w-28 rounded-xl mr-4'
                />
                <View className='flex-col justify-between '>
                    <View className=''>
                        <Text className='text-black font-poppins text-lg  '>
                            {name}
                        </Text>
                        <Star 
                            count={rating}
                        />
                    </View>
                    <View className=''>
                        <Text className='text-secondary font-poppins text-xs'>Start Form</Text>
                        <Text className='text-primary font-poppins text-xs'>
                            Rp.{price}{' '}
                            <Text className='text-secondary'>
                                /Night
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
            <View className='mt-5 w-full h-7 rounded-md bg-primary flex-row'>
                <View className='flex-row  mx-3 items-center'>
                    <View className='h-1 w-1 bg-white rounded-full'></View>
                    <Text className='font-poppins text-xs text-white ml-2'>
                        {room} Room
                    </Text>
                </View>
                <View className='flex-row  mx-3 items-center'>
                    <View className='h-1 w-1 bg-white rounded-full'></View>
                    <Text className='font-poppins text-xs text-white ml-2'>
                        {facilites} Facilities
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({})