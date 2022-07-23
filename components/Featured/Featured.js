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
        {restaurants?.map((restaurant) => (
          <FeaturedCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured;
