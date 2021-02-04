import BeatSeqList from './BeatSeqList'
const BeatSeqColumn = () => {

    const handleAddMachineClick = () => {
        console.log("add new machine")
    }

    return (
        <div id="beatSeqCol">
            beatSeqColumn
            <BeatSeqList />

            <button
                onClick={() => handleAddMachineClick()}
            >Add</button>
        </div>
    )
}

export default BeatSeqColumn