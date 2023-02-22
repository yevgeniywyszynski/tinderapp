import React from "react";
import Header from "../Header/Header";
import Person from "../Person/Person";
import FinalyResult from "../FinalyResult/FinalyResult";
import { useSelector } from "react-redux";

const App = () => {
  const activeUser = useSelector((state) =>
    state.users.all.find((user) => user.isActive)
  );
  const getNext = useSelector((state) =>
    state.users.all.find((user) => !user.isActive)
  );

  return (
    <div className="app">
      <Header />
      {getNext ? (
        <Person key={activeUser.id} person={getNext} />
      ) : (
        <FinalyResult />
      )}
    </div>
  );
};

export default App;
