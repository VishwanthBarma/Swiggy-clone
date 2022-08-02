import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { useNavigation } from "@react-navigation/native";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-gray-100 flex-1">
        <View className="p-4 bg-white border-b border-red-400 shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-500">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-3 right-5"
          >
            <XCircleIcon height={40} width={40} color="#CA4E79" />
          </TouchableOpacity>
        </View>

        <View className="items-center flex-row space-x-4 bg-white px-4 py-3 my-5">
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/72876374?v=4",
            }}
            className="h-8 w-8 rounded-full"
          />
          <Text className="flex-1">Delivery in 50-70 min's</Text>
          <Text className="text-sky-500">Change</Text>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="bg-white py-2 px-4 flex-row items-center space-x-3"
            >
              <View className="bg-gray-200 rounded-full p-1">
                <Text className="font-semibold text-gray-800">
                  {items.length}x
                </Text>
              </View>
              <Image
                className="h-12 w-12 rounded-full"
                source={{ uri: urlFor(items[0]?.image).url() }}
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text>Rs. {items[0]?.price}</Text>
              <TouchableOpacity>
                <Text
                  className="text-red-500 text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="bg-white p-5 mt-4 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">Rs. {basketTotal}.00</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">Rs. {(basketTotal / 100) * 5}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-900 font-semibold">Order Total</Text>
            <Text className="font-bold text-lg">
              Rs. {(basketTotal / 100) * 5 + basketTotal}
            </Text>
          </View>

          <TouchableOpacity className="bg-red-400 p-2 rounded-xl">
            <Text className="font-bold text-lg text-center text-white">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
