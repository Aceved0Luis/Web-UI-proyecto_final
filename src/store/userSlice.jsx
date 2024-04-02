import { createSlice } from '@reduxjs/toolkit'
import { getData } from '../getApi'

var data;
await Promise.all([getData("https://reqres.in/api/users?page=1"),(getData("https://reqres.in/api/users?page=2"))]).then((values) => {
  data = (values[0].concat(values[1]))
})

const initialState = data

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state,
        {
          id: action.payload.id,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          email: action.payload.email
        }
      ]
    },
    del: (state, action) => {
      return state.filter(user => user.id !== action.payload.id)
    },
  }
})

// Action creators are generated for each case reducer function
export const { add,del } = userSlice.actions

export default userSlice.reducer