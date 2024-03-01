import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  control: {
    model: false,
    duration: 6000,
    message: 'This is a success Alert inside a Snackbar!',
    severity: 'success',
  },
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbar: (state, action) => {
      state.control = action.payload;
    },
  },
});

// or we could set our initial state to an object like this
// const initailState = {
// post: [],
// anotherstate: '',
//}
// in the reducers we would update this by saying //state.post.push(action.payload) instead

export const { setSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
