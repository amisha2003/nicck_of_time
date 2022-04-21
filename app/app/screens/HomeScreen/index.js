import React from "react";
import { View, Text } from "react-native";
import OptionCard from "../../components/OptionCard";
import { StyleSheet } from "react-native";
import styles from "./styles";
const HomeScreen = ({ navigation }) => {
  const moveToKeyScreen = () => {
    navigation.navigate("Key");
  };

  const moveToSubmitScreen = () => {
    navigation.navigate("Submit");
  };

  return (
    <>
      <Text style={styless.temp}>NICK OF TIME</Text>
      <View style={styles.container}>
        <OptionCard
          label="Create Key"
          onPressFunc={moveToKeyScreen}
          bgColor="#FFCE4B"
          circColor="#FF824A"
          labelColor="#BC751B"
        />
        <OptionCard
          label="Submit PDF"
          onPressFunc={moveToSubmitScreen}
          bgColor="#754F9D"
          circColor="#54218B"
          labelColor="#F2ECF6"
        />
      </View>
    </>
  );
};
const styless = StyleSheet.create({
  temp: {
    marginTop: 150,
    paddingLeft: 100,
    textTransform: "uppercase",

    color: "#b34d80",
    fontFamily: "'Anton', Arial, sans-serif",

    fontSize: 30,
    backgroundColor: "#ccccff",
  },
});

export default HomeScreen;
