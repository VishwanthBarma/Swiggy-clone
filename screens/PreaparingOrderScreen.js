import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreaparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Animatable.Image
        source={require("../assets/giphy.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="font-bold text-xl"
      >
        Preparing Your Order
      </Animatable.Text>
      <Progress.Circle
        className="m-10"
        size={40}
        indeterminate={true}
        color="#000000"
      />
    </SafeAreaView>
  );
};

export default PreaparingOrderScreen;
