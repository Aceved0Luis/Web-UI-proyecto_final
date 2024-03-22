import { createSlice } from '@reduxjs/toolkit'
import { getData } from '../getApi'

const  data = await getData("https://reqres.in/api/users?page=1")
const data2 = await getData("https://reqres.in/api/users?page=2")
const dataAll = [...data, ...data2]

const initialState = [dataAll]

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action) => {
        return [...state,
        {
            id: action.payload.id,
            avatar: action.payload.avatar,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            email: action.payload.email
        }]
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment } = userSlice.actions

export default userSlice.reducer