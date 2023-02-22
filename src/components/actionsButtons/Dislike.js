import React from "react";
import { useDispatch } from "react-redux";
import { addToDislikedUsers } from "../../redux/usersSlice";

const Dislike = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(addToDislikedUsers())}>
      <img src="images/misc/dislike.png" alt="Dislike User" />
    </button>
  );
};

export default Dislike;
