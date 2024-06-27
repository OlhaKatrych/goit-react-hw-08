import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "", number:""},
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
      prepare(name) {
        return { payload: name };
      },
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
