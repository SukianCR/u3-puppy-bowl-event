// Import createApi (function to create an API service) and fetchBaseQuery (a basic fetch wrapper)
// from Redux Toolkit Query's React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

// Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query
// Define an API using createApi
export const playersApi = createApi({
  // Unique string used in constructing Redux action types, state selectors, and React hook names
  reducerPath: "playersApi",
  // Define a base query function that all endpoints will use as the base of their request
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/",
  }),

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "players",
        method: "GET",
        responseHandler: (response) => response.text(),
      }),
      providesTags: ["Player"],
    }),
  }),
});

const storeToken = (state, { payload }) => {
  state.token = payload.token;
};

const playersSlice = createSlice({
  name: "getUsers",
  initialState: {
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      playersApi.endpoints.getUsers.matchFulfilled,
      storeToken
    );
  },
});

export default playersSlice.reducer;
export const { useGetUsersQuery } = playersApi;

//export default userSlice.reducer;
//export const { useGetUsersQuery } = userApi;
