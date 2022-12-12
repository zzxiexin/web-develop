import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './module/counter';
import movieReducer from './module/async_module';
console.log('counterSlice====', counterReducer);
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter: counterReducer,
    movie: movieReducer,
  },
});

export default store;
