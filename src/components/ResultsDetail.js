import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ item }) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: item.image_url }} />
      <Text style={styles.nameStyle}>{item.name}</Text>
      <Text>
        {item.rating} Stars | {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 280,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
