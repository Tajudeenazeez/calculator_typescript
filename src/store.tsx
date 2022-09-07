import { configureStore } from "@reduxjs/toolkit";
import  calculateReducer  from './slices/calcSlice'
import themeReducer from './slices/themeSlice'


const store = configureStore({
    reducer: {
        cal: calculateReducer,
        theme: themeReducer,
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch

