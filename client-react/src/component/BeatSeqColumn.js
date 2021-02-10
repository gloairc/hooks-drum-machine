import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import BeatSeqList from "./BeatSeqList";
const jwt = require("jsonwebtoken");

const BeatSeqColumn = (props) => {
  const [machineCreated, setMachineCreated] = useState(false);
  const [newMachineId, setNewMachineId] = useState("");
  const history = useHistory();
  const beatseqId = useParams().id;
  const token = localStorage.getItem("token");
  const decoded = jwt.verify(token, "sei-26"); //cant read secret :/
  const user = { userId: decoded.user._id, username: decoded.user.username };

  const handleAddMachineClick = () => {
    setMachineCreated(false); //so that can add again
    console.log("add new machine");
    const newMachineUser = {
      // username: user.username
      userId: user.userId,
    };

    axios
      .post("/api/beatSequence", newMachineUser)
      .then((response) => {
        console.log("posted a new machine to MongoDB", response);
        //get the new object_id
        setNewMachineId(response.data._id);
        setMachineCreated(true);
      })
      .catch((error) => {
        console.log("add new machine error/error", error);
        // console.log("add new machine error/response", error.response.data.error);
      });
  };

  useEffect(() => {
    //runs once when just log in
    const tempbeatseq = JSON.parse(localStorage.getItem("tempbeatseq"));

    if (
      (beatseqId === undefined && tempbeatseq !== null) ||
      (beatseqId === "" && tempbeatseq !== null)
    ) {
      //log in
      //add new machine with tempbeatseq
      const newMachineUser = {
        // username: user.username
        ...tempbeatseq,
        userId: user.userId,
      };
      axios
        .post("/api/beatSequence", newMachineUser)
        .then((response) => {
          //remove localStorage
          localStorage.removeItem("tempbeatseq");
          console.log(
            "posted a new machine to MongoDB from localStorage",
            response
          );
          //get the new object_id
          setNewMachineId(response.data._id);
          setMachineCreated(true);
        })
        .catch((error) => {
          console.log("add new machine error/error", error);
          // console.log("add new machine error/response", error.response.data.error);
        });
    }
  }); // runs once

  useEffect(() => {
    if (machineCreated === true) {
      return history.push(`/beatseq/${newMachineId}`);
    }
    // setMachineCreated(false);
  }, [machineCreated]);

  return (
    <div id="beatSeqComponent">
      beatSeqColumn
      <BeatSeqList
        newMachineCreated={machineCreated}
        nameChange={props.nameChange}
        saved={props.saved}
        user={user}
      />
      <button onClick={() => handleAddMachineClick()}>Add</button>
    </div>
  );
};

export default BeatSeqColumn;
