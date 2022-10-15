import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./categoryCard";
import { imageSrc } from "../assets";

const Categories = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{
        paddingBottom: 10,
      }}
    >
      <CategoryCard imageUrl={imageSrc.categories.image1} title="Testing 1" />
      <CategoryCard imageUrl={imageSrc.categories.image2} title="Testing 2" />
      <CategoryCard imageUrl={imageSrc.categories.image3} title="Testing 3" />
      <CategoryCard imageUrl={imageSrc.categories.image4} title="Testing 4" />
      <CategoryCard imageUrl={imageSrc.categories.image5} title="Testing 5" />
      <CategoryCard imageUrl={imageSrc.categories.image6} title="Testing 6" />
    </ScrollView>
  );
};

export default Categories;
