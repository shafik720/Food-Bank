import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedCountry : 0
} ;

const countrySlice = createSlice({
    name : 'country' , 
    initialState , 
    reducers : {}
})

export const {} = countrySlice.actions ; 
export default countrySlice.reducer ; 