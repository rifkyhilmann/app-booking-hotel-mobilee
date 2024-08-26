import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Hotel, IconBack } from '../../../assets'
import Star from '../../../components/Star'
import { useNavigation } from '@react-navigation/native'
import ButtonSubmit from '../../../components/ButtonSubmit'

const Detail = ({route}) => {
    const {items} = route.params
    const navigation = useNavigation()

    return (
        <ScrollView>
            <View className='m-5 h-10 flex-row justify-between'>
                <View className='flex-row items-center'>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('MainApp')}
                        className='mr-4 '>
                        <Image 
                            source={IconBack}
                            className='w-4 h-4'
                        />
                    </TouchableOpacity>
                    <Text className='font-poppins text-black text-xl' >
                        Detail
                    </Text>
                </View> 
                <View className='flex-row justify-end'>

                </View>
            </View>
            <View className='mx-5 h-max '>
                <Image 
                     source={{ uri : items.image }}
                    className='w-full h-64 rounded-lg'
                />
                <View className='w-full flex-row justify-between my-5'>
                    <View className='flex-col '>
                        <Text className='text-black font-poppins text-lg mb-1 '>
                            {items.name}
                        </Text>
                        <Star 
                            count={items.rating}
                        />
                    </View>
                </View>
                <View className='flex-row items-center mb-5'>
                    <Text className='text-primary font-poppins font-semibold text-xs mr-5'>
                        Description
                    </Text>
                    <Text className='text-secondary font-poppins font-semibold text-xs mr-5'>
                        Room
                    </Text>
                    <Text className='text-secondary font-poppins font-semibold text-xs mr-5'>
                        Review
                    </Text>
                </View>
                <View className='mb-5'>
                    <Text className='text-black font-poppins'>
                        {items.description}
                    </Text>
                </View>
                <TouchableOpacity 
                    className='bg-primary w-full h-12 rounded-xl my-5 flex items-center justify-center'
                >
                    <Text
                        className='text-white font-poppins font-bold text-md'
                    >
                        Booked
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Detail

const styles = StyleSheet.create({})