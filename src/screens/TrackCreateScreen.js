import React, { useCallback, useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { Context as LocationContext } from "../context/LocationContext";
import "../_mockLocation";

const TrackCreateScreen = () => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const [isFocused, setIsFocused] = useState(false);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);
  
  useFocusEffect(
    React.useCallback(() => {
      setIsFocused(true);
      return () => {
        setIsFocused(false);
      };
    }, [])
  );

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>Track Create Screen</Text>
      <Map />
      {err ? (
        <Text style={{ color: "red" }}>Please enable location services</Text>
      ) : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
