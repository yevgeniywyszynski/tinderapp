const reducerName = 'users';

export const getActiveUser = ({users}) => {
    return users.find( user => user.isActive);
}

export const getMyLikedUsers = ({users}) => {
    const me = users.find( user => user.isActive);
    return me.likedUsers
}

export const getMySuperLikedUsers = ({users}) => {
    const me = users.find( user => user.isActive); 
    return me.superLikedUsers
}

export const getMyDisLikedUsers = ({users}) => {
    const me = users.find( user => user.isActive); 
    return me.dislikedUsers;
}

export const getNext = ({users}) => {
    return users.find(user => !user.isActive)
}

const createActionName = name => `app/${reducerName}/${name}`;

const ADD_TO_LIKED_USERS = createActionName('ADD_TO_LIKED_USERS');
export const addToLikedUsers = payload => ({ payload, type: ADD_TO_LIKED_USERS });

const ADD_TO_DISLIKED_USERS = createActionName('ADD_TO_DISLIKED_USERS');
export const addToDislikedUsers = payload => ({ payload, type: ADD_TO_DISLIKED_USERS });

const ADD_TO_SUPERLIKED_USERS = createActionName('ADD_TO_SUPERLIKED_USERS');
export const addToSuperLikedUsers = payload => ({ payload, type: ADD_TO_SUPERLIKED_USERS});

export default function reducer(statePart = [], action = {}) {
    switch(action.type) {
        case ADD_TO_LIKED_USERS:
            const toMove = statePart.find(user => !user.isActive)
            let resultLiked = [...statePart]
            const activeUserLike = statePart.find( user => user.isActive);
            activeUserLike.likedUsers.push(toMove)
            resultLiked = resultLiked.filter(user => user.id !== toMove.id)
            return resultLiked;
        case ADD_TO_DISLIKED_USERS:
            const toMoveNextDisliked = statePart.find(user => !user.isActive)
            let resultDisliked = [...statePart]
            const activeUserDisliked = statePart.find(user => user.isActive)
            activeUserDisliked.dislikedUsers.push(toMoveNextDisliked)
            resultDisliked = resultDisliked.filter( user => user.id !== toMoveNextDisliked.id)
            return resultDisliked;
        case ADD_TO_SUPERLIKED_USERS:
            let toMoveSuperLiked = statePart.find(user => !user.isActive)
            let resultSuperLiked = [...statePart]
            const activeSuperLiked = statePart.find(user => user.isActive)
            activeSuperLiked.superLikedUsers.push(toMoveSuperLiked)
            resultSuperLiked = resultSuperLiked.filter(user => user.id !== toMoveSuperLiked.id)
            return resultSuperLiked
        default:
            return statePart
        }
}