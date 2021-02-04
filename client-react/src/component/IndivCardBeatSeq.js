
//show only the name
const IndivCardBeatSeq = (props) => {
    const bsName = props.name
    const bsUpdatedAt = props.bsUpdatedAt
    const bsId = props.id


    const handleSelectBeatSeqClick = (e, bsId) => {
        e.stopPropagation();
        console.log("selected a beatSeq")
        console.log("IndivCardBeatSeq e.target.id", e.target.id)
        console.log("bsId is", bsId)
        //need to feed the toggle upwards
        // props.onSelectLyricToggle(bsId)
    }

    return (
        <div id="" class="row no-gutters">

            <div class="col-10 py-1" id="">
                <div class="card-block px-2">
                    <button id=""
                        onClick={(e) => handleSelectBeatSeqClick(e, bsId)}>
                        <h6 class="card-title">{bsName}</h6>
                        <p class="card-text">
                            Last saved: {bsUpdatedAt}
                        </p>
                    </button>
                </div>
            </div>


            <div class="col-2 d-flex" id="">
                <button class="btn btn-info p-1 font-weight-bold w-100"
                    id=""
                // onClick={(e) => handleDeleteBeatSeqClick(e, lKey, lTitle, lArtist)}
                >
                    delete btn
            </button>
            </div>

        </div>

    )
}

export default IndivCardBeatSeq