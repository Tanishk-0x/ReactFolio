import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0 , 
}

//* createSlice() ek object leta he jisme minimum 3 chije hoti he 
//* 1 = name 
//* 2 = initialState 
//* 3 = reducers = ( functionality )

 export const counterSlice = createSlice({

    name : "counter" , 
    initialState , 

    reducers: {
        //functionality denge .. 
        increment : (state) => {
            state.value += 1 ; 
        }, 

        decrement : (state) => {
            state.value -= 1 ; 
        }
    }


})

// exporting functionality .. 
// actions se value ko leni padegi 

export const { increment , decrement } = counterSlice.actions ; 

export default counterSlice.reducer ; 