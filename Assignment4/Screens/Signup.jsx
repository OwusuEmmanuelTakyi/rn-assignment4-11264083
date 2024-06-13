import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation(); // Initialize the useNavigation hook

  const handleSubmit = () => {
    // Navigate to the Home screen and pass name and email as parameters
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Jobizz</Text>
      <Text>Welcome Back 👋</Text>
      <Text>Let's log in. Apply to jobs!</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
      />
      <Button title="Log in" onPress={handleSubmit} />

      <View style={{ paddingTop: 70 }}>
        <Text>Haven't an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: 'blue' }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;
