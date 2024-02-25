import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/example/example.store';
//note that my reducer here is imported from a folder called reducer. depending on how you set up your file structure this could be different for you.

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
