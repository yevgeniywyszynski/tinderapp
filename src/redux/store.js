import { applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunk from 'redux-thunk';
import usersRedux from './usersRedux';

const initalState = {
    users: [
      {
        "id": 0,
        "name": "Yevgeniy",
        "desc": "Developer",
        "age": 32,
        "city": "Warsaw",
        "image": "1.jpg",
        "isActive": true,
        "likedUsers": [],
        "superLikedUsers": [],
        "dislikedUsers": [],
        "likedBy": [],
        "verified": "badge.png"
      },
      {
        "id": 1,
        "name": "Joana",
        "desc": "Model",
        "age": 38,
        "city": "Warsaw",
        "image": "2.jpg",
        "isActive": false,
        "likedUsers": [],
        "superLikedUsers": [],
        "dislikedUsers": [],
        "likedBy": [],
        "verified": "badge.png"
      },
      {
        "id": 2,
        "name": "Ilona",
        "desc": "ADHD",
        "age": 32,
        "isActive": false,
        "city": "Łódz",
        "image": "3.jpg",
        "likedUsers": [],
        "superLikedUsers": [],
        "dislikedUsers": [],
        "likedBy": [],
        "verified": "badge.png"
      },
      {
        "id": 3,
        "name": "Kamil",
        "desc": "Manager",
        "age": 36,
        "isActive": false,
        "city": "Warsaw",
        "image": "4.jpg",
        "likedUsers": [],
        "superLikedUsers": [],
        "dislikedUsers": [],
        "likedBy": []
      },
      {
        "id": 4,
        "name": "Vadim",
        "desc": "Director",
        "age": 38,
        "city": "Warsaw",
        "isActive": false,
        "image": "5.jpg",
        "likedUsers": [],
        "superLikedUsers": [],
        "dislikedUsers": [],
        "likedBy": []
      },
      {
        "id": 5,
        "name": "Ania",
        "desc": "Stewardess",
        "age": 32,
        "isActive": false,
        "city": "Warsaw",
        "image": "6.jpg",
        "likedUsers": [],
        "superLikedUsers": [],
        "dislikedUsers": [],
        "likedBy": [],
        "verified": "badge.png"
      },
      {
        "id": 6,
        "name": "Karolina",
        "desc": "Model",
        "age": 21,
        "isActive": false,
        "city": "Warsaw",
        "image": "7.jpg",
        "likedUsers": [],
        "superLikedUsers": [],
        "dislikedUsers": [],
        "likedBy": []
      }
  ],
}

const reducers = {
  users: usersRedux,
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initalState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;