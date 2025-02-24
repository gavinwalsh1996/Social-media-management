import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  content: string;
  platform: "LinkedIn" | "Instagram" | "Facebook" | null;
  scheduledPosts: {
    content: string;
    platform: string;
    scheduledTime: string;
  }[];
}

const initialState: PostState = {
  content: "",
  platform: null,
  scheduledPosts: [],
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
    schedulePost: (
      state,
      action: PayloadAction<{
        content: string;
        platform: string;
        scheduledTime: string;
      }>
    ) => {
      console.log("Adding scheduled post:", action.payload);
      state.scheduledPosts.push(action.payload);
    },
  },
});

export const { setPostContent, setPlatform, schedulePost } = postSlice.actions;
export default postSlice.reducer;
