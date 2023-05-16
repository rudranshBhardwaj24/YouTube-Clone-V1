import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    auth: false,
  },
  reducers: {
    toggleLogin: (state) => {
      console.log(state.auth);
      state.auth = true;
    },
  },
});
export const { toggleLogin } = loginSlice.actions;
export default loginSlice.reducer;
