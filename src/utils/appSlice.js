//importing redux toolkit
import { createSlice } from "@reduxjs/toolkit";

//creating a slice here
const appSlice = createSlice(
    {
        name:"app",
        initialState:{
            products: [],
            cart: [],
            itemToDisplay: "",
            totalCart: 0,
        },
        reducers:{
            Add_products:(state,actions)=>{
            }
        }
    }
)