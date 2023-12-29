import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Box, Button, Heading, Image, Input, Pressable, Text, VStack } from "native-base";
import React from "react";
import Colors from "../color";


function RegisterScreen(){
    return(
        <Box flex={1} bg={Colors.black}>
            <Image
                source={require("../../assets/cover.png")}
            />
            <Box
                w="full"
                h="full"
                position="absolute"
                top="0"
                px="6"
                justifyContent="center"
            >
                <Heading color="white">SIGN UP</Heading>
                <VStack space={5} pt="6">
                    {/* username */}
                    <Input
                    InputLeftElement={
                        <FontAwesome name="user" size={20} color="white" />
                    }
                    variant="underlined" 
                    placeholder="ALONG" 
                    w="70%" 
                    pl={2}
                    type="text"
                    color="white"
                    borderBottomColor={Colors.gray}
                    />
                     {/* email */}
                    <Input
                    InputLeftElement={
                        <MaterialIcons name="email" size={20} color="white" />
                    }
                    variant="underlined" 
                    placeholder="user@gmail.com" 
                    w="70%" 
                    pl={2}
                    type="text"
                    color="white"
                    borderBottomColor={Colors.gray}
                    />
                    {/* password */}
                    <Input 
                    InputLeftElement={
                        <Ionicons name="eye" size={20} color="white" />
                    }
                    variant="underlined" 
                    placeholder="********" 
                    w="70%" 
                    pl={2}
                    type="password"
                    color="white"
                    borderBottomColor={Colors.gray}
                    />
                </VStack>
                <Button 
                _pressed={{
                    bg:"white"
                }}
                my={30} 
                w="40%" 
                rounded={50} 
                bg={Colors.main}
                _text={{
                    color: Colors.black
                }}
                >
                    SIGN UP
                </Button>
                <Pressable mt={4}>
                    <Text color={Colors.subgreen}>LOGIN..</Text>    
                </Pressable> 
            </Box>
        </Box>
    )
}
export default RegisterScreen