import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    list: [],
  },
  reducers: {
    setCompanyList(state, action) {
      state.list = action.payload;
    },
  },
});

export default companySlice.reducer;

export const { setCompanyList } = companySlice.actions;
