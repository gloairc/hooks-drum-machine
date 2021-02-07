import React, { useState } from 'react';
import styled from 'styled-components';

//BPM component
const BPM = styled.input`
  color: #25ccf7;
  border: 2px solid #25ccf7;
  font-size: 18px;
  background: none;
  padding: 10px;
  font-family: 'Righteous', cursive;
  border-radius: 2;
  margin: 2px 4px;
  margin-right: 20px;
  align-self: center;
`;

export default function useBPM(initialBpm) {// passed initialBpm =65
  const [bpm, set] = useState(initialBpm); //set state to initalBpm
  //if initialBpm is undefined, useState(65)
  const setBpm = e => set(e.target.value); //setBpm is a function that set bpm value based on front end

  console.log("accessed into useBPM bpm", bpm)
  return [
    bpm,
    <BPM type="number" value={bpm} min="60" max="180" onChange={setBpm} />,
  ];
}
