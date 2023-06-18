import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignUpScreen = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" onPress={() => navigate("MainFlow")} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
