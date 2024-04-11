import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:"emailid",
    nam:"name"
}
const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        change:(state,action)=>{
            state.value=action.payload;   
        },
        changeNam:(state,action)=>{
            state.nam=action.payload;
        }
    },
});
export const {change,changeNam}=counterSlice.actions;
export default counterSlice.reducer;