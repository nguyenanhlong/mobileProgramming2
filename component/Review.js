import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../src/color";
import Rating from "./Rating";
import Message from "./Notfications/Message";
import Buttone from "./Buttone";

export default function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/** if there not review */}
      <Message
        color={Colors.while}
        bg={Colors.deepgray}
        bold
        children={"NO REVIEW"}
      />
      {/** review */}
      <Box p={3} bg={Colors.deepgray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.while}>
          Anh Long
        </Heading>
        <Rating value={4} />
        <Text my={3} color={Colors.while}>
          12/23/2023
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.while}
          size={12}
          children={
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It Contrary to popular belief"
          }
        />
      </Box>
      {/** write review */}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subgreen}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subgreen,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="San pham nay rat tot ..."
              borderWidth={0}
              bg={Colors.subgreen}
              py={3}
              _focus={{
                bg: Colors.subgreen
              }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.while}> SUBMIT</Buttone>
          {/** if not login */}
          {/**<Message
          color={Colors.while}
          bg={Colors.black}
          children={
            "Please 'Login' to write review"
          }
        />*/}
        </VStack>
      </Box>
    </Box>
  );
}
