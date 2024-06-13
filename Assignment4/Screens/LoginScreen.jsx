import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'



export default function LoginScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log('You tapped the button!');
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
           <View className='pl-[30px]pr-[30px] pt-[100px]  flex items-center justify-center'>
           <View style={{flexDirection: 'row', alignItems: 'center'}}>
                 <View style={{flex: 1, height:1, backgroundColor: 'black'}} />
                    <View>
                       <Text style={{width: 135, textAlign: 'center'}}>Or continue with</Text>
                   </View>
                     <View style={{flex: 1,width: 10, height: 1, backgroundColor: 'black'}} />
                 </View>
           
             
              <View>
                  
              </View>
                                            
              <View className='pt-[150px] flex-row '>
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