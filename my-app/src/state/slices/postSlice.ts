import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  content: string;
  platform: "LinkedIn" | "Instagram" | "Facebook" | null;
}

const initialState: PostState = {
  content: "",
  platform: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    setPlatform: (state, action: PayloadAction<PostState["platform"]>) => {
      state.platform = action.payload;
    },
  },
});

export const { setPostContent, setPlatform } = postSlice.actions;
export default postSlice.reducer;
