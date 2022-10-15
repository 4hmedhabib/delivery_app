import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { imageSrc } from "../assets";

import Categories from "../components/categories";
import FeatureRow from "../components/featureRow";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="mt-1 bg-white">
      <View className="font-bold text-2xl mx-4">
        {/* Header */}
        <View className="flex-row pb-3 items-center space-x-2">
          <Image
            source={{
              uri: imageSrc.homeIconImage,
            }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />

          <View className="flex-1">
            <Text className="text-gray-400 font-bold text-xs">Deliver Now</Text>

            <Text className="font-bold text-lg ">
              Currenct Location
              <ChevronDownIcon size={20} color="#00ccbb" />
            </Text>
          </View>

          <View className="bg-[#00ccbb] w-8 h-8 rounded-full flex justify-center items-center">
            <UserIcon size={20} color="#fff" />
          </View>
        </View>

        {/* Search */}
        <View className="flex-row items-center justify-between pb-2">
          <View className="flex-row space-x-2 bg-gray-200 px-2 py-2 rounded-md items-center flex-1 mr-2">
            <MagnifyingGlassIcon size={20} color={"gray"} />
            <TextInput
              placeholder="Restaurants and cuisnes"
              keyboardType="default"
            />
          </View>

          <AdjustmentsVerticalIcon size={30} color={"#00ccbb"} />
        </View>
      </View>

      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured Row */}

        <FeatureRow
          id="125"
          title="Featured"
          description="Paid placement from our partners"
          featuredCategory="featured"
        />

        <FeatureRow
          id="123"
          title="Offers near you!"
          description="Paid placement from our partners"
          featuredCategory="featured"
        />

        <FeatureRow
          id="124"
          title="Tasty Discounts"
          description="Paid placement from our partners"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
