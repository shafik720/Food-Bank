import { apiSlice } from "../Api/apiSlice";


export const stateApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        // --- get all state's details
        getCountryState : builder.query({
            query : (countryId) => `/getCountryState/${countryId}`
        }),

        // --- get single state's details
        getSingleState : builder.query({
            query : (stateId)=> `/getSingleState/${stateId}`
        })
    })
})

export const {useGetCountryStateQuery, useGetSingleStateQuery} = stateApi