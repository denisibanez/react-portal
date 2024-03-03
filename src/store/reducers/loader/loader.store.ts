import { createSlice } from '@reduxjs/toolkit';
import { ControlLoaderInterface } from '../../../models';

const initialState: ControlLoaderInterface = {
  control: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state, action) => {
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

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
