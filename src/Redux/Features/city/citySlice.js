import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    selectedCity : 0
}

const citySlice = createSlice({
    name : 'city',
    initialState,
    reducers : {
        selectCity : (state, action) => {
            state.selectedCity = action.payload
        }
    }
})

export const {selectCity} = citySlice.actions ; 
export default citySlice.reducer 