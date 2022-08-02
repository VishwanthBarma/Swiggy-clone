import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-gray-700 flex-1">
      <SafeAreaView className="z-50 mx-4">
        <View className="flex-row items-center justify-between my-3">
          <XIcon
            onPress={() => navigation.navigate("Home")}
            size={30}
            color="#ffffff"
          />
          <Text className="text-gray-300 text-md">Order Help?</Text>
        </View>

        <View className="bg-white mx-5 my-3 rounded-xl p-5 z-50 space-y-2 shadow">
          <View>
            <Text className="text-lg font-semibold">Estimated Arrival</Text>
            <Text className="text-3xl font-bold">45-65 Minutes</Text>
          </View>
          <Progress.Bar size={30} color="#CA4E79" indeterminate={true} />
          <Text className="text-gray-500 mt-3 text-xs">
            Your Order at {restaurant.title} is being prepared.
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#56d402"
        ></Marker>
      </MapView>

      <SafeAreaView className="h-24 flex-row items-center space-x-3 mx-5">
        <Image
          source={{
            uri: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg",
          }}
          className="h-10 w-10 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-white">The Rock</Text>
          <Text className="text-gray-300 text-xs">Your Delivery Partner</Text>
        </View>

        <Text className="text-sky-500 font-bold text-lg">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
