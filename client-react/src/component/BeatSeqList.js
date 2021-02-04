import React, { useState, useEffect } from "react";
import axios from "axios";
import IndivCardBeatSeq from "./IndivCardBeatSeq"

const BeatSeqList = () => {
    const [activeList, setActiveList] = useState([]);
    const [dataReceived, setdataReceived] = useState(false);
    //how to send the userId

    useEffect(() => { //get the full list and filter the active ones
        axios
            .get(`/api/beatSequence/:userId`)
            .then((response) => {
                console.log("axios ran and response is", response)
                const onlyActiveBeatSeq = response.data.filter(function (beatSeq) {
                    return beatSeq.status === "active";
                });
                setActiveList(onlyActiveBeatSeq);
                setdataReceived(true);
            });
    }, [dataReceived]);

    const renderListCards = () => {
        console.log("rendering listcards");
        //handle if nothing in database
        return (
            activeList.map((oneBeatSeq, index) => (
                <div key={index}>
                    <IndivCardBeatSeq
                        id={oneBeatSeq._id}
                        name={oneBeatSeq.name}
                        createdAt={oneBeatSeq.createdAt}
                        updatedAt={oneBeatSeq.updatedAt}
                    />
                </div>
            ))
        )
    }

    return (
        <div>Hellow
            {renderListCards}
        </div>
    )
}

export default BeatSeqList