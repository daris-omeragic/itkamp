import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import cartReducer from "./redux/CartSlice";
import productsReducer from "./redux/productsSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    products : productsReducer,
  },
});