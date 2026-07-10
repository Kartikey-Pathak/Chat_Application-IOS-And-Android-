import { Ionicons } from "@expo/vector-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { useState } from "react";
import {
  FlatList,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PagerView from "react-native-pager-view";

// Separate component because hooks cannot be used inside map()
function StoryPage({ story }) {
  const player = useVideoPlayer(
    story.type === "video" ? story.uri : null,
    (player) => {
      if (story.type === "video") {
        player.loop = true;
        player.play();
      }
    }
  );

  return (
    <View className="flex-1 items-center justify-center">
      {story.type === "image" ? (
        <ImageBackground
          source={{ uri: story.uri }}
          
          imageStyle={{ borderRadius: 30 }}
          className="w-full h-[80%] overflow-hidden justify-end"
        >
          <View className="bg-black/40 p-4">
            <Text className="text-white text-2xl font-bold">
              {story.title}
            </Text>
          </View>
        </ImageBackground>
      ) : (
        <View className="w-full h-[80%] rounded-[30px] overflow-hidden">
          <VideoView
            player={player}
            style={{ flex: 1 }}
            contentFit="cover"
            nativeControls={true}
            allowsFullscreen
            allowsPictureInPicture={false}
          />

          <View className="absolute bottom-0 left-0 right-0 bg-black/40 p-4">
            <Text className="text-white text-2xl font-bold">
              {story.title}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const DATA = [
    {
      id: "1",
      title: "Add Story",
      type: "image",
      uri: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?q=80&w=1074&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "Big Buck Bunny",
      type: "video",
      uri: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: "3",
      title: "Alex",
      type: "image",
      uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
    {
      id: "4",
      title: "Nature Video",
      type: "video",
      uri: "https://samplelib.com/mp4/sample-5s.mp4",
    },
    {
      id: "5",
      title: "Sophia",
      type: "image",
      uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
  ];

  return (
    <View className="flex-1 bg-black items-center pt-20">

      {/* Story Viewer */}
      {currentIndex !== null && (
        <View className="absolute inset-0 z-50 bg-black">
          <PagerView
            style={{ flex: 1 }}
            initialPage={currentIndex}
          >
            {DATA.map((story) => (
              <View key={story.id}>
                <StoryPage story={story} />
              </View>
            ))}
          </PagerView>

          <TouchableOpacity
            onPress={() => setCurrentIndex(null)}
            className="absolute top-30 right-6"
          >
            <Ionicons
              name="close-circle"
              size={40}
              color="white"
            />
          </TouchableOpacity>
        </View>
      )}

      {/* Search */}
      <View className="flex-row items-center w-[90%] h-16 rounded-3xl border-2 border-[#57595B] bg-[#1C1C1C] pl-6">
        <Ionicons
          name="search"
          size={24}
          color="white"
        />

        <TextInput
          placeholder="Search People"
          placeholderTextColor="#57595B"
          className="flex-1 text-white text-xl ml-3"
        />
      </View>

      {/* Stories */}
      <View className="w-full h-52 mt-8">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setCurrentIndex(index)}
              className="mr-5"
            >
              <ImageBackground
                source={{
                  uri:
                    item.type === "video"
                      ? "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400"
                      : item.uri,
                }}
                imageStyle={{
                  borderRadius: 40,
                }}
                className="w-36 h-44 justify-end overflow-hidden"
              >
                {item.type === "video" && (
                  <View className="absolute top-3 right-3">
                    <Ionicons
                      name="play-circle"
                      size={32}
                      color="white"
                    />
                  </View>
                )}

                <View className="bg-black/40 p-3">
                  <Text className="text-white text-lg font-bold">
                    {item.title}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>

      <View className="w-full px-7 mt-8">
        <Text className="text-white text-4xl font-medium">
          Messages
        </Text>
      </View>
    </View>
  );
}