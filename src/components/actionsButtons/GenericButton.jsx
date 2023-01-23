import Like from "./Like";
import SuperLike from "./SuperLike";
import Dislike from "./Dislike";

const GenericButton = ({type, moveToDisliked, moveToLiked, moveToSuperLiked}) => {
    switch(type) {
        case 'LIKE':
            return <Like moveToLiked={moveToLiked}></Like>
        case 'DISLIKE':
            return <Dislike moveToDisliked={moveToDisliked}></Dislike>
        case 'SUPERLIKE':
            return <SuperLike moveToSuperLiked={moveToSuperLiked}></SuperLike>
        default:
            return null
    }
}

export default GenericButton