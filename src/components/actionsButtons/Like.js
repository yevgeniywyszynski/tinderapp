import React from 'react'

const Like = ({ moveToLiked }) => (
    <button
        type="button"
        onClick={moveToLiked}
        >
            <img src="images/misc/like.png" alt="Like User" />
    </button>
)

export default Like;