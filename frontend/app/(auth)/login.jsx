import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Signup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ImageBackground
      source={require("../../assets/bgPattern.png")}
      resizeMode="cover"
      className="flex-1"
    >
      {/* Dark Overlay */}
      <View className="absolute inset-0 bg-black/50" />

      {/* Back Button */}
      <TouchableOpacity
        className="absolute top-20 left-10 z-30"
        onPress={() => {
          Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success
          );
          router.back();
        }}
      >
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets
        showsVerticalScrollIndicator={false}
      >
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
          style={{
            flex: 1,
            minHeight: "100%",
            paddingTop: 150,
            alignItems: "center",
          }}
          className="rounded-t-[40px]"
        >
          {/* Header */}
          <View className="w-full px-8">
            <Text className="text-white text-4xl font-extrabold">
              Welcome back
            </Text>

            <Text className="text-white text-xl font-medium mt-4">
              We are happy to see you!
            </Text>
          </View>

          {/* Form */}
          <View className="w-full items-center gap-6 mt-16 pb-12">


            <View className="w-[85%] h-16 bg-[#2A2A2C] rounded-3xl justify-center">
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor="gray"
                keyboardType="email-address"
                autoCapitalize="none"
                className="px-5 text-white"
              />
            </View>

            <View className="w-[85%] h-16 bg-[#2A2A2C] rounded-3xl justify-center">
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor="gray"
                secureTextEntry
                className="px-5 text-white"
              />
            </View>

            <View className="flex-row items-center">
              <Text className="text-white text-lg">
                Don't have an account?
              </Text>

              <TouchableOpacity
                onPress={() => {
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Success
                  );
                  router.push("/(auth)/login");
                }}
              >
                <Text className="text-yellow-400 text-lg font-semibold ml-2">
                  signup
                </Text>
              </TouchableOpacity>
            </View>

            {!isLoading ? (
              <TouchableOpacity
                onPress={() => {
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Success
                  );
                  setIsLoading(true);
                }}
                className="w-[80%] h-16 bg-white rounded-3xl items-center justify-center mt-8"
              >
                <Text className="text-black text-2xl font-bold">
                  Login
                </Text>
              </TouchableOpacity>
            ) : (
              <ActivityIndicator size="large" color="white" />
            )}
          </View>
        </LinearGradient>
      </ScrollView>
    </ImageBackground>
  );
}