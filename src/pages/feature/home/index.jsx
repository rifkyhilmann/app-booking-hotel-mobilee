import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { Hotel, IconBars, IconBell, IconExplore, IconExploreActive, IconHome, IconLocationWhite } from '../../../assets'
import Card from '../../../components/Card'
import data from '../../../data/data.json'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../../Providers/UserContext'

const Home = () => {
    const navigation = useNavigation()
    const { username } = useContext(UserContext)

    return (
        <ScrollView>
          <View className='h-[300px] w-full bg-primary rounded-b-3xl'>
            <View className='mx-5 h-10 mt-5 mb-8  flex-row justify-between items-center'>
              <Image 
                source={IconBars}
                className='h-8 w-8'
              />
              <Image 
                source={IconBell}
                className='h-6 w-6'
              />
            </View>
            <View className='mx-5 mt-4'>
              <Text className='text-white font-poppins my-1 text-xl font-bold'>
                Hi {username ? username : ''}
              </Text>
              <Text className='text-white font-poppins  text-lg'>
                Where do you want to stay?
              </Text>
            </View>
            <View className='mx-5 h-12 bg-inputColor mt-7 rounded-xl flex-row items-center'>
              <Image 
                source={IconLocationWhite}
                className='h-6 w-6 m-3'
              />
              <TextInput 
                className='flex-1 text-sm text-white  items-center'
                placeholder='Your Questions'
              />
            </View>
          </View>
          <View className='mx-5 h-max my-6' >
              <View className='w-full h-max flex-row justify-between'> 
                <View className='flex-col'>
                  <Text className='font-poppins font-bold text-black text-lg'>Near You</Text>
                  <Text className='font-poppins text-xs font-extralight text-secondary'>12 Hotel Found</Text>
                </View>
                <View className='items-center justify-center'>
                  <Text className='text-secondary font-poppins text-md font-medium'>MORE</Text>
                </View>
              </View>
              <View className='mt-7 h-max mb-10'>
                {data.map((items, index) => (
                  <Card 
                    key={index}
                    name={items.name}
                    rating={items.rating}
                    price={items.price}
                    room={items.room}
                    facilites={items.facilites}
                    image={items.image}
                    onClick={() => navigation.navigate('Detail', {items})}
                  />
                ))}
              </View>
          </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})