import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react" ; 


export const apiSlice = createApi({
    reducerPath : 'api' , 
    baseQuery : fetchBaseQuery({
        // baseUrl : import.meta.env.VITE_APP_REDUX_BASE_QUERY
        // baseUrl : 'https://server-for-foodbank.vercel.app',
        baseUrl : 'http://localhost:4000',
    }),
    tagTypes : [] , 
    endpoints : (builder) => ({}) 
})