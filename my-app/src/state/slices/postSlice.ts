import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  content: string;
}

const initialState: PostState = {
  content: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    clearPostContent: (state) => {
      state.content = "";
    },
  },
});

export const { setPostContent, clearPostContent } = postSlice.actions;
export default postSlice.reducer;
