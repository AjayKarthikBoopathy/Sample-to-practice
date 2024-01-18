import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: 0
    },
    reducers: {
        incrementData : (state, action) => {
            state.users = state.users + 1;
        },
        decrementData : (state, action) => {
            state.users = state.users - 1;
        }

        
        
    }
})

export const {incrementData, decrementData} = userSlice.actions;
export default userSlice.reducer;