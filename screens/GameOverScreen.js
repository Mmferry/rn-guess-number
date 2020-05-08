import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/success.png")}
        style={styles.img}
        resizeMode="cover"
      />
      <TitleText>The Game is over</TitleText>
      <BodyText>Number of rounds: {props.roundNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
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
  },
});

export default GameOverScreen;
