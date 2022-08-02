import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-gray-700 flex-1 p-5">
      <SafeAreaView>
        <View className="flex-row items-center justify-between my-3">
          <XIcon
            onPress={() => navigation.navigate("Home")}
            size={30}
            color="#ffffff"
          />
          <Text className="text-gray-300 text-md">Order Help?</Text>
        </View>

        <View className="bg-white mx-5 my-3 rounded-xl p-5 z-50 space-y-2">
          <View>
            <Text className="text-lg font-semibold">Estimated Arrival</Text>
            <Text className="text-3xl font-bold">50-70 Minutes</Text>
          </View>
          <Progress.Bar size={30} color="#CA4E79" indeterminate={true} />
          <Text className="text-gray-500 mt-3 text-xs">
            Your Order at {restaurant.title} is being prepared.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
