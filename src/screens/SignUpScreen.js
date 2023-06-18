import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignUpScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text style={{ fontSize: 48 }}>Sign Up Screen</Text>
      <Button title="Go to Sign in" onPress={() => navigate("Signin")} />
      <Button title="Go to Main Flow" onPress={() => navigate("MainFlow")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
