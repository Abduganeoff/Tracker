import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        inputStyle={styles.inputStyle}
      />
      <Spacer />
      <Input
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        inputStyle={styles.inputStyle}
      />
      <Spacer>
        <Button title="Sign Up" onPress={() => navigate("MainFlow")} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  inputStyle: {
    textTransform: "none",
  },
});

export default SignUpScreen;
