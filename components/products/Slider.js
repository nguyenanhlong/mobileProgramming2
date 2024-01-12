import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Slider = () => {
  const slider = [
    { id: 1, name: 'Sản phẩm 1', image: require('../../assets/images/product3.png') },
    { id: 2, name: 'Sản phẩm 2', image: require('../../assets/images/product2.png') },
    { id: 3, name: 'Sản phẩm 3', image: require('../../assets/images/product1.png') },
    // Thêm các sản phẩm khác tùy ý
  ];

  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.productItem}>
        <Image source={item.image} style={styles.productImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={slider}
        renderItem={renderProductItem}
        sliderWidth={400}
        itemWidth={370}
        loop={true}
        layout="default"
        autoplay={true}
        autoplayInterval={3000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  productItem: {
    flex: 1,
    alignItems: 'center',
  },
  productImage: {
    width: 370,
    height: 200,
    borderRadius: 10,
  },
});

export default Slider;