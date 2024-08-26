import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import InputField from '../../../components/InputField'
import ButtonSubmit from '../../../components/ButtonSubmit'
import MenuSign from '../../../components/MenuSign'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../../Providers/UserContext'

const SignIn = () => {
    const [usernameValue, setUsernameValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const navigation = useNavigation()
    const {setUsername} = useContext(UserContext)

    const signClick = () => {
        if(!usernameValue || !passwordValue) {
            
        } else {
            navigation.navigate('MainApp')
            setUsername(usernameValue)
        }
        setUsernameValue('')
        setPasswordValue('')
    }

    return (
        <View className='flex-1 items-center'>
            <View className='flex-col items-center justify-center my-10  w-full '>
                <Text className='text-black text-2xl font-poppins font-bold'>Sign In</Text>
                <Text className='text-gray-400 text-xs font-poppins text-center w-[70%] mt-1 '>
                    hi welcome back, you’ve been missed
                </Text>
            </View>
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
                text="Sign In"
                onClick={signClick}
            />
            <Text className='text-xs text-gray-400 m-10 font-poppins'>
                or sign with
            </Text>
            <MenuSign />
            <View className='flex-row items-center mt-14 '>
                <Text className='text-black text-xs font-poppins    '>
                    Don't have an account ?{' '}
                </Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('SignUp')}
                    className='items-center justify-center '>
                    <Text className='text-primary font-bold text-xs'>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({})