import { createSlice } from "@reduxjs/toolkit";


// ^----- Creating Slice ----------- 

export const CartSlice = createSlice({
    name: "cart" , 
    initialState : [] , 

    reducers:{
        add:(state,action) => {
            state.push(action.payload) ; 
        }, 
        remove:(state,action) => {
            return state.filter( (item) => item.id !== action.payload ) ; 
        }, 
    }
}); 


//^ ------- exporting ---------------- 

export const {add , remove} = CartSlice.actions ; 

export default CartSlice.reducer ; 