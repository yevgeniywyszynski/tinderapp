import React from "react";
import { useDispatch } from "react-redux";
import { addToSuperLikedUsers } from "../../redux/usersSlice";

const SuperLike = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(addToSuperLikedUsers())}>
      <img src="images/misc/superlike.png" alt="SuperLike User" />
    </button>
  );
};

export default SuperLike;
