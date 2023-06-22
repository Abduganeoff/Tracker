import React, { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input placeholder="Enter name" onChange={changeName} value={name} />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop Recording" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      {locations.length && !recording ? (
        <Spacer>
          <Button title="Save Recording" onPress={saveTrack} />
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;
