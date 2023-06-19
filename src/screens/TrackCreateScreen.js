import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import "../_mockLocation";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>Track Create Screen</Text>
      <Map />
      {err ? (
        <Text style={{ color: "red" }}>Please enable location services</Text>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
