import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  LocationMarkerIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishCard from "../components/Restaurant/DishCard";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
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
    },
  } = useRoute();
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 p-4 bg-gray-300"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute left-5 top-14 bg-white rounded-full p-2"
        >
          <ArrowLeftIcon size={20} color="#CA4E79" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="font-bold text-3xl">{title}</Text>

          <View className="flex-row space-x-3 my-2">
            <View className="flex-row items-center space-x-1">
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

          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row space-x-2 items-center p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon size={20} opacity={0.7} />
          <Text className="font-bold flex-1">Have a food allergy?</Text>
          <ChevronRightIcon color="#CA4E79" />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

        {/* Render Dishes of the restaurant */}

        {dishes.map((dish) => (
          <DishCard
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
