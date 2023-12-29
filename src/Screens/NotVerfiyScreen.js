import { Box, Center, Image, VStack } from "native-base";
import React from "react";
import Colors from "../color";
import icon from "../../assets/images/icon_1.png";
import Buttone from "../../component/Buttone";

function NotVerfiyScreen() {
  return (
    <Box flex={1} bg={Colors.black} safeAreaTop>
      <Center w="full" h={250}>
        <Image source={icon} alt="Logo" size="xl" />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone bg={Colors.main} color={Colors.while}>
          REGISTER
        </Buttone>
        <Buttone bg={Colors.main} color={Colors.while}>
          LOGIN
        </Buttone>
      </VStack>
    </Box>
  );
}
export default NotVerfiyScreen;
