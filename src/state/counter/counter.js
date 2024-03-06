import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:"emailid",
}
const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        change:(state,action)=>{
            state.value=action.payload;
        },
    },
});
export const {change}=counterSlice.actions;
export default counterSlice.reducer;