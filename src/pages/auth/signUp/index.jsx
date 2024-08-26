import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import InputField from '../../../components/InputField'
import ButtonSubmit from '../../../components/ButtonSubmit'
import { iconsGoogle } from '../../../assets'
import MenuSign from '../../../components/MenuSign'
import { useNavigation } from '@react-navigation/native'


const SignUp = () => {
    const navigation = useNavigation()
    const [namaValue, setNamaValue] = useState('')
    const [usernameValue, setUsernameValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    return (
        <View className='flex-1 items-center '>
            <View className='flex-col items-center justify-center my-14  w-full '>
                <Text className='text-black text-2xl font-poppins font-bold'>Create Account</Text>
                <Text className='text-gray-400 text-xs font-poppins text-center w-[70%] mt-1 '>
                    Fit your information below or register
                    with your social account
                </Text>
            </View>
            <InputField 
                title="Name"
                value={namaValue}
                onChange={(e) => setNamaValue(e)}
            />
            <InputField 
                title="Username"
                value={usernameValue}
                onChange={(e) => setUsernameValue(e)}
            />
            <InputField 
                title="Password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e)}
            />
            <View className='flex-row items-center w-[75%] my-3 '>
                <View className='h-5 w-5 border mr-2 rounded'></View>
                <Text className='font-poppins text-black text-xs '>
                    Agree width {' '}
                    <Text className='text-primary'>
                    Terms & Condition
                    </Text>
                </Text>
            </View>
            <ButtonSubmit 
                text="Sign Up"
            />
            <Text className='text-xs text-gray-400 m-6 font-poppins'>
                or sign with
            </Text>
            <MenuSign />
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

export default SignUp

const styles = StyleSheet.create({})