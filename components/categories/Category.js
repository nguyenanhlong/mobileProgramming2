import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function Category({navigation}) {
  const [categories, setCategories] = useState([]);
  
  
  useEffect(() => {
    getDataUsingSimpleGetCall();
  }, []);

  const getDataUsingSimpleGetCall =  () => {
     axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        console.log("Finally called");
      });
  };

  const HandlePress = (category) => {
    navigation.navigate("ProductByCat",{category, navigation});
  }

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      {categories.map((category, index) => (
        <TouchableOpacity key={index} onPress={()=>HandlePress(category)}>
          <Text
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "black",
              fontSize: 19,
              margin: 10,
              borderRadius: 10,
            }}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default Category;