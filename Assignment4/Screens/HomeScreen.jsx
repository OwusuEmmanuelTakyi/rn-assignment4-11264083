import { View, Text } from 'react-native'
import React from 'react'

export default function HomeScreen({route}) {
  const { name, email } = route.params;

  return (
    <View className=' flex-1 justify-center items-center p-4 bg-gray-100'>
    <Text className='text-2xl font-bold mb-4'> {name}!</Text>
    <Text className='text-lg mb-4' >  {email}</Text>
  </View>
  )
}