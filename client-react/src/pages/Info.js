import React from "react";
import DrumMachine from "../component/hypebeats/DrumMachine";

const Info = () => {
  const disabled = false;
  return (
    <>
      <h1>Info Help Page</h1>
      <div disabled={disabled}>
        <DrumMachine />
      </div>
    </>
  );
};

export default Info;
