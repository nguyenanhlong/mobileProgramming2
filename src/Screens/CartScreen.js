import { Box, Center, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../color";
import CartEmpty from "../../component/CartEmpty";
import CartItem from "../../component/CartItems";


function CartScreen() {
    return ( 
        <Box flex={1} safeAreaTop bg={Colors.subgreen}>
            {/** header */}
            <Center>
                <Text color={Colors.black} fontSize={20} bold> Cart</Text>
            </Center>
            {/** IF CART EMPTY
            <CartEmpty/>*/}
            {/** CART ITEM */}
            <CartItem/>
        </Box>
     );
}

export default CartScreen;