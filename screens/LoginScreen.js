import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native'

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: 'white' }}>
    
      {/* SafeAreaView for handling safe areas on different devices */}
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          {/* Content for the top part */}
        </View>
        <View className="flex-row justify-center">
          <View style={{ position: "relative" }}>
            {/* Image with a back button */}
            <Image
              source={require('../assets/images/login.png')}
              style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                position: "absolute",
                top: 15,
                left: 15,
                color: '#FFFFFF',
                backgroundColor: "#B7BAE4",
                padding: 2,
                borderTopRightRadius: 15, // Use appropriate values for your design
                borderBottomLeftRadius: 10, // Use appropriate values for your design
                marginLeft: 2,
                padding: 10,
                borderRadius: 5,
              }}
            >
              {/* Back button */}
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
            <Text
              style={{
                position: "absolute",
                bottom: 30,
                left: 40,
                color: "white",
                fontWeight: "bold",
                fontSize: 40,
              }}
            >
              Sign in to your account
            </Text>
          </View>
        </View>
      </SafeAreaView>

      {/* Form section */}
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 pt-8"
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="email"
            value="john@gmail.com"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            placeholder="password"
            value="test12345"
          />
          <TouchableOpacity className="flex items-end">
            <Text className="text-gray-700 mb-5">Forgot Password?</Text>
          </TouchableOpacity>

          {/* Sign In button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="py-3 bg-violet-800 rounded-xl"
          >
            <Text
              className="text-xl font-bold text-center text-slate-50"
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
        
        {/* Social media login buttons */}
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/apple.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
          </TouchableOpacity>
        </View>
        
        {/* Sign Up link */}
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="font-semibold text-yellow-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
