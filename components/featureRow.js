import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import { View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import RestaurentCard from "./restaurentCard";
import { imageSrc } from "../assets";

const FeatureRow = ({ title, description }) => {
  return (
    <View>
      <View className="mx-4 flex-row items-center justify-between">
        <View className="mt-4 flex-col items-start justify-center">
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-xs text-gray-500">{description}</Text>
        </View>

        <ArrowRightIcon color={"#00ccbb"} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="mt-4"
      >
        {/* Restuarent Cards */}
        <RestaurentCard
          id={123}
          imgUrl={imageSrc.restaurents.image1}
          title="Yo! Soshi"
          rating={4.5}
          genre={"Japanese"}
          address="123 Main St"
          short_description={"This is a short description"}
          dishes={[]}
          lng={20}
          lat={0}
        />

        <RestaurentCard
          id={123}
          imgUrl={imageSrc.restaurents.image1}
          title="Yo! Soshi"
          rating={4.5}
          genre={"Japanese"}
          address="123 Main St"
          short_description={"This is a short description"}
          dishes={[]}
          lng={20}
          lat={0}
        />

        <RestaurentCard
          id={123}
          imgUrl={imageSrc.restaurents.image1}
          title="Yo! Soshi"
          rating={4.5}
          genre={"Japanese"}
          address="123 Main St"
          short_description={"This is a short description"}
          dishes={[]}
          lng={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;

const styles = StyleSheet.create({});
