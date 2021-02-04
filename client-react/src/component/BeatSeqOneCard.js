
//show only the name
const BeatSeqOneCard = (props) => {
    const bsName = props.name
    const bsUpdatedAt = props.updatedAt
    const bsId = props.id


    const handleSelectBeatSeqClick = (e, bsId) => {
        e.stopPropagation();
        console.log("selected a beatSeq", bsId)
        //need to feed the toggle upwards
        // props.onSelectLyricToggle(bsId)
    }

    const handleDeleteBeatSeqClick = (e) => {
        e.stopPropagation();
        console.log("deleted beatSeq", bsId)
    }

    return (
        <div id="beatseqonecard" class="row no-gutters">
            beatseqonecard
            {/* <div class="col-3 py-1" id=""> */}
            <div class="card-block px-2" id="onecardcard">
                cardblock
                <div class="col-3 py-1" id="">
                    <button id="" class="btn btn-light p-1"
                        onClick={(e) => handleSelectBeatSeqClick(e, bsId)}>
                        <h6 class="card-title">{bsName}</h6>
                        <p class="card-text">
                            Last saved: {bsUpdatedAt}
                        </p>
                    </button>
                </div>
            </div>


            <div class="col-1 d-flex" id="">
                <button class="btn btn-info p-1 font-weight-bold w-100"
                    id=""
                    onClick={(e) => handleDeleteBeatSeqClick(e, bsId)}
                >
                    delete btn
            </button>
            </div>

        </div>

    )
}

export default BeatSeqOneCard