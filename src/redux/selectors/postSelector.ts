import { RootState } from '../store';

export const selectPosts = (state:RootState) => state.postsState.posts;
export const selectStatus = (state:RootState) => state.postsState.status;
