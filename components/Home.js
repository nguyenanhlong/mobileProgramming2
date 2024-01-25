import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert } from 'react-native';
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
import Category from './categories/Category';

export default function Home({ navigation }) {
  const Separator = () => <View style={styles.separator} />;

  const navigateToProductDetail = (item) => {

    navigation.navigate('ProductDetail', { item });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.search}>
          <Search />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={styles.profileImage}
              source={{ uri: 'https://cdn3.iconfinder.com/data/icons/glyphicon/64/profil-circle-1024.png' }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.slider}>
          <Slider />
        </View>
        <View>
          <Category navigation={navigation} />
          <Separator />
        </View>
        <View>
          <Text style={styles.textnewproduct}>ALL PRODUCTS</Text>
          <Product navigateToProductDetail={navigateToProductDetail} />
          {/**
          <Text style={styles.textnewproduct}>TRANG SỨC</Text>
          <ProductJewelery navigateToProductDetail={navigateToProductDetail} />
          <Text style={styles.textnewproduct}>ĐIỆN TỬ</Text>
          <ProductElectronics navigateToProductDetail={navigateToProductDetail} />
          <Text style={styles.textnewproduct}>ĐỔ NAM</Text>
          <ProductMenClothing navigateToProductDetail={navigateToProductDetail} />
          <Text style={styles.textnewproduct}>ĐỔ NỮ</Text>
          <ProductWomenClothing navigateToProductDetail={navigateToProductDetail} />
           */}
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
  banner: {
    marginTop: 30,

  },

  search: {
    margin: 20,
    alignItems: "center",
    height: "auto",
    width: "75%",
    backgroundColor: "black",
    borderRadius: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 60,
    marginLeft: "83%",
    marginTop: -80,
    marginBottom: 20,

  },
  header: {},
  goback: {},
  textnewproduct: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: "red",
    textAlign: 'center'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },



});
