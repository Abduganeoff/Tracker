import { useContext, useState, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { useFocusEffect } from "@react-navigation/native";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const { clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useFocusEffect(
    useCallback(() => {
      return () => clearErrorMessage();
    }, [])
  );

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  inputStyle: {
    textTransform: "none",
  },
});

export default AuthForm;
