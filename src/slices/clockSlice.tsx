import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type initialStateProp = {
    hour: number
    minutes:number
}
const initialState: initialStateProp = {
    hour:0,
    minutes:0
}

export const clockSlice = createSlice(
    {    
        name: 'time',
        initialState,
        reducers: {
            updateTime : (state, action:PayloadAction<string>) => {
                let clock;
                // state.hour = action.payload
                clock = new Date()
                state.hour = clock.getHours()
                state.minutes = clock.getSeconds()
            }
            
        }
})

export const {updateTime} = clockSlice.actions 

export default  clockSlice.reducer
