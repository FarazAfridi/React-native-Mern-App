import React from "react";
import { View, StyleSheet, Button } from "react-native";

const LoginPage = (props) => {
  return (
    <View>
      <Button title="Login" onPress={() => props.navigation.navigate("Home")} />
    </View>
  );
};

export default LoginPage;
