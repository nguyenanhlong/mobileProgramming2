import { NativeBaseProvider } from 'native-base';
//import RegisterScreen from './src/Screens/RegisterScreen';
//import NotVerfiyScreen from './src/Screens/NotVerfiyScreen';
//import HomeScreen from './src/Screens/HomeScreen';
//import SingleProduct from './src/Screens/SingleProductScreen';
import CartScreen from './src/Screens/CartScreen';
//import LoginScreen from './src/Screens/LoginScreen';



export default function App() {
  return (
    <NativeBaseProvider>
        <CartScreen/>
    </NativeBaseProvider>
  );
}

