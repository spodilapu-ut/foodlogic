import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (result == null) return result;
  return (
    <>
      <Text style={styles.headerStyle}>{result.name}</Text>
      <Text style={styles.metaStyle}>{result.phone}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      ></FlatList>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 150,
    marginBottom: 10,
    marginLeft: 15,
  },
  headerStyle: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
  metaStyle: {
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default ResultsShowScreen;
