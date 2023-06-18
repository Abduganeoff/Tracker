import React from "react";
import Spacer from "./Spacer";
import { Text } from "react-native-elements";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavLink = ({ contentText, routeName }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{contentText}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default NavLink;
