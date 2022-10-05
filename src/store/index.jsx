import { combineReducers, configureStore } from "@reduxjs/toolkit";

import companySlice from "./companySlice";
import employeeSlice from "./employeeSlice";

const rootReducer = combineReducers({
  company: companySlice,
  employee: employeeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
