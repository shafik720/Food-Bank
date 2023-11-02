import { apiSlice } from "../Api/apiSlice";


export const foodApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({

        /* ------  Get all reviewed food item's data from database ------- */

        getAllFoodReview :builder.query({
            query : () => '/review/getAllfoods'
        }) ,

        /* ------ Add a food item to database -------- */
        addNewFoodReview : builder.mutation({
            query : (data) => ({
                url : '/review/addNewFood',
                method : 'POST',
                body : {data}
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const response = await queryFulfilled ;
                    console.log(response);
                }
                catch(err){
                    console.log(err);
                }
            }
        }),

        /* ------  Get food item's data by country from database ------- */
        getFoodByCountry : builder.query({
            query : (countryCode) => `/review/getFoodByCountry/${countryCode}`
        }),
        
        /* ------  Get food item's data by states from database ------- */
        getFoodByState : builder.query({
            query : (stateCode) => `/review/getFoodByState/${stateCode}`
        }),

        /* ------  Get food item's data by states from database ------- */
        getFoodBycity : builder.query({
            query : (cityCode) => `/review/getFoodByCity/${cityCode}`
        }),
    })
})

export const {useAddNewFoodReviewMutation, useGetAllFoodReviewQuery, useGetFoodByCountryQuery, useGetFoodByStateQuery, useGetFoodBycityQuery  } = foodApi