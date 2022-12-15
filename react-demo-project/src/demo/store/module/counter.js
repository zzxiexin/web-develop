import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  title: 'counter module',
};

export const counterModule = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.value += payload.value;
    },
    decrement: (state, { payload }) => {
      state.value -= payload.value;
    },
  },
});
console.log('counterSlice===', counterModule);
export const { increment, decrement } = counterModule.actions;
export default counterModule.reducer;
