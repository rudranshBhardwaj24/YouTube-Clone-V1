import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlince from "./searchSlince";
import chatSlice from "./chatSlice";
import loginSlice from "./loginSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlince,
    chat: chatSlice,
    login: loginSlice,
  },
});
export default store;
