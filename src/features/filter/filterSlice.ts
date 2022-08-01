import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    location: "",
    price: "",
  },
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = filterSlice.actions;

export default filterSlice.reducer;
