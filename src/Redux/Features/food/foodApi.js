import { apiSlice } from "../Api/apiSlice";


export const foodApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({

        /* -------------------
            Add a food item to database
        -------------------- */
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
        })
    })
})

export const {useAddNewFoodReviewMutation} = foodApi