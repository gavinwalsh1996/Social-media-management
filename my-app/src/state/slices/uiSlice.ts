import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  showCreatePost: boolean;
}

const initialState: UIState = {
  showCreatePost: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showCreatePost: (state) => {
      state.showCreatePost = true;
    },
    hideCreatePost: (state) => {
      state.showCreatePost = false;
    },
  },
});

export const { showCreatePost, hideCreatePost } = uiSlice.actions;
export default uiSlice.reducer;
