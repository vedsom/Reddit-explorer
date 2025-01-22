import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSubreddit: null,
  currentPage: 1,
};

const subredditSlice = createSlice({
  name: 'subreddit',
  initialState,
  reducers: {
    setCurrentSubreddit: (state, action) => {
      state.currentSubreddit = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentSubreddit, setCurrentPage } = subredditSlice.actions;
export default subredditSlice.reducer;