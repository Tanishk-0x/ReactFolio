import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";


// configureStore = global store create krta he jaha per sara centralised data hoga state centralised padi hogi . 
// ek centralisedStore multiple slices se banta he  
// slice : uska reducer 

// Slices = Portion of Data 

// store = centralised ya global state he pure project ki 
// jha par sari ki sari State save hogi in the form of SLICES

export const store = configureStore( {

    reducer : {
        counter : counterSlice
    } , 

} )