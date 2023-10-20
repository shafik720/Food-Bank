import { apiSlice } from "../Api/apiSlice";


export const countryApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getAllCountry : builder.query({
            query : () => 'getCountry'
        })
    })
})


export const {useGetAllCountryQuery} = countryApi