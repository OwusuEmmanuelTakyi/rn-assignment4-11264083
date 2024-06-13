import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';



export default function LoginScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };
  return (
   
    <View className="flex-1 bg-white">
      <View className='pl-10 pt-[100px]'>
         <Text className='text-[20px] font-bold '>Jobizz 👋</Text>
         <Text className='text-[30px] font-black' >Welcome Back</Text>
         <Text className='text-[15px] '>Let's log in. Apply to jobs</Text>
      </View>
      <View className='flex items-center justify-center pt-[70px]'>
      <TextInput className='h-10 border border-gray-300 rounded-lg w-3/4 p-2 mb-4'
        placeholder="Name"
        value={name}
        onChangeText={setName}
        
      />
      <TextInput className='h-10 border border-gray-300 rounded-lg w-3/4 p-2 mb-4'
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
         <TouchableOpacity className=' bg-[#356899] rounded-lg w-[327px] p-3 mb-4 '
        onPress={handleLogin}
      >
        <Text className=' text-white text-center'>Log in</Text>
      </TouchableOpacity>

      </View>
           <View className='pl-[30px]pr-[30px] pt-[90px]  flex items-center justify-center'>
           <View className=' flex-row items-center my-4 w-3/4'>
        <View className='flex-1 h-0.5 bg-black' />
        <View>
          <Text className='w-32 text-center'>Or continue with</Text>
        </View>
        <View className='flex-1 h-0.5 bg-black' />
      </View>
           
             
              <View>
              <View className='flex-row justify-center'>
        <TouchableOpacity className=''>
        <View className='bg-white rounded-full p-3 shadow'>
          <Image source={require('../assets/apple.png')} className='w-10 h-10' />
        </View>
        </TouchableOpacity>
        <TouchableOpacity className=''>
        <View className='bg-white rounded-full p-3 shadow'>
          <Image source={require('../assets/google.png')} className='w-10 h-10' />
         </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View className='bg-white rounded-full p-3 shadow'>
          <Image source={require('../assets/facebook.png')} className='w-10 h-10' />
       </View>
        </TouchableOpacity>
      </View>
              </View>
                                            
              <View className='pt-[30px] flex-row '>
              <Text>Haven't an account?</Text>
                   <TouchableOpacity onPress={() =>{
            console.log('You tapped the button!');
           }}>
          <Text style={{ color: 'blue' }}> Register</Text>
                  </TouchableOpacity>
              </View>
                 
              </View>

    </View>
   
  )
}