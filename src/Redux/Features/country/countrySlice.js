import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedCountry : 0
} ;

const countrySlice = createSlice({
    name : 'country' , 
    initialState , 
    reducers : {
        selectCountry : (state, action) => {
            state.selectedCountry = action.payload
        }
    }
})

export const {selectCountry} = countrySlice.actions ; 
export default countrySlice.reducer ; 