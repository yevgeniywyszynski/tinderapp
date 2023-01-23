import { connect } from 'react-redux';
import GenericButton from './GenericButton';
import {addToLikedUsers, addToDislikedUsers, addToSuperLikedUsers } from '../../redux/usersRedux';

const mapDispatchToProps = (dispatch) => ({
    moveToLiked: () => dispatch(addToLikedUsers()),
    moveToDisliked: () => dispatch(addToDislikedUsers()),
    moveToSuperLiked: () => dispatch(addToSuperLikedUsers())
})

export default connect(null, mapDispatchToProps) (GenericButton);