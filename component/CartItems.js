import { Box, Center, HStack, Image, Pressable } from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import products from "../src/data/Products";
import Colors from "../src/color";
import { FontAwesome } from "@expo/vector-icons";

const Swiper = () => {
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 2)}
    renderItem={renderIterms}
    renderHiddenItem={hiddenIterms}
    showsVerticalScrollIndicator={false}
  />;
};
const renderIterms = (data) => {
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={Colors.while}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Center w="25%" bg={Colors.deepgray}>
          <Image
            source={{ uri: data.item.image }}
            alt={data.item.name}
            w="full"
            h={24}
          ></Image>
        </Center>
      </HStack>
    </Box>
  </Pressable>;
};

//Hidden

const hiddenIterms = () => {
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={Colors.main}
  >
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color={Colors.while} />
    </Center>
  </Pressable>;
};

const CartItem = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartItem;
