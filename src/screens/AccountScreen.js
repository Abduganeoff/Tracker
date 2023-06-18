import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View>
      <Text style={styles.text} h1>
        Account Server
      </Text>
      <Spacer>
        <Button title="Sign Out" onPress={signOut} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default AccountScreen;
