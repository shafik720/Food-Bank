import { apiSlice } from "../Api/apiSlice";


const cityApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({

        // --- get all country details
        getCityList : builder.query({
            query : (stateId) => `/getCityList/${stateId}` 
        }),

        // --- get single city details
        getSingleCity : builder.query({
            query : (cityId)=> `/getSingleCity/${cityId}`
        })
    })
})


export const {useGetCityListQuery, useGetSingleCityQuery} = cityApi