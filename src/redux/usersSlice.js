import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [
    {
      id: 0,
      name: "Yevgeniy",
      desc: "Developer",
      age: 32,
      city: "Warsaw",
      image: "1.jpg",
      isActive: true,
      likedUsers: [],
      superLikedUsers: [],
      dislikedUsers: [],
      likedBy: [],
      verified: "badge.png",
    },
    {
      id: 1,
      name: "Joana",
      desc: "Model",
      age: 38,
      city: "Warsaw",
      image: "2.jpg",
      isActive: false,
      likedUsers: [],
      superLikedUsers: [],
      dislikedUsers: [],
      likedBy: [],
      verified: "badge.png",
    },
    {
      id: 2,
      name: "Ilona",
      desc: "ADHD",
      age: 32,
      isActive: false,
      city: "Łódz",
      image: "3.jpg",
      likedUsers: [],
      superLikedUsers: [],
      dislikedUsers: [],
      likedBy: [],
      verified: "badge.png",
    },
    {
      id: 3,
      name: "Kamil",
      desc: "Manager",
      age: 36,
      isActive: false,
      city: "Warsaw",
      image: "4.jpg",
      likedUsers: [],
      superLikedUsers: [],
      dislikedUsers: [],
      likedBy: [],
    },
    {
      id: 4,
      name: "Vadim",
      desc: "Director",
      age: 38,
      city: "Warsaw",
      isActive: false,
      image: "5.jpg",
      likedUsers: [],
      superLikedUsers: [],
      dislikedUsers: [],
      likedBy: [],
    },
    {
      id: 5,
      name: "Ania",
      desc: "Stewardess",
      age: 32,
      isActive: false,
      city: "Warsaw",
      image: "6.jpg",
      likedUsers: [],
      superLikedUsers: [],
      dislikedUsers: [],
      likedBy: [],
      verified: "badge.png",
    },
    {
      id: 6,
      name: "Karolina",
      desc: "Model",
      age: 21,
      isActive: false,
      city: "Warsaw",
      image: "7.jpg",
      likedUsers: [],
      superLikedUsers: [],
      dislikedUsers: [],
      likedBy: [],
    },
  ],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addToLikedUsers: (state) => {
      const toMove = state.all.find((user) => !user.isActive);
      const activeUserLike = state.all.find((user) => user.isActive);
      activeUserLike.likedUsers.push(toMove);
      state.all = state.all.filter((user) => user.id !== toMove.id);
    },
    addToDislikedUsers: (state) => {
      const toMove = state.all.find((user) => !user.isActive);
      const activeUser = state.all.find((user) => user.isActive);
      activeUser.dislikedUsers.push(toMove);
      state.all = state.all.filter((user) => user.id !== toMove.id);
    },
    addToSuperLikedUsers: (state) => {
      const toMove = state.all.find((user) => !user.isActive);
      const activeUser = state.all.find((user) => user.isActive);
      activeUser.superLikedUsers.push(toMove);
      state.all = state.all.filter((user) => user.id !== toMove.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToLikedUsers, addToDislikedUsers, addToSuperLikedUsers } =
  usersSlice.actions;

export default usersSlice.reducer;
