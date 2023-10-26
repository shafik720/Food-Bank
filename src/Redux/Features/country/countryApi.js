import { apiSlice } from "../Api/apiSlice";


export const countryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // get all country data
        getAllCountry: builder.query({
            query: () => '/getCountry'
        }),

        // --- get single country data
        getSingleCountry: builder.query({
            query: (countryId) => `/getSingleCountry/${countryId}`
        })
    })
})


export const { useGetAllCountryQuery, useGetSingleCountryQuery } = countryApi