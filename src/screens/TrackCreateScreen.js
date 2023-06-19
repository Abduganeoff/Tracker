import React, { useEffect, useState } from "react";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { requestForegroundPermissionsAsync } from "expo-location";
import Map from "../components/Map";
import "../_mockLocation";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    startWatching();
  }, []);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };

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
