import { apiSlice } from "../Api/apiSlice";


export const stateApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getCountryState : builder.query({
            query : (countryId) => `/getCountryState/${countryId}`
        }),
    })
})

export const {useGetCountryStateQuery} = stateApi