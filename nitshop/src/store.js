import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import cartReducer from "./redux/CartSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});