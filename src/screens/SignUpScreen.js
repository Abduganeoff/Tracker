import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = () => {
  const { navigate } = useNavigation();
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        errorMessage={state.errorMessage}
        headerText="Sign Up for Tracker"
        submitButtonText="Sign Up"
        onSubmit={signUp}
      />
      <NavLink
        routeName="SignIn"
        contentText="Already have an account? Sign in instead!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SignUpScreen;
