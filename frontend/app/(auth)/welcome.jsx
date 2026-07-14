import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
export default function welcome() {
  const image = { uri: '../../assets/bgPattern.png' };
  const router=useRouter();
  return (
    <ImageBackground
      source={require('../../assets/bgPattern.png')}
      resizeMode="cover"
      className="flex-1"
    >

      {/* Dark overlay */}
      <View className="absolute inset-0 bg-black opacity-50" />


      {/* Content */}
      <View className="flex-1 justify-start pt-40 flex flex-col items-center">
        <View className="w-[90%] h-60 flex items-center justify-center">
          <Text className="text-white text-5xl mt-20 mb-10 font-extrabold">
            Welcome
          </Text>
          <Image
            style={{ width: 300, height: 300, }}
            source={require("../../assets/welcome.png")}

            contentFit="contain"
            transition={1000}
          /></View>

        <View className="flex items-start justify-center w-full">

          <View className="flex items-start pl-10  mt-50 justify-center w-[80%]">
            <Text className="text-white text-4xl font-bold">
              Stay Connected with your friends and family
            </Text>
          </View>
        </View>

        <TouchableOpacity  onPress={
            () =>{
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              );router.push("/(auth)/signup")}
          } className="w-[80%] h-17 absolute bottom-10 flex items-center justify-center bg-white rounded-4xl"><Text className="font-bold text-2xl text-black">Get Started</Text></TouchableOpacity>

      </View>
    </ImageBackground>
  )
}