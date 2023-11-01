import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedState : 0
} ;

const stateSlice = createSlice({
    name : 'countryState',
    initialState,
    reducers : {
        stateSelection : (state, action) =>{
            console.log(action.payload);
            state.selectedState = action.payload ;
        }
    }
})

export const {stateSelection} = stateSlice.actions ;
export default stateSlice.reducer ; 