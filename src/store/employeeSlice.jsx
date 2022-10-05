import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    list: [],
  },
  reducers: {
    setEmployeeList(state, action) {
      state.list = action.payload;
    },
  },
});

export default employeeSlice.reducer;

export const { setEmployeeList } = employeeSlice.actions;
