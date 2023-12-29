import {
  Box,
  HStack,
  Heading,
  Image,
  ScrollView,
  Spacer,
  Text,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "../../component/Rating";
import NumbericInput from "react-native-numeric-input";
import Review from "../../component/Review";
import Buttone from "../../component/Buttone";

function SingleProduct() {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.while}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/3.png")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={35}>
          New Product From Anh Long Shop
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumbericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepgray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.while }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.black}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={20}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable sourceContrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock
        </Text>
        <Buttone bg={Colors.main} color={Colors.while} mt={10}>
            ADD TO CART
        </Buttone>
        {/* Review */}
        <Review/>
      </ScrollView>
    </Box>
  );
}

export default SingleProduct;
