import { Box } from "native-base";
import Colors from "../color";
import HomeSearch from "../../component/HomeSearch";
import HomeProducts from "../../component/HomeProducts";

function HomeScreen() {
    return ( 
        <Box flex={1} bg={Colors.subgreen}>
            <HomeSearch/>
            <HomeProducts/>
        </Box>
     );
}

export default HomeScreen;