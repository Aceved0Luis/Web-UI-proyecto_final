import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const userFavorite = createSlice({
  name: 'userFavorite',
  initialState,
  reducers: {
    addfavorite: (state, action) => {
      return [...state,
        {
            id: state.length + 1,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            email: action.payload.email,
            avatar: action.payload.avatar
        }
      ]
    },
    delfavorite: (state, action) => {
        return state.filter(user => user.id !== action.payload.id)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addfavorite, delfavorite } = userFavorite.actions

export default userFavorite.reducer