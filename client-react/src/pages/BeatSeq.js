import React from 'react';
import DrumMachine from '../component/hypebeats/DrumMachine'
import BeatSeqColumn from '../component/BeatSeqColumn'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const BeatSeq = () => {
    const beatseqId = useParams().id
    console.log("beatseqId from params is", beatseqId)

    const [retrievedSeq, setRetrievedSeq] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {//trigger whether there is id or not
        console.log("do Axios GET beatseqid")
        axios
            .get(`/api/beatSequence/${beatseqId}`)
            .then((response) => {//setRetrievedSeq
                console.log("set retrieved seq axios reponse", response)
                console.log("axios reponse.data & retrievedseq is", response.data)
                if (response.data.length === 1) {
                    setRetrievedSeq((response.data)[0])
                    setIsLoading(false)
                }
                else {
                    console.log("length of response.data is not 1")
                }
            })
            .catch((error) => {
                console.log("BeatSeq axios error", error)
            })
    }, [beatseqId])

    if (beatseqId === undefined || beatseqId === "") {//only beatseqcol & empty box
        return (
            <div>
                <h1>Beat Sequencer</h1>
                <div>
                    <BeatSeqColumn />
                </div>
                <div>
                    Choose from playlist to load the beat sequencer
                </div>
            </div>
        )
    }

    else {// have id, axios get and drum machine
        console.log("retrievedSeq", retrievedSeq)
        return (
            <div>
                <h1>Beat Sequencer</h1>
                <div>
                    <BeatSeqColumn />
                </div>
                <div>
                    <DrumMachine
                        oneBeatSeq={retrievedSeq} />
                </div>
            </div>
        )
    }
}

export default BeatSeq