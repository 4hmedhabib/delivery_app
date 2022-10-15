import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestaurentCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  lng,
  lat,
}) => {
  return (
    <TouchableOpacity className="shadow mr-3 bg-white">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-md"
      />
      <View className="pb-4 px-3">
        <Text className="font-bold text-base pt-2">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color={"gray"} opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Near by - {address} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurentCard;

const styles = StyleSheet.create({});
