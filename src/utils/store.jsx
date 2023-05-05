import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlince from "./searchSlince";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlince,
    chat: chatSlice,
  },
});
export default store;
