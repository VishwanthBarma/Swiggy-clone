import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { Component } from "react";

const CatagoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded-2xl"
      />
      <Text className="absolute bottom-1 left-1 font-bold text-white ">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CatagoryCard;
