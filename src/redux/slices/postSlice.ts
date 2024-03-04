import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type PostType = {
    body: string;
    id: number;
    title: string;
    userId: number;
};

export type PostState = {
    posts: PostType[];
    status: string;
};

export const fetchPosts = createAsyncThunk<PostType[], number>(
    '@@posts/fetchPosts',
    async function (start, { rejectWithValue }) {
        console.log(start);
        try {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=20`,
            );
            return data;
        } catch (error) {
            let message = 'Unknown Error';
            if (error instanceof Error) message = error.message;
            return rejectWithValue(message);
        }
    },
);

const initialState: PostState = {
    posts: [],
    status: 'loading',
};

const postsSlice = createSlice({
    name: '@@posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                const oldState = state.posts;
                oldState.push(...action.payload);
                state.posts = oldState;
                state.status = 'success';
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = 'error';
                state.posts = [];
            });
    },
});

export const postsReducer = postsSlice.reducer;
