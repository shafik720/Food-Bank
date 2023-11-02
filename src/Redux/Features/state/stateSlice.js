import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedState : 0
} ;

const stateSlice = createSlice({
    name : 'countryState',
    initialState,
    reducers : {
        stateSelection : (state, action) =>{
            state.selectedState = action.payload ;
        }
    }
})

export const {stateSelection} = stateSlice.actions ;
export default stateSlice.reducer ; 