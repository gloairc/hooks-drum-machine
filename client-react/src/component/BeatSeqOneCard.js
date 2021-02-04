import { Link } from "react-router-dom"
//show only the name
const BeatSeqOneCard = (props) => {
    const bsName = props.name
    const bsUpdatedAt = props.updatedAt
    const bsId = props.id


    const handleSelectBeatSeqClick = (e, bsId) => {
        e.stopPropagation();
        console.log("selected a beatSeq", bsId)
    }

    const handleDeleteBeatSeqClick = (e) => {
        e.stopPropagation();
        console.log("deleted beatSeq", bsId)
        //axios here
    }

    return (
        <div id="beatseqonecard" class="row no-gutters">
            beatseqonecard
            {/* <div class="col-3 py-1" id=""> */}
            <div class="card-block px-2" id="onecardcard">
                <div class="col-3 py-1" id="">
                    <Link to={`/beatseq/${bsId}`}
                        id="" class="btn btn-light p-1"
                        onClick={(e) => handleSelectBeatSeqClick(e, bsId)}>
                        <h6 class="card-title">{bsName}</h6>
                        <p class="card-text">
                            Last saved: {bsUpdatedAt}
                        </p>
                    </ Link>
                </div>
                cardblock
            </div>


            <div class="col-2 d-flex" id="">
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