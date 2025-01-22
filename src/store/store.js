import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from './subredditSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    subreddit: subredditReducer,
    favorites: favoritesReducer,
  },
});