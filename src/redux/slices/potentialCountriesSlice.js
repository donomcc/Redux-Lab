import { createSlice } from "@reduxjs/toolkit";

export const potentialCounriesSlice = createSlice({
  name: "potentialCountries",
  initialState: {
    value: [
      {
        name: {
          common: "America",
        },
      },
    ],
  },
  reducers: {
    setPotentialCountries: (state, action) => {
      state.value = action.payload;
    },
    deletePotentialCountries: (state) => {
      state.value = null;
    },
  },
});

export const { setPotentialCountries, deletePotentialCountries } =
  potentialCounriesSlice.actions;

export const selectPotentials = (state) => state.potentialCountries.value;

export default potentialCounriesSlice.reducer;
