import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
    isLoading: false,
    profileData: null
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setProfileData: (state, action) => {
            state.profileData = action.payload;
        }
    }
});

export const { setIsSidebarOpen, setIsLoading, setProfileData } = globalSlice.actions;

export default globalSlice.reducer;
