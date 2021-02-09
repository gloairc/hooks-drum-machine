import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import BeatSeqList from './BeatSeqList'
const jwt = require("jsonwebtoken");

const BeatSeqColumn = (props) => {
    const [machineCreated, setMachineCreated] = useState(false)
    const [newMachineId, setNewMachineId] = useState("")
    // const userId = localStorage.getItem("userId");
    // console.log("props at beatseqcol", props)
    // const username = props.user.username
    const history = useHistory()
    const token = localStorage.getItem("token");
    const decoded = jwt.verify(token, "sei-26");//cant read secret :/
    const user = { userId: decoded.user._id, username: decoded.user.username }

    const handleAddMachineClick = () => {
        setMachineCreated(false);
        console.log("add new machine");
        const newMachineUser = { //need to fix here
            username: user.username
        };
        axios
            .post("/api/beatSequence", newMachineUser)
            .then((response) => {
                console.log("posted a new machine to MongoDB", response)
                //get the new object_id
                setNewMachineId(response.data._id);
                setMachineCreated(true);
            })
            .catch((error) => {
                console.log("add new machine error/error", error);
                // console.log("add new machine error/response", error.response.data.error);
            });
    }

    useEffect(() => {
        if (machineCreated === true) {
            return history.push(`/beatseq/${newMachineId}`);
        }
        setMachineCreated(false)
    }, [machineCreated])

    return (
        <div id="beatSeqCol">
            beatSeqColumn
            <BeatSeqList newMachineCreated={machineCreated} nameChange={props.nameChange} saved={props.saved} user={user} />

            <button
                onClick={() => handleAddMachineClick()}
            >Add</button>
        </div>
    )
}

export default BeatSeqColumn