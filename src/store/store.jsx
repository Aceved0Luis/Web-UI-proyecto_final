import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import userFavorite from "./userFavorite"


export const store = configureStore({
    reducer: {
        userSlice:userSlice,
        userFavorite:userFavorite
    }
})