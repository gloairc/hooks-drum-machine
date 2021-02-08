import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Tone from 'tone';
import axios from 'axios'

// import useBPM from './useBPM';
import BPMF from './BPMF';
import useStart from './useStart';
import StepContext from './StepContext';
import Transport from './Transport';
import StepSequencer from './StepSequencer';
import Fx from './FX';
import TitleField from './TitleField';
const jwt = require("jsonwebtoken");

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  background: linear-gradient(to bottom right, #222, #0a0a0a);
  border: 2px solid black;
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  flex: 1;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  padding: 0px 20px 10px;
  display: flex;
`;

const Logo = styled.h1`
  font-size: 28px;
  color: #25ccf7;
  font-family: 'Righteous', cursive;
  padding: 20px;
  margin: 0;
  text-transform: uppercase;
  display: inline-block;
`;

const config = {//default load
  tracks: ['Kick', 'Sub1', 'Sub2', 'Snare', 'Clap', 'HiHat', 'OpenHiHat'],
  samples: {
    Kick: process.env.PUBLIC_URL + '/sounds/kick.wav',
    Sub1: process.env.PUBLIC_URL + '/sounds/bass.wav',
    Sub2: process.env.PUBLIC_URL + '/sounds/sub.wav',
    Snare: process.env.PUBLIC_URL + '/sounds/snare.wav',
    Clap: process.env.PUBLIC_URL + '/sounds/clap.wav',
    HiHat: process.env.PUBLIC_URL + '/sounds/hat2.wav',
    OpenHiHat: process.env.PUBLIC_URL + '/sounds/openhihat.wav',
  },
};

const initialStepState = {
  //props.beatGrid.name : props.beatGrid.beatRow
  Kick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Sub1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Sub2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Snare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Clap: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  HiHat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  OpenHiHat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

export default function DrumMachine(props) {//set in retreivedSeq object useEffect?
  const [stepState, setSteps] = useState(initialStepState);
  const [buffers, setBuffers] = useState({});
  const [currentStep, setCurrentStepState] = useState(0);
  const [beatSeqName, setbeatSeqName] = useState("Untitled")

  const [start, startButton] = useStart();
  const [initialBpm, setInitialBpm] = useState(65) //run first round
  // console.log("outside initialBPM", initialBpm)
  // console.log("outside props.oneBeatSeq.tempo", props.oneBeatSeq.tempo)
  const [bpm, setBpm] = useState(initialBpm) //doesnt change when id change
  const [bpmPropsLoaded, setbpmPropsLoaded] = useState(false)

  const handlePropsLoadedStatus = (status) => {
    setbpmPropsLoaded(status)
    console.log("seeting bpmpropsloaded stats", status)
  }

  const [titleChange, setTitleChange] = useState(false)

  const handleBPMchange = (newBPM) => {//setBpm
    console.log("handleBPMchange outside", newBPM)
    setBpm(newBPM)
  }

  // const userId = localStorage.getItem('userId')
  const token = localStorage.getItem("token");
  const decoded = jwt.verify(token, "sei-26");//cant read secret :/
  const user = { userId: decoded.user._id, username: decoded.user.username }

  const buffersRef = useRef(buffers);
  buffersRef.current = buffers;
  const stepsRef = useRef(stepState);
  stepsRef.current = stepState;
  const currentStepRef = useRef(currentStep);
  currentStepRef.current = currentStep;
  // console.log("bpmPropsLoaded", bpmPropsLoaded)
  // console.log("props", props)
  useEffect(() => { //set beatGrid,name, tempo from saved seq
    setbpmPropsLoaded(false)
    console.log("useEffect to set initial state, beatseq name, tempo")
    if (Object.keys(props.oneBeatSeq).length !== 0) {//if props.oneBeatSeq is not empty
      if (props.oneBeatSeq.beatGrid.length === 0) {//if beatGrid is empty
        setSteps(initialStepState) //default {Kick:[], Snare:[]}, shouldn't be the case
      } else {
        setSteps(props.oneBeatSeq.beatGrid)
      }
      setbeatSeqName(props.oneBeatSeq.name)
      // load the tempo
      setInitialBpm(props.oneBeatSeq.tempo)
      console.log("setinitialBPM", props.oneBeatSeq.tempo)
      setbpmPropsLoaded(true)
    }
  }, [props.oneBeatSeq._id]) //re-render everytime params id changes


  useEffect(//playsound
    () => {
      Tone.Transport.scheduleRepeat(function (time) {
        Object.keys(buffersRef.current).forEach(b => {
          let targetStep = stepsRef.current[b][currentStepRef.current];
          let targetBuffer = buffersRef.current[b];

          if (targetStep === 1) {
            targetBuffer.start(time);
          } else if (targetStep === 2) {
            targetBuffer.start();
            targetBuffer.start('+64n');
            targetBuffer.start('+32n');
          }
        });

        setCurrentStepState(step => {
          return step > 14 ? 0 : step + 1;
        });
      }, '16n');
    },
    [config]
  );

  useEffect(//bpm
    () => {
      Tone.Transport.bpm.value = bpm;
    },
    [bpm]
  );

  useEffect(//start steps
    () => {
      if (start) {
        Tone.Transport.start();
      } else {
        Tone.Transport.stop();
        setCurrentStepState(0);
      }
    },
    [start]
  );

  const handleTitleChange = (newTitle) => {
    console.log("handleTitleChange in drummachine")
    setbeatSeqName(newTitle)
    setTitleChange(true)
  }

  useEffect(() => {
    if (titleChange === true) {
      handleSaveClick(); //then save it
      props.handleNameChange(true)
      console.log("DM, titlechange")
    }
    setTitleChange(false)  //after save, change to false
  }, [titleChange])

  const handleSaveClick = (e) => {//AXIOS PUT TO EDIT
    console.log("clicked save, to axios put")
    props.handleSave(false)
    const beatSetUp = {
      // userId: "user1", //{userId} from session storage
      username: user.username, //no need once we set up userId
      name: beatSeqName,
      tempo: bpm,
      beatGrid: stepState,
    }
    console.log("beatSetUp", beatSetUp)
    console.log(stepState)
    axios
      .put(`/api/beatSequence/${props.oneBeatSeq._id}/edit`, beatSetUp)
      .then((response) => {
        console.log("put to MongoDB", response.data)
        props.handleSave(true)
      })
      .catch((error) => {
        console.log("error", error);
        console.log("error response", error.response.data.error);
      });
    console.log("after axios");
    //also need newplaylist name to appear in the list
  }

  return (
    <StepContext.Provider value={{ state: stepState, setSteps }}>
      <Container>
        <Transport>
          {/* <Logo>{beatSeqName}</Logo> */}
          <Logo> <TitleField title={beatSeqName} handleTitleChange={handleTitleChange} /></Logo>
          <Logo>BPM</Logo><BPMF initalBPM={initialBpm} handleBPMchange={handleBPMchange} propsLoaded={bpmPropsLoaded} handlePropsLoadedStatus={handlePropsLoadedStatus} />
          {startButton}
        </Transport>
        <React.Suspense fallback={<p>loading</p>}>
          <StepSequencer
            config={config}
            currentStep={currentStepRef.current}
            playing={start}
            setBuffers={setBuffers}
          />
          <ButtonContainer>
            <Fx sound={process.env.PUBLIC_URL + "/sounds/loop.wav"} title="Turn Up (F)" />
            <Fx sound={process.env.PUBLIC_URL + "/sounds/loop130.wav"} title="SQUAD (Am)" />
            <Fx sound={process.env.PUBLIC_URL + "/sounds/hey.wav"} title="Hey" />
            <Fx sound={process.env.PUBLIC_URL + "/sounds/yeah.wav"} title="Yeah" />
          </ButtonContainer>
        </React.Suspense>
        <div>

          <button
            onClick={(e) => handleSaveClick(e)}>
            Save</button>

        </div>
      </Container>
    </StepContext.Provider>
  );
}
