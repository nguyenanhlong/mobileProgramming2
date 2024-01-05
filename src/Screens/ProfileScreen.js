import { Center, Heading, Image, Text } from "native-base";
import React from "react";
import Colors from "../color";
import Tabs from "../../component/Profile/Tabs";

function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.k8iOCbcpw1qbqESdWOvRXQHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Jan 5 2024
        </Text>
      </Center>
      {/** Tabs */}
      <Tabs />
    </>
  );
}

export default ProfileScreen;
