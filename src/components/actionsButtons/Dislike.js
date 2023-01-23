import React from 'react'

const Dislike = ({ moveToDisliked }) => {
    
    return(
        <button
            type="button"
            onClick={moveToDisliked}
            >
                <img src="images/misc/dislike.png" alt="Dislike User" />
        </button>
    )
}

export default Dislike;