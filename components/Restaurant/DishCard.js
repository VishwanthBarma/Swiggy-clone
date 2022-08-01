import { View, Text } from "react-native";
import React from "react";

const DishCard = ({ id, name, description, image, price }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default DishCard;
