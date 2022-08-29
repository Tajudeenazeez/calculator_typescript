import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


type InitialStateProp = {
    inputValue: string,
    displayValue: string,
}

const initialState: InitialStateProp = {
    inputValue : '',
    displayValue : '',
}

export const calculateSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        updateCalculatedValue: (state, action: PayloadAction<string>) => {
            const value = action.payload
            switch(value){
                case '=': 
                    {
                        if(state.inputValue !== ''){
                            try {
                                const formatted = eval(state.inputValue)

                                state.displayValue = formatted.toLocaleString('en-US')
                            } catch (error) {
                                alert("Math error")
                                state.displayValue = ''
                            }
                        }
                        break
                    }
                case 'del':
                    {
                        const inputValue = state.inputValue.substring(0, state.inputValue.length-1)

                        state.inputValue = inputValue

                        break
                    }
                case 'reset': 
                    {
                        state.inputValue = ''
                        state.displayValue = ''

                        break
                    }
                default : {
                    state.inputValue += value
                }
            }

        }

    }
})


export const { updateCalculatedValue} = calculateSlice.actions

export default calculateSlice.reducer