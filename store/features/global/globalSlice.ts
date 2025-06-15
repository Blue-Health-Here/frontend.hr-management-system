import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isLoading: false,
  profileData: null,
  activeSidebarItem: {
    parent: null,
    child: null,
  },
};

const globalSlice = createSlice({
  name: "global",
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
    },
    setActiveSidebarItem: (state, action) => {
      state.activeSidebarItem = action.payload;
    },
  },
});

export const {
  setIsSidebarOpen,
  setIsLoading,
  setProfileData,
  setActiveSidebarItem,
} = globalSlice.actions;

export default globalSlice.reducer;
