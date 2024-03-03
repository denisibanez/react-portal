import { configureStore } from '@reduxjs/toolkit';
import postReducer from '@/store/reducers/example/example.store';
import loaderReducer from '@/store/reducers/loader/loader.store';
import snackbarReducer from '@/store/reducers/snackbar/snackbar.store';
//note that my reducer here is imported from a folder called reducer. depending on how you set up your file structure this could be different for you.

const store = configureStore({
  reducer: {
    posts: postReducer,
    loader: loaderReducer,
    snackbar: snackbarReducer,
  },
});

export default store;
