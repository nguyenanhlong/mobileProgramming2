import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from './Footer';
import Header from './Header';
import Product from './products/Product';
import ProductJewelery from './products/ProductJewelery';
import ProductElectronics from './products/ProductElectronics';
import ProductMenClothing from './products/ProductMenClothing';
import ProductWomenClothing from './products/ProductWomenClothing';
import Search from './products/Search';
import Slider from './products/Slider';

export default function Home({ navigation }) {
  const navigateToProductDetail = (item) => {
   
    navigation.navigate('ProductDetail', { item });
  };
  return (
    <View style={styles.container}>
     <ScrollView>
        <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.slider}>
        <Slider />
      </View>    
        <View>
          <Text style={styles.textnewproduct}>All Products</Text>
          <Product navigateToProductDetail={navigateToProductDetail} />
          <Text style={styles.textnewproduct}>TRANG SỨC</Text>
          <ProductJewelery navigateToProductDetail={navigateToProductDetail} />
          <Text style={styles.textnewproduct}>ĐIỆN TỬ</Text>
          <ProductElectronics navigateToProductDetail={navigateToProductDetail} />
          <Text style={styles.textnewproduct}>ĐỔ NAM</Text>
          <ProductMenClothing navigateToProductDetail={navigateToProductDetail} />
          <Text style={styles.textnewproduct}>ĐỔ NỮ</Text>
          <ProductWomenClothing navigateToProductDetail={navigateToProductDetail} />
          
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Footer navigation={navigation} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
   
  },

  footer: {
    justifyContent: 'flex-end',
  },
  banner:{
    marginTop:30,

  },
  search:{
    marginTop:15
  },
  header: {},
  goback:{},
  textnewproduct:{
   marginTop:20,
   marginBottom:10,
   fontSize:20,
   fontWeight: 'bold',
   color:"red",
   textAlign:'center'
  },

  
  
});
