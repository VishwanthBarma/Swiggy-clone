import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { urlFor } from "../../sanity";
import { useNavigation } from "@react-navigation/native";

const FeaturedCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className="rounded-2xl bg-white shadow-sm mr-3"
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-2xl"
      />

      <View className="p-3">
        <Text className="font-bold text-lg text-gray-800">{title}</Text>

        <View className="flex-row space-x-1 items-center">
          <StarIcon color="green" size={22} opacity={0.7} />
          <Text className="text-gray-500">
            <Text className="font-semibold text-green-600">{rating}</Text> ·{" "}
            {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" size={20} opacity={0.7} />
          <Text className="text-gray-500 text-xs">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;
