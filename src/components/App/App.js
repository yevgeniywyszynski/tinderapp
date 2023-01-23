import React from 'react';
import Header from '../Header/Header';
import Person from '../Person/Person';
import FinalyResult from '../FinalyResult/FinalyResult';

const App = ({ myLikedUsers, activeUser, mySuperLikedUsers, getNext }) => {
  
  return (
    <div className="app">
      <Header />
      {getNext ? (
        <Person
          key={getNext.id}
          person={getNext}
        />
      ) : (
        <FinalyResult
          activeUserImage={activeUser.image}
          likedUsers={myLikedUsers}
          superLikedUsers={mySuperLikedUsers}
        />
      )}
    </div>
  );
};

export default App;