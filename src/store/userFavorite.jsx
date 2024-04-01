import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const userFavorite = createSlice({
  name: 'userFavorite',
  initialState,
  reducers: {
    addfavorite: (state, action) => {
      return [...state,
        {
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          email: action.payload.email
        }
      ]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addfavorite } = userFavorite.actions

export default userFavorite.reducer