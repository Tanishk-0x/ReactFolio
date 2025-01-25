import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./CartSlice";
// import CartReducer from "./Slices"

export const store = configureStore({


    reducer: {
        cart: CartSlice , 
    },

    

}); 