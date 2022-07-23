import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturedCard from "./FeaturedCard";
import sanityClient from "../../sanity";

const Featured = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id]{
        ...,
        restaurant[]-> {
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]
      `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurant);
      });
  }, []);

  console.log(restaurants);

  return (
    <View>
      <View className="flex-row items-center justify-between mx-3 mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#CA4E79" />
      </View>
      <Text className="mx-3 text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mx-3 pt-3"
      >
        <FeaturedCard
          id="1"
          imgUrl="https://assets.epicurious.com/photos/5732526f1877f76a0e20831c/1:1/w_2560%2Cc_limit/EP_05102016_PeruvianStyleRoastChicken_recipe_.jpg"
          title="Chicken"
          rating={4.5}
          genre="Non-veg"
          address="Narsingi kokapet"
          short_description="Chicken Biryani of the year"
          dishes={[]}
          long={20}
          lat={0}
        />

        <FeaturedCard
          id="1"
          imgUrl="https://assets.epicurious.com/photos/5732526f1877f76a0e20831c/1:1/w_2560%2Cc_limit/EP_05102016_PeruvianStyleRoastChicken_recipe_.jpg"
          title="Chicken"
          rating={4.5}
          genre="Non-veg"
          address="Narsingi kokapet"
          short_description="Chicken Biryani of the year"
          dishes={[]}
          long={20}
          lat={0}
        />

        <FeaturedCard
          id="1"
          imgUrl="https://assets.epicurious.com/photos/5732526f1877f76a0e20831c/1:1/w_2560%2Cc_limit/EP_05102016_PeruvianStyleRoastChicken_recipe_.jpg"
          title="Chicken"
          rating={4.5}
          genre="Non-veg"
          address="Narsingi kokapet"
          short_description="Chicken Biryani of the year"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default Featured;
