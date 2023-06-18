import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text style={{ fontSize: 48 }}>Track List Screen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
