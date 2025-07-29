import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todo: [],
};
const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todo.push(action.payload);
    },
    // remove: (state,action)=>{state.todo.splice(action.payload,1)}
    remove: (state, action) => {
      state.todo = state.todo.filter((_, i) => i !== action.payload);
    },
  },
});
export const { add, remove } = TodoSlice.actions;
export default TodoSlice.reducer;
