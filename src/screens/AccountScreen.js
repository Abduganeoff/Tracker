import React, { useContext } from "react";
import { Button, Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={styles.text} h1>
        Account Server
      </Text>
      <Spacer>
        <Button title="Sign Out" onPress={signOut} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default AccountScreen;
