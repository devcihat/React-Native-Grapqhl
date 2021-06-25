import React, { useContext, useEffect } from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import { AuthContext } from "../utils";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_COIN_LIST } from "../graphql/Queries";
import ListItem from "../components/ListItem";
import Animated from "react-native-reanimated";

export const HomeScreen = (props) => {
  const { signOut } = useContext(AuthContext);

  const { loading, data } = useQuery(FETCH_COIN_LIST);
  useEffect(() => {
    console.log("dassaads", data);
  }, []);
  // ...
  if (loading && !data) {
    return (
      <View style={styles.loadingIndicatorContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  // const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  // const y = new Animated.Value(0);
  // const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
  //   useNativeDriver: true,
  // });
  // const translateY = Animated.add(y,y.interpolate({
  //   inputRange:[0,0.0001 + 30 ],
  //   outputRange:[0,50],
  //   extrapolateRight:'clamp'
  // }))
  return (
    <View style={styles.container}>
      <FlatList
      scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainerStyle}
        data={data.coinsList.Data}
        keyExtractor={(item) => item.CoinInfo.Id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem
              coin={item}
              onPress={() =>
                props.navigation.navigate("CoinDetail", { coin: item })
              }
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingIndicatorContainer: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
});
