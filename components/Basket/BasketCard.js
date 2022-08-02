import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketCard = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute w-full bottom-10 z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="flex-row bg-red-400 p-4 mx-4 items-center space-x-1 rounded-xl"
      >
        <Text className="font-extrabold bg-red-300 px-2 py-1">
          {items.length}
        </Text>
        <Text className="font-extrabold text-white flex-1 text-center">
          Open Basket
        </Text>
        <Text className="font-extrabold text-white">Rs. {basketTotal}.00</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketCard;
