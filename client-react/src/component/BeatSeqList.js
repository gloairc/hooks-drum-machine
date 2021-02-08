import React, { useState, useEffect } from "react";
import axios from "axios";
import BeatSeqOneCard from "./BeatSeqOneCard"

const BeatSeqList = (props) => {
    const [activeList, setActiveList] = useState([]);
    const [dataReceived, setdataReceived] = useState(false);
    // const userId = "601ff16499a7774380ea4248" //hardcode first
    // const userId = sessionStorage.getItem("userId");
    const username = sessionStorage.getItem("username");

    console.log("newmachineprops", props.newMachineCreated) //not always true
    console.log("nameChange", props.nameChange)
    console.log("saved", props.saved)
    useEffect(() => { //get the full list and filter the active ones
        setdataReceived(false) //is this needed?
        console.log("getting playlist for user", username)
        axios
            // .get(`/api/beatSequence/user/${userId}`)
            .get(`/api/beatSequence/user/${username}`)
            .then((response) => {
                console.log("axios ran and response is", response.data)
                //handle when only one result is returned and is an object -> fit it into an array
                if (Array.isArray(response.data) === false) {// object cause only one result
                    const onlyActiveBeatSeq = [response.data].filter(function (beatSeq) {
                        return beatSeq.status === "Active";
                    });
                    setActiveList(onlyActiveBeatSeq);
                    setdataReceived(true);
                } else {// multiple result in an array
                    const onlyActiveBeatSeq = response.data.filter(function (beatSeq) {
                        return beatSeq.status === "Active";
                    });
                    setActiveList(onlyActiveBeatSeq);
                    setdataReceived(true);
                }
            }
            );
    }, [props.newMachineCreated, props.nameChange, props.saved]); //should also render everytime change name, save, new machine

    const noList = (//inform no list, start by clicking add button
        <div>
            <p class="pt-2">You don't have a playlist, start one by clicking the add button below</p>
        </div>
    )

    const renderListCards = () => {
        console.log("rendering listcards");
        return (
            activeList.map((oneBeatSeq, index) => (
                <div key={index}>
                    <BeatSeqOneCard
                        id={oneBeatSeq._id}
                        name={oneBeatSeq.name}
                        createdAt={oneBeatSeq.createdAt}
                        updatedAt={oneBeatSeq.updatedAt}
                    />
                </div>
            ))
        )
    }

    const renderBeatSeqList = (activeList.length === 0) ? noList : renderListCards()
    return (
        <div id="beatseqlist">
            beatseqlist
            {renderBeatSeqList}
        </div>
    )
}

export default BeatSeqList