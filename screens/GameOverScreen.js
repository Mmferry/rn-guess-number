import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/success.png")}
        style={styles.img}
        resizeMode="cover"
      />
      <TitleText>The Game is over</TitleText>
      <View style={styles.textContainer}>
        <BodyText style={styles.textResult}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  textContainer: {
    marginVertical: 10,
    marginHorizontal: 40
  },
  textResult: {
    textAlign: "center",
    lineHeight: 22
  },
});

export default GameOverScreen;
