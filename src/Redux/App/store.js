import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Features/Api/apiSlice";
import countryReducer from '../Features/country/countrySlice';
import countryStateReducer  from '../Features/state/stateSlice';


export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        country : countryReducer,
        countryStateReducer,
    },
    middleware : (getDefaultMiddleWares) => getDefaultMiddleWares().concat(apiSlice.middleware) , 
})