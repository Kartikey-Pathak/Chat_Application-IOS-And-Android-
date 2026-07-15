import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function signup() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../assets/bgPattern.png')}
      resizeMode="cover"
      className="flex-1"
    >
      {/* Dark overlay */}
      <View className="absolute inset-0 bg-black opacity-50" />

      <TouchableOpacity
        className="absolute top-20 left-10 z-30"
        onPress={() => {
          Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success
          );
          router.back();
        }}
      >
        <Ionicons size={30} name="arrow-back" color="white" />
      </TouchableOpacity>


      <View className="flex-1 h-full w-full">

        <LinearGradient
          colors={[
            "#020617",
            "#0F172A",
            "#1E3A8A",
            "#312E81",
            "#111827",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1, display: "flex", alignContent: "center", justifyContent: "center", paddingTop: 150 }}
          className="rounded-t-[40px] w-full h-full flex-1 pt-36 items-center"
        >
          {/* Header */}
          <View className="w-full gap-5 px-8">
            <Text className="text-white text-4xl font-extrabold">
              Getting Started
            </Text>

            <Text className="text-white text-xl font-medium">
              Create an account to continue
            </Text>
          </View>

          {/* Form */}
          <View className="flex-1 mt-20 w-full items-center gap-8 pb-10">
            {/* Name */}
            <View className="w-[85%] h-18 bg-[#2A2A2C] rounded-4xl justify-center">
              <TextInput
                placeholder="Enter Name"
                placeholderTextColor="gray"
                className="px-4 text-black"
              />
            </View>

            {/* Email */}
            <View className="w-[85%] h-18 bg-[#2A2A2C] rounded-4xl justify-center">
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor="gray"
                keyboardType="email-address"
                autoCapitalize="none"
                className="px-4 text-black"
              />
            </View>

            {/* Password */}
            <View className="w-[85%] h-18 bg-[#2A2A2C] rounded-4xl justify-center">
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor="gray"
                secureTextEntry
                className="px-4 text-black"
              />
            </View>
             <TouchableOpacity  onPress={
                        () =>{
                          Haptics.notificationAsync(
                            Haptics.NotificationFeedbackType.Success
                          );}
                      } className="w-[80%] h-17 absolute bottom-10 flex items-center justify-center bg-white rounded-4xl"><Text className="font-bold text-2xl text-black">Get Started</Text></TouchableOpacity>
          </View>
        </LinearGradient>
      </View>


    </ImageBackground>
  );
}