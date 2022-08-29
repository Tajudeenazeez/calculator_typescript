import { configureStore } from "@reduxjs/toolkit";
import  calculateReducer  from './slices/calcSlice'


const store = configureStore({
    reducer: {
        cal: calculateReducer

    },
})

export default store;

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch

