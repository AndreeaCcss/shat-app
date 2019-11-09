import React, { Component } from "react";
import { View } from "react-native";

import styles from "./App.styles";
import ShatApp from "./ShatApp";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ShatApp />
      </View>
    );
  }
}
