import { createSlice } from '@reduxjs/toolkit';

const initialState = ['Initial Post'];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

// or we could set our initial state to an object like this
// const initailState = {
// post: [],
// anotherstate: '',
//}
// in the reducers we would update this by saying //state.post.push(action.payload) instead

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
