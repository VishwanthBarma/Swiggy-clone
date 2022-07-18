import { ScrollView, Text, View } from "react-native";
import React, { Component } from "react";
import CatagoryCard from "./CatagoryCard";

const Catagories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mx-3 pt-3"
    >
      <CatagoryCard
        id="1"
        imgUrl="https://recipes.timesofindia.com/thumb/msid-54308405,width-1600,height-900/54308405.jpg"
        title="Biryani"
      />
      <CatagoryCard
        id="2"
        imgUrl="https://assets.epicurious.com/photos/5732526f1877f76a0e20831c/1:1/w_2560%2Cc_limit/EP_05102016_PeruvianStyleRoastChicken_recipe_.jpg"
        title="Chicken"
      />
      <CatagoryCard
        id="3"
        imgUrl="https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Bhuna.jpg"
        title="Mutton"
      />
      <CatagoryCard
        id="4"
        imgUrl="https://imagevars.gulfnews.com/2021/01/05/King-Fish-fry-_176d284a00a_large.jpg"
        title="Fish Fry"
      />
      <CatagoryCard
        id="5"
        imgUrl="https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg"
        title="IceCream"
      />
      <CatagoryCard
        id="6"
        imgUrl="https://www.healthifyme.com/blog/wp-content/uploads/2022/01/Juices-for-weight-loss-1.jpg"
        title="Juices"
      />
      <CatagoryCard
        id="7"
        imgUrl="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/wzjsmqpxou7r5p4czz8f"
        title="Shakes"
      />
      <CatagoryCard
        id="8"
        imgUrl="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F11%2F03%2F61129_Prep_Smoothies_030_preview-2000.jpg&q=60"
        title="Fruits"
      />
    </ScrollView>
  );
};

export default Catagories;
