import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type InitialStateProp = {
    mode: string
} 

const initialState: InitialStateProp = {
    mode: ''
}

const themeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggleMode : (state, action:PayloadAction<string>) => {

                state.mode = action.payload
            
                        
              }
    },

})

export const { toggleMode } = themeSlice.actions

export default themeSlice.reducer
