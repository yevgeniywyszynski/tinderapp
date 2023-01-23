import { connect } from 'react-redux';
import App from './App';
import { getMyLikedUsers, getActiveUser, getMySuperLikedUsers, getNext} from '../../redux/usersRedux';

const mapStateToProps = (state) => ({
    getNext: getNext(state),
    myLikedUsers: getMyLikedUsers(state),
    activeUser: getActiveUser(state),
    mySuperLikedUsers: getMySuperLikedUsers(state)
})

export default connect(mapStateToProps, null) (App);