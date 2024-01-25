import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductRelay from './ProductRelay';

export default function ProductDetail({ route, navigation }) {
  const { item } = route.params;
  const handlePress = () => {
    alert("Thêm vào giỏ hàng thành công!");
  };
  const addToCart = async (product) => {
    try {
      const existingCart = await AsyncStorage.getItem("cart");
      let cart = existingCart ? JSON.parse(existingCart) : [];

      const existingProductIndex = cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += 1;
      } else {
        product.quantity = 1;
        cart.push(product);
      }
      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      alert("Thành công", "Thêm vào giỏ hàng thành công!");
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Header navigation={navigation} />
        </View>
        <View style={styles.image}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
        </View>

        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>Price: ${item.price}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productCategory}>Category: {item.category}</Text>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => addToCart(item)}
        >
          <Text style={styles.addToCartButtonText} >Add Cart</Text>
        </TouchableOpacity>
      </View>
      <ProductRelay category={item.category} id={item.id} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25,

  },
  image: {
    alignItems: "center"
  },
  productImage: {
    width: '100%',
    height: 200,
    aspectRatio: 1,
    resizeMode: 'center',
    marginBottom: 16,

  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,

  },
  productPrice: {
    fontSize: 18,
    color: 'red',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 16,

  },
  productCategory: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productRating: {
    fontSize: 16,
    color: 'orange',
  },
  ratingNumber: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
  ratingCount: {
    fontSize: 16,
    color: 'gray',
  },
  addToCartButton: {
    backgroundColor: '#3399FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});