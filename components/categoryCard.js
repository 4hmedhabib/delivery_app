import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity className="ml-2 relative ">
      <Image
        source={{
          uri: imageUrl,
        }}
        className="w-20 h-20 rounded-md"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
