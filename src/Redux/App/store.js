import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Features/Api/apiSlice";
import countryReducer from '../Features/country/countrySlice'


export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        country : countryReducer
    },
    middleware : (getDefaultMiddleWares) => getDefaultMiddleWares().concat(apiSlice.middleware) , 
})