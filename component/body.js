import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";

const Body = () => {

  return (
    <View>
      <ImageSlider
        data={[
          { img: 'https://animota.net/cdn/shop/files/TOP_banner_04_6db5e85b-d8fe-4973-939e-703a5e2aa852.png?v=1696584429' },
          { img: 'https://animota.net/cdn/shop/files/TOP_banner_01.png?v=1693440492' },
          { img: 'https://animota.net/cdn/shop/files/TOP_banner_02.png?v=1693440515' }
        ]}
        autoPlay={false}
        onItemChanged={(item) => console.log("item", item)}
        closeIconColor="#fff"
      />
      <SafeAreaView
        style={styles.view}>
          <Text>Product</Text>
      </SafeAreaView>

    </View>

  );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    flex: 1,
    justifyContent: "center"
  },
  body: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    padding: 10,
  },
  tinyLogo: {
    width: '100%',
    height: 100,

    justifyContent: "center"
  },
});

export default Body;