import React from "react";
import { useDispatch } from "react-redux";
import { addToLikedUsers } from "../../redux/usersSlice";

const Like = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(addToLikedUsers())}>
      <img src="images/misc/like.png" alt="Like User" />
    </button>
  );
};
export default Like;
