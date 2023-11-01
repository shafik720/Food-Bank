import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Features/Api/apiSlice";
import countryReducer from '../Features/country/countrySlice';
import stateReducer  from '../Features/state/stateSlice';


export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        country : countryReducer,
        stateOfCountry : stateReducer,
    },
    middleware : (getDefaultMiddleWares) => getDefaultMiddleWares().concat(apiSlice.middleware) , 
})