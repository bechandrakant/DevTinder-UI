import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload, "--");
      state.user = action.payload;
    },
    removeUser: (state) => {
      // eslint-disable-next-line no-unused-vars
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
