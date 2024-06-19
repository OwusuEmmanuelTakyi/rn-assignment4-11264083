import React from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import JobCard from './JobCard';

const jobs = [
  { id: 1, title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('../assets/facebook.png'), featured: true },
  { id: 2, title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('../assets/facebook.png'), featured: false },
  { id: 3, title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('../assets/facebook.png'), featured: false },
  { id: 4, title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('../assets/facebook.png'), featured: false },
  { id: 5, title: 'Data Scientist', company: 'Google', salary: '$160,000', location: 'Accra, Ghana', logo: require('../assets/google.png'), featured: true },
  { id: 6, title: 'UX Designer', company: 'Apple', salary: '$150,000', location: 'California, US', logo: require('../assets/apple.png'), featured: true },
  { id: 7, title: 'Marketing Specialist', company: 'Amazon', salary: '$120,000', location: 'New York, US', logo: require('../assets/facebook.png'), featured: false },
  { id: 8, title: 'Accountant', company: 'Deloitte', salary: '$110,000', location: 'Accra, Ghana', logo: require('../assets/facebook.png'), featured: false },
  // Add more jobs as needed
];

function Home({ route }) {
  const { name, email } = route.params;

  const featuredJobs = jobs.filter(job => job.featured);
  const popularJobs = jobs.filter(job => !job.featured);

  return (
    <ScrollView className='flex-1 bg-gray-100 p-4 '>
    <View className='flex-row justify-between items-center mb-4 '>
      <View className='flex-1 '>
        <Text className='text-2xl font-bold '>{name}</Text>
        <Text className='text-lg text-gray-600 ' >{email}</Text>
      </View>
      <Image source={require('../assets/principal.jpg')} className='w-12 h-12 rounded-full' />
    </View>

    <View className='flex-row items-center bg-white rounded-lg px-2 py-1 mb-4 border border-gray-300 '>
      <FontAwesome name="search" size={20} color="#9CA3AF" className='mr-2 ' />
      <TextInput
        placeholder="Search a job or position"
        className='flex-1 h-10'
        placeholderTextColor="#9CA3AF"
      />
        </View>

        <Text className='text-xl font-bold mb-2'>Featured Jobs</Text>
        <ScrollView horizontal className='mb-4'>
          {featuredJobs.map(job => (
            <JobCard key={job.id} job={job} featured />
          ))}
        </ScrollView>

        <Text className='text-xl font-bold mb-2'>Popular Jobs</Text>
        {popularJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      
    </ScrollView>
  );
}

export default Home;
