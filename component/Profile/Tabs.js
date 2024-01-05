import { Text, View } from "native-base";
import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabBar } from "react-native-tab-view";
import Profile from "./Profile";
import Orders from "./Orders";
import Colors from "../../src/color";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "second",
      title: "ORDERS",
    },
  ]);
  const renderTabsBar = (props) => (
    <TabBar {...props} tabStyle={styles.tabStyle} indicatorStyle={{backgroundColor:Colors.black}}
    activeColor={Colors.main} inactiveColor={Colors.black}
  )
  return (
    <View>
      <Text>Tabs</Text>
    </View>
  );
}
