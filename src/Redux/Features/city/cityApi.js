import { apiSlice } from "../Api/apiSlice";


const cityApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getCityList : builder.query({
            query : (stateId) => `/getCityList/${stateId}` 
        })
    })
})


export const {useGetCityListQuery} = cityApi