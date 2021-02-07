import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import BeatSeqList from './BeatSeqList'
const BeatSeqColumn = (props) => {
    const [machineCreated, setMachineCreated] = useState(false)
    const [newMachineId, setNewMachineId] = useState("")
    // const userId = sessionStorage.getItem("userId");
    const username = sessionStorage.getItem("username");
    const history = useHistory()

    const handleAddMachineClick = () => {
        setMachineCreated(false);
        console.log("add new machine");
        const newMachineUser = { //need to fix here
            username: username
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
            <BeatSeqList newMachineCreated={machineCreated} nameChange={props.nameChange} saved={props.saved} />
            {/* above doesnt seem to work, probably need useEffect */}

            <button
                onClick={() => handleAddMachineClick()}
            >Add</button>
        </div>
    )
}

export default BeatSeqColumn