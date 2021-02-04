import React from 'react';
import DrumMachine from '../component/hypebeats/DrumMachine'
import BeatSeqColumn from '../component/BeatSeqColumn'
const BeatSeq = () => {

    return (
        <div>
            <h1>Beat Sequencer</h1>
            <div>
                <BeatSeqColumn />
            </div>
            <div>
                <DrumMachine />
            </div>
        </div>
    )
}

export default BeatSeq