import React, { useState, useEffect } from "react";
import axios from "axios";
import BeatSeqOneCard from "./BeatSeqOneCard"

const BeatSeqList = () => {
    const [activeList, setActiveList] = useState([]);
    const [dataReceived, setdataReceived] = useState(false);
    const userId = "user1" //hardcode first
    //const userId = sessionStorage.getItem("userId");

    useEffect(() => { //get the full list and filter the active ones
        //setdataReceived(false) //is this needed?
        axios
            .get(`/beatSequence/${userId}`)
            // .get(`/beatSequence/user1`)
            .then((response) => {
                console.log("axios ran and response is", response.data)
                //handle when only one result is returned and is an object -> fit it into an array
                const onlyActiveBeatSeq = response.data.filter(function (beatSeq) {
                    return beatSeq.status === "Active";
                });
                setActiveList(onlyActiveBeatSeq);
                setdataReceived(true);
            });
    }, [dataReceived]);//this works when refrest the page, maybe should change to running everytime someone click save button? so set state for save button?

    const dummyList = [//dummy playlist
        {
            _id: "A",
            name: "Alpha",
            createdAt: "test created at",
            updatedAt: "11-11-11"
        },
        {
            _id: "B",
            name: "Bravo",
            createdAt: "random",
            updatedAt: "22-22-22"
        },
        {
            _id: "C",
            name: "Charlie",
            createdAt: "22",
            updatedAt: "33-33-33"
        }]

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