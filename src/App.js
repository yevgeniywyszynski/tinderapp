import React, { useState } from 'react';
import Header from './components/Header/Header';
import Person from './components/Person/Person';
import FinalyResult from '../src/components/FinalyResult/FinalyResult';
import db from './db.json';

const App = () => {
  const [people, setPeople] = useState(db);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  const removedPersonFromDataSrc = (peopleSource, userId) =>
    peopleSource.filter(user => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch (action) {
      case 'ADD_TO_LIKED_USERS':
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(db[userId]);

          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_TO_DISLIKED_USERS':
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(db[userId]);

          setDislikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_TO_SUPERLIKED_USERS':
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(db[userId]);

          setSuperLikedUsers(newSuperLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      default:
        return people;
    }
  };

  return (
    <div className="app">
      <Header />
      {people[1] ? (
        <Person
          key={people[1].id}
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <FinalyResult
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUsers={superLikedUsers}
        />
      )}
    </div>
  );
};

export default App;