import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const userFavorite = createSlice({
  name: 'userFavorite',
  initialState,
  reducers: {
    addfavorite: (state, action) => {
        if(state.length > 0) {
            if(state.find(user => user.id === action.payload.id)) {
                return state.filter(user => user.id !== action.payload.id)
            }
        }
        return [...state,
            {
                id: action.payload.id,
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