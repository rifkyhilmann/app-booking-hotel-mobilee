import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Hotel } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const GetStarted = () => {
    const navigation = useNavigation()

    return (
        <View className='flex-1 flex-col items-center'>
            <View className='h-[450px] w-full  flex items-center justify-center'>
                <Image source={Hotel} className='w-[200px] h-[250px] rounded-full' />
            </View>
            <View className='flex items-center'>
                <Text className='text-black text-lg font-poppins font-bold'>
                    Redefining Your{' '}
                    <Text className='text-primary'>
                        Hotel
                    </Text>
                </Text>
            </View>
            <View className='flex items-center'>
                <Text className='text-primary text-xl font-poppins font-bold '>
                   Reservation{' '}
                    <Text className='text-black'>
                        Experience
                    </Text>
                </Text>
            </View>
            <Text className='text-gray-400 text-xs font-poppins mt-10 text-center mx-7 '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias amet quas, 
            </Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('SignUp')}
                className='bg-primary w-[70%] h-12 rounded-xl mt-10 flex items-center justify-center'>
                <Text className='text-white font-poppins font-bold text-md'>
                    Get Started
                </Text>
            </TouchableOpacity> 
            <View className='flex-row items-center mt-10 '>
                <Text className='text-black text-xs font-poppins    '>
                    Already have an account ?{' '}
                </Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('SignIn')}
                    className='items-center justify-center '>
                    <Text className='text-primary font-bold text-xs'>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({})