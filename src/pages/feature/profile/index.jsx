import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Hotel, IconFavorite, IconFavoriteActive, IconLogout, IconNext, IconPen, IconSetting } from '../../../assets'
import { UserContext } from '../../../Providers/UserContext'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const {username} = useContext(UserContext)
  const navigation = useNavigation()

  return (
    <View className='flex-1 flex-col items-center'>
      <View className='h-48 w-full  items-center justify-center'>
        <Image 
          source={Hotel}
          className='h-32 w-32 rounded-full'
        />
      </View>
      <Text className='text-black font-poppins text-center text-xl'>
        {username ? username : ''}
      </Text>
      <View className='py-2 px-3 m-4 rounded-xl text-center bg-primary'>
        <Text className='text-white font-poppins text-xs '>
          rifkyhilmanudin965@gmail.com
        </Text>
      </View>
      <View className='w-[80%] h-max bg-white rounded-xl mt-6'>
        <TouchableOpacity className='w-full h-14 flex-row justify-between'>
          <View className='flex-row items-center'>
            <Image 
              source={IconPen}
              className='h-4 w-4 m-4'
            />
            <Text className='text-black font-poppins'>
              Edit Profile
            </Text>
          </View>
          <View className=''>
            <Image 
              source={IconNext}
              className='h-5 w-5 m-4'
            />
          </View>
        </TouchableOpacity>
        <View className='w-full h-[1px] bg-gray-200' />
        <TouchableOpacity className='w-full h-14 flex-row justify-between'>
          <View className='flex-row items-center'>
            <Image 
              source={IconFavoriteActive}
              className='h-4 w-4 m-4'
            />
            <Text className='text-black font-poppins'>
             Bookmark
            </Text>
          </View>
          <View className=''>
            <Image 
              source={IconNext}
              className='h-5 w-5 m-4'
            />
          </View>
        </TouchableOpacity>
        <View className='w-full h-[1px] bg-gray-200' />
        <TouchableOpacity className='w-full h-14 flex-row justify-between'>
          <View className='flex-row items-center'>
            <Image 
              source={IconSetting}
              className='h-4 w-4 m-4'
            />
            <Text className='text-black font-poppins'>
             Setting
            </Text>
          </View>
          <View className=''>
            <Image 
              source={IconNext}
              className='h-5 w-5 m-4'
            />
          </View>
        </TouchableOpacity>
        <View className='w-full h-[1px] bg-gray-200' />
        <TouchableOpacity 
          onPress={() => navigation.navigate('SignIn')}
          className='w-full h-14 flex-row justify-between'>
          <View className='flex-row items-center'>
            <Image 
              source={IconLogout}
              className='h-4 w-4 m-4'
            />
            <Text className='text-black font-poppins'>
              Logout
            </Text>
          </View>
          <View className=''>
            <Image 
              source={IconNext}
              className='h-5 w-5 m-4'
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})