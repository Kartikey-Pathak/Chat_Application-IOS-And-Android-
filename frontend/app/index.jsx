import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {

  const router=useRouter();
  useEffect(()=>{
    setTimeout(() => {
      router.replace("/(auth)/welcome")
      
    }, 1500);

  },[])

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Animated.Image
        source={require("../assets/splash.png")}
        entering={FadeInDown.duration(800).springify()}
        resizeMode="contain"
        className="w-80 h-80"
      />
    </View>
  );
}