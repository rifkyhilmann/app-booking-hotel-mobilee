import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconExplore, IconExploreActive, IconFavorite, IconFavoriteActive, IconHome, IconHomeActive, IconProfile, IconProfileActive, logo } from '../../../assets'
import Home from '../home'
import Explore from '../explore'
import Profile from '../profile'
import Favorite from '../favorite'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
    return (
        <Tab.Navigator 
                screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle : {
                    position : 'absolute', 
                    bottom : 10,
                    left : 20,
                    right : 20,
                    elevation : 0,
                    backgroundColor : '#ffffff',
                    borderRadius : 15,
                    height : 60,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen 
                name='Home' 
                component={Home} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View className='items-center justify-center top-1'>
                            <Image 
                                source={focused ? IconHomeActive : IconHome}
                                className='w-[25px] h-[25px]'
                            />
                            <Text
                                className={`${focused ? 'text-primary ' : 'text-secondary'} text-[8px] mt-1 font-poppins`}
                            >
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name='Explore' 
                component={Explore} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View className='items-center justify-center top-1'>
                            <Image 
                                source={focused ? IconExploreActive : IconExplore}
                                className='w-[25px] h-[25px]'
                            />
                            <Text
                                className={`${focused ? 'text-primary ' : 'text-secondary'} text-[8px] mt-1 font-poppins`}
                            >
                                Explore
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name='Favorite' 
                component={Favorite} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View className='items-center justify-center top-1'>
                            <Image 
                                source={focused ? IconFavoriteActive : IconFavorite}
                                className='w-[25px] h-[25px]'
                            />
                            <Text
                                className={`${focused ? 'text-primary ' : 'text-secondary'} text-[8px] mt-1 font-poppins`}
                            >
                                Favorite
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name='Profile' 
                component={Profile} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View className='items-center justify-center top-1'>
                            <Image 
                                source={focused ? IconProfileActive : IconProfile}
                                className='w-[25px] h-[25px]'
                            />
                            <Text
                                className={`${focused ? 'text-primary ' : 'text-secondary'} text-[8px] mt-1 font-poppins`}
                            >
                                Profile
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainApp

const styles = StyleSheet.create({})