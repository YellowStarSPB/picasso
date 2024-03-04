import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/postSlice';

const store = configureStore({
    reducer: {
        postsState: postsReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
