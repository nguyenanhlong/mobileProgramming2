import { Box, Button, Heading, Image, Input, Pressable, Text, VStack } from "native-base";
import React from "react";
import Colors from "../color";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

function LoginScreen() {

    return (
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
                <Heading color="white">LOGIN</Heading>
                <VStack space={5} pt="6">
                     {/* email */}
                    <Input 
                    InputLeftElement={
                        <MaterialIcons name="email" size={20} color="white" />
                    }
                    variant="underlined" 
                    placeholder="user@gmail.com" 
                    w="70%" 
                    pl={2}
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
                    LOGIN
                </Button>
                <Pressable mt={4}>
                    <Text color={Colors.subgreen}>SIGN IN ?</Text>    
                </Pressable> 
            </Box>
        </Box>
    )
}
export default LoginScreen