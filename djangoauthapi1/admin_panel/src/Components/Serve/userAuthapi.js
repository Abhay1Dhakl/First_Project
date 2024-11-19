
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userAuthapi = createApi({
	reducerPath: 'userAuthapi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/' }),
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query: (admin) => {
				return {
					url: 'register/',
					method: 'POST',
					body: admin,
					headers: {
						'Content-type': 'application/json',
					}
				}
			}
		}),
		loginUser: builder.mutation({
			query: (user) => {
				return {
					url: 'login/',
					method: 'POST',
					body: user,
					headers: {
						'Content-type': 'application/json',
					}
				}
			}
		}),
		getloggeduser: builder.query({
			query: (access_token) => {
				return {
					url: 'profile/',
					method: 'GET',
					headers: {
						'authorization': `Bearer ${access_token}`,
					}
				}
			}
		}),
		changeUserPassword: builder.mutation({
			query: ({actualData, access_token}) => {
				return {
					url: 'changepassword/',
					method: 'POST',
					body: actualData,
					headers: {
						'authorization': `Bearer ${access_token}`,
					}
				}
			}
		}),

		booking: builder.mutation({
			query: (user) => {
				return {
					url: 'booking/',
					method: 'POST',
					body: user,
					headers: {
						'Content-type': 'application/json',
					}
				}
			}
		}),
		itinerary: builder.mutation({
			query: (admin) =>{
				return{
					url: 'itinerary/',
					method: 'POST',
					body: admin,
					headers: {
						'Content-type': 'application/json',
					}
				}
			}
		}),

		product: builder.mutation({
			query: (admin) => {
				return {
					url: 'product_add/',
					method: 'POST',
					body: admin,
					headers: {
						'Content-type': 'application/json',
					}
				}
			}
		}),

		
	}),

})
  


export const {useRegisterUserMutation, useLoginUserMutation, useGetloggeduserQuery, useChangeUserPasswordMutation, useBookingMutation, useProductMutation, useItineraryMutation} = userAuthapi