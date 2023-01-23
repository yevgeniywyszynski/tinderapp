import React from 'react'

const SuperLike = ({ moveToSuperLiked }) => (
    <button
        type="button"
        onClick={moveToSuperLiked}
        >
            <img src="images/misc/superlike.png" alt="SuperLike User" />
    </button>
)

export default SuperLike;