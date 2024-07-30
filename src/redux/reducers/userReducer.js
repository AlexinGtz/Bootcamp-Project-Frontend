import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userType: "",
    firstName: "",
    lastName: ""
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUserData: (_, action) => {
            return action.payload;
        }
    }
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
