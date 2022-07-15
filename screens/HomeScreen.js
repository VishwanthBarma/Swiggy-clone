import { View, Text, Image, TextInput, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row space-x-2 items-center pb-4 mx-3">
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/72876374?v=4",
          }}
          className="h-7 w-7 rounded-full p-5 bg-gray-400"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-500 text-xs">Order Now!</Text>
          <Text className="font-bold text-lg ">
            Current Location
            <ChevronDownIcon size={20} color="#CA4E79" />
          </Text>
        </View>

        <UserIcon size={25} color="#CA4E79" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-3">
        <View className="flex-row space-x-2 bg-gray-200 flex-1 rounded-xl p-3">
          <SearchIcon />
          <TextInput
            placeholder="Search for restaurants, items and more."
            keyboardType="default"
            className="font-semibold"
          />
        </View>
        <AdjustmentsIcon color="#CA4E79" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
